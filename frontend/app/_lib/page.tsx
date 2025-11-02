export interface course{
        _id:object,
        code:string,
        name:string,
    }
export interface student{
        _id:object,
        name:string,
        role:string
        age:number,
        courses:string[]

    }

    export interface User{
        _id:object,
        id:string,
        name:string,
        role:string
        age:number,
        courses:string[]

    }
      export interface AuthResponse {
        user:   User;
      }
      
