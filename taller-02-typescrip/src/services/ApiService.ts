import type { User } from "../interfaces/types";

export class ApiService {
     private apiUrl = "https://dummyjson.com/users";

     async getUsers(): Promise<User[]> { 

       try {
        const apiResponse = await fetch(this.apiUrl); 
        const bodyResponse = await apiResponse.json(); 
        const rawUsersData = bodyResponse.users; 
        const mappedUsersData = rawUsersData.map((rawUser: any) => { 
            const mappedUser: User = { 
                name: rawUser.firstName, 
                age: rawUser.age,
                email: rawUser.email,
                gender: rawUser.gender,
            };
            return mappedUser;
        });
        return mappedUsersData; 
     } catch (error) {
        console.error(`mensaje de error de la api`, error); 
        return []; 
         }
     }

  // Obtener un usuario por su ID
  async getUserById(id: number): Promise<User | null> {
    
       try {
        const apiResponse = await fetch (`${this.apiUrl}/${id}`) 
        const bodyResponse = await apiResponse.json(); 
        const mappedUser: User = {
            name: bodyResponse.firstName,
            age: bodyResponse.age,
            email: bodyResponse.email,
            gender: bodyResponse.gender,
        };
        return mappedUser;
       } catch (error) {
        console.error(`mensaje de error de la api`, error); 
        return null; 
       };
     }
   };
