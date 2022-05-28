
export class Employee {
  id?: number | undefined;
  employee_name?: string;
  employee_salary?: number;
  employee_age?: number;
  profile_image?: string;
  employee_anual_salary?: number;


  constructor(id: number | undefined, employee_name: string, employee_salary: number, employee_age: number, employee_anual_salary: number , profile_image: string) {
    this.id = id;
    this.employee_name = employee_name;
    this.employee_salary = employee_salary;
    this.employee_age = employee_age;
    this.employee_anual_salary = employee_anual_salary
    this.profile_image = profile_image;
  }
}
