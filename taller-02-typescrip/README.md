# Taller 02 - TypeScript

# Estructura del proyecto
- SRC → Código fuente en TypeScript.
- INTERFACES → Interfaces y tipos (types.ts).
- CLASES → Clases como BaseEmployee, Developer, Manager.

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