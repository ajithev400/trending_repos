export const isLoggedIn = ()=>{
    try{
        const val = localStorage.getItem("user")
        if(val){
            return !!val
        }
    }catch{
        return false
    }
}

export const commonService ={
    isLoggedIn,
}

export default commonService