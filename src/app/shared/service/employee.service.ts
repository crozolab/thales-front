import {Injectable} from '@angular/core';

import {Employee} from '../model/employee';
import {Observable} from 'rxjs';
import {HttpService} from '../../core/services/http.service';

@Injectable({
  providedIn: 'any',

})
export class EmployeeService {
  constructor(private httpService: HttpService) {
  }

  private url = '/employees';

  public getAllEmployees(): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(this.url);
  }

  public  getEmployeeById(id: number): any {
    return this.httpService.get(`${this.url}/${id}`);
  }



}
