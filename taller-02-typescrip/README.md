# Taller 02 - TypeScript

# Estructura del proyecto
- SRC: Código fuente en TypeScript.
- INTERFACES: Interfaces y tipos (types.ts).
- CLASES: Clases como BaseEmployee, Developer, Manager.
- SERVICIOS: Servicios como api.Service.ts y EmployeeService.ts 

# La carpeta interfaces tiene un archivo types.ts
-User (interface): define los datos básicos de una persona → name, age, email, gender.
Employee (interface):agrega a User: id, position, department, salary.
Department (enum): lista fija de departamentos disponibles: IT, HR, SALES, MARKETING

# La clase BaseEmployee.ts
- Sirve base para crear los archivos Developer y Manager, esta base tiene dos metodos abstractos (getDetails) y (calculateSalary). 
# La clase Developer.ts
- tiene la siguiente estructura; Departamento fijo: Department.IT.
Atributo: programmingLanguages (lista de lenguajes).
Salario: 3000 + 200 × (número de lenguajes).
getDetails(): retorna nombre, departamento y lenguajes conocidos
# La clase Manager.ts 
- Tiene la siguiente estructura: Atributos: id, name, age, email, gender, department.
Constructor: recibe un User, id y department.
Métodos abstractos:
getDetails(): debe retornar info del empleado.
calculateSalary(): debe calcular el salario

# Carpeta Servicios
Se crea para tener acceso a dos archivos y no realizar toda la logica sobre la misma carpeta. 

# ApiService.ts
Servicio de coneccion a la appi
fetch(this.apiUrl): hace la petición a la API.
apiResponse.json(): convierte la respuesta en JSON.
bodyResponse.users: accede a la lista de usuarios.
map(...): transforma cada usuario "crudo" (rawUser) en el formato de tu interface User.
rawUser.firstName: lo guardas como name.
rawUser.age: lo guardas como age.
rawUser.email: lo guardas como email.
rawUser.gender: lo guardas como gender.
Si ocurre un error, se atrapa en el catch y devuelve [] (arreglo vacío).

# EmployeeService.ts
Se realiza la importacion de todas la clases y todos los servicios t types.
Es una clase de servicio que maneja una lista de empleados.
employees es un arreglo donde se guardan todos los empleados (ya sean Developer o Manager).
Carga empleados desde la API (loadEmployeesFromApi).
Busca empleados por ID (getEmployeeById).
Devuelve la lista de empleados (getAllEmployees).
Permite agregar empleados nuevos (addEmployee).