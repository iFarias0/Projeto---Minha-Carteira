class UserService {

    async register(data){
        let response = {
            message: "Ok"
        }
        return Promise.resolve(response)
    }
}

const userService = new UserService()
export default userService