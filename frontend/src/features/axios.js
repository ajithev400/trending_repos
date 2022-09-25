import axios from 'axios'
const client_id = process.env.REACT_APP_ClientID
const client_secret_id = process.env.REACT_APP_Clientsecret

export function githubLogin(code) {
    axios
      .post(`http://127.0.0.1:8000/api-auth/convert-token/`, {
        token: code,
        backend: "github",
        grant_type: "convert_token",
        client_id: client_id,
        client_secret:client_secret_id,
      })
      .then((res) => {
       // Save somewhere these access and refresh tokens
        console.log(res.data);
      });
   }


const getRepos =(data)=>{
    return axios.get(`https://api.github.com/search/repositories?q=${data}/`,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: 'sort=stars&order=desc&q=language:java&q=created:>`date -v-7d \'+%Y-%m-%d\'`'
    })
}

//    fetch('https://api.github.com/search/repositories', {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'sort=stars&order=desc&q=language:java&q=created:>`date -v-7d \'+%Y-%m-%d\'`'
// });

const axiosService ={
    getRepos,
}

export default axiosService