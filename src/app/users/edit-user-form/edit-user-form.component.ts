import { UserService } from './../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss'],
})
export class EditUserFormComponent implements OnInit {
  @Input() userId: number = -1;
  @Output() editUser = new EventEmitter();
  @Output() trogleModal = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    id: [null],
    email: [null],
    first_name: [null],
    last_name: [null],
    avatar: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('Editando o ID:', this.userId);
    this.getUserById(this.userId);
  }

  onSubmit() {
    this.userService.editUser(this.form.value).subscribe(
      (data) => {
        this.editUser.emit({
          avatar: data.avatar,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          id: this.userId,
        });
      },
      (error) => console.log(error)
    );
  }

  getUserById(id: number) {
    this.userService.getById(id).subscribe(
      (data) => {
        console.log('Dados da API:', data.data);
        this.form.setValue(data.data);
      },
      (error) => console.log(error)
    );
  }

  onTrogleModal() {
    this.trogleModal.emit();
  }
}
