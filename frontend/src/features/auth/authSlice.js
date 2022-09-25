import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    user :{},
    isLoading : false,
    isError : false,
    isSuccess : false,
    isAuthenticated: false,
    registered : false,
    isVerifeyed : false, 
    message:''
}

export const login = createAsyncThunk(
    'api/token',
    async(userData,thunkApi)=>{
        try{
            return await authService.loginUser(userData)
        }catch(err){
            const message = err.response.status
            return thunkApi.rejectWithValue(message)
        }
    }
)

export const getUser = createAsyncThunk(
    'api/getuser',
    async(_,thunkApi)=>{
        try{
            return await authService.getUser()
        }catch(err){
            const message = (
                err.response && err.response.data && err.response.data.message
            ) || err.message || err.toString()
            return thunkApi.rejectWithValue(message)
        }
    }
)

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducer:{
        restt:{
            user:{},
            isLoading:false,
            isError:false,
            isVerifeyed:false,
            isAuthenticated:false,
            registered : false,
        }
    },
    extraReducers:builder =>[
        builder.addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state)=>{
            state.isLoading = false
            state.isAuthenticated = true
        })
        .addCase(login.rejected,(state, action)=>{
            state.isLoading = false
            state.message = action.payload
        })
        .addCase(getUser.pending, state =>{
            state.isLoading =true
        })
        .addCase(getUser.fulfilled, (state,actions) =>{
            state.user = actions.payload
            state.isLoading = false
          })
        .addCase(getUser.rejected, state =>{
            state.isLoading = false
          })
    ]
})

export const {rest} = authSlice.actions
export default authSlice.reducer