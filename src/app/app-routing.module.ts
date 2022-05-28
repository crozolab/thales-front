import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeesComponent} from './feature/employee/components/list-employees/list-employees.component';
import {MenuComponent} from './shared/components/menu/menu.component';
import {DeveloperComponent} from './shared/components/developer/developer.component';

const routes: Routes = [
  { path: 'employee', component: ListEmployeesComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: MenuComponent },
  { path: 'developer', component: DeveloperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
