import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

@NgModule({
  declarations: [UsersComponent, AddUserFormComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UsersModule {}
