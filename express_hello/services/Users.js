// POO

class UserService {
    constructor(){
        this.users = [];
        this.createFakeUser();
    }

    createFakeUser(){
        this.users =[
            {
                id:1, 
                name: "juan",
                lastName: "perez",
                email: "jgarcia@crsleon.com"
            },
            {
                id:2,
                name: "Eddy",
                lastName: "Urbano",
                email: "eurbano@crsleon.com"
            },
        ]
    }

    createUser(body)
    {

        return new Promise ((resolve, reject) => {
            setTimeout( 
                () =>{
                    const copyUsers =[...this.users]
                    copyUsers.push(body)
                    this.users = copyUsers

                    resolve('User created successfully')
                }
            )
        }, 1000 )
    }

    updateUser(id, newInfoUser){
        return new Promise ( (resolve, reject) => {

           const indexUser = this.users.findIndex((elemento) =>  elemento.id === parseInt(id)
            )
            console.log("id :", indexUser.id)
            console.log('indexUser', this.users[indexUser])
            let user=this.users[indexUser]

            if(user)
            {
                user = {...user, ...newInfoUser}
                this.users[indexUser] = user
                resolve('User updated successfully')
            } else {
                reject('User not found')
            }
        } )
    }
}

export default UserService 
