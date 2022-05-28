import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../../shared/service/employee.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../../shared/model/employee';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  public employeeList: Observable<Employee[]> | undefined;
  public employee: Employee | undefined;
  public showSecondTable = false;
  // @ts-ignore
  form: FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
    this.buildForm();
    this.employeeList = this.employeeService.getAllEmployees();

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(1), Validators.max(24)]]
    });
  }

  ngOnInit(): void {
    this.form.get('id').valueChanges.subscribe(value => {
      if (!value) {
        this.showSecondTable = false;
        console.log('hello');
        this.employeeList = this.employeeService.getAllEmployees();
      }
    });
  }

  EmployeeById(id: number) {

    this.employeeService.getEmployeeById(id)
      .subscribe(
          (result: Employee) => {
          this.employee = result
          console.log(result)
        },
          (error: any) => {
          Swal.fire({
            title: 'OK',
            text: 'Something',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        },
        () => {
          this.showSecondTable = true;
        }
      );


  }


  save(event: any) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get idValue() {
    return this.form.get('id');
  }

}
