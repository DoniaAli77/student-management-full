export interface course{
        _id:object,
        id:string,
        name:string,
    }
export interface student{
        _id:object,
        id:string,
        name:string,
        role:string
        age:number,
        courses:course[]

    }

    export interface User{
        _id:object,
        id:string,
        name:string,
        role:string
        age:number,
        courses:course[]

    }
      export interface AuthResponse {
        user:   User;
      }
      
