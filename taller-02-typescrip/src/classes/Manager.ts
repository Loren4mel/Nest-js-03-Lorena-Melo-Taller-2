import { BaseEmployee } from "./BaseEmployee";
import type { User } from "../interfaces/types";
import type { Department } from "../interfaces/types";


export class Manager extends BaseEmployee {
  private teamSize: number;

  constructor(user: User, id: number, department: Department, teamSize: number) {
    super(user, id, department);
    this.teamSize = teamSize;
  }

  getDetails(): string {
    return `Manager: ${this.name}, Depto: ${this.department}, Equipo: ${this.teamSize} personas`;
  }

  calculateSalary(): number {
    return 4000 + (100 * this.teamSize);
  }
}
