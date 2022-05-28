import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './feature/employee/components/list-employees/list-employees.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './shared/components/menu/menu.component';
import { DeveloperComponent } from './shared/components/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    MenuComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ListEmployeesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
