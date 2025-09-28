import type { User } from "../interfaces/types";

export class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  // Obtener TODOS los usuarios
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("NO se pudieron obtener los usuarios");
      }

      const data = await response.json();

      
      return data.users.map((u: any) => ({
        name: `${u.firstName} ${u.lastName}`,
        age: u.age,
        email: u.email,
        gender: u.gender,
      }));
    } catch (error) {
      console.error("Error en getUsers:", error);
      return []; 
    }
  }

  // Obtener un usuario por su ID
  async getUserById(id: number): Promise<User | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      if (!response.ok) {
        throw new Error("Usuario NO encontrado");
      }

      const u = await response.json();

      // Igual que arriba, solo seleccionamos lo necesario
      return {
        name: `${u.firstName} ${u.lastName}`,
        age: u.age,
        email: u.email,
        gender: u.gender,
      };
    } catch (error) {
      console.error(`Error en getUserById(${id}):`, error);
      return null; // en caso de error devolvemos null
    }
  }
}
