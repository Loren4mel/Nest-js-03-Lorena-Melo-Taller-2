import { ApiService } from "./services/apiService";
import { EmployeeService } from "./services/EmployeeService";


async function main(): Promise<void> {
  try {

    const apiService = new ApiService(); 
    const employeeService = new EmployeeService(apiService); 


    await employeeService.loadEmployeesFromApi(); 


    const employees = employeeService.getAllEmployees();

    console.log("=== SISTEMA DE EMPLEADOS ===");
    
    for (const employee of employees) { 
      console.log(`detalles: ${employee.getDetails()}`);
      console.log(`salario: ${employee.calculateSalary()}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
