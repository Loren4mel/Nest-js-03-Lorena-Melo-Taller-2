import { BaseEmployee } from "./BaseEmployee";
import { type User } from "../interfaces/types";
import { Department } from "../interfaces/types";



export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(user: User, id: number, languages: string[]) {
    super(user, id, Department.IT);
    this.programmingLanguages = languages;
  }

  getDetails(): string {
    return `Developer: ${this.name}, Lenguajes: ${this.programmingLanguages.join(", ")}, programmingLanguages: ${this.programmingLanguages}`;
  }
 
//Salario base 3000 + 200 por cada lenguaje de programación conocido
  calculateSalary(): number {
    return 3000 + (200 * this.programmingLanguages.length);
  }
}
