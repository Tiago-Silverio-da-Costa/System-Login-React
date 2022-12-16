import axios from 'axios'

export default class UserService {
    constructor () {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN + '/api'
        })
    }

    async Login (dados) {
        const {data} = await this.axios.post('/login', dados)

        if (data) {
            localStorage.setItem("name", data.user.name)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("token", data.token.token)

            return true
        }

        return
    }

     userAuth() {
        return localStorage.getItem("token") !== undefined ? true : false
     }

     async logout () {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
     }
}