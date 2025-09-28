import { BaseEmployee } from "../classes/BaseEmployee";
import { Developer } from "../classes/Developer";
import { Manager } from "../classes/Manager";
import { ApiService } from "../services/ApiService";
import type { User } from "../interfaces/types";
import { Department } from "../interfaces/types";

export class EmployeeService {
  private employees: BaseEmployee[] = [];

  // Inyección de dependencias: recibe el ApiService
  constructor(private ApiService: ApiService) {
    //inyectar y se crea de forma automática con el parametro
  }

  // Cargar usuarios desde la API y convertirlos en empleados
  async loadEmployeesFromApi(): Promise<void> {
    const users: User[] = await this.ApiService.getUsers();

    if (users.length === 0) {
      console.error("No se pudieron cargar usuarios desde la API");
      return;
    }

    // Ejemplo: tomamos los primeros usuarios para crear empleados
    const developer1 = new Developer(users[0], 1, ["JavaScript", "TypeScript"]);
    const developer2 = new Developer(users[1], 2, ["Python", "Java"]);
    const manager1 = new Manager(users[2], 3, Department.HR, 3);

    this.employees.push(developer1, developer2, manager1);
  }

  // Buscar empleado por ID
  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(employee => employee["id"] === id);
  }

  // Retornar todos los empleados
  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  // Agregar un nuevo empleado manualmente
  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }
}
