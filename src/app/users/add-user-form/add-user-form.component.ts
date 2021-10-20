import { UserService } from './../services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent implements OnInit {
  @Output() newUser = new EventEmitter();
  @Output() trogleModal = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    email: [null],
    first_name: [null],
    last_name: [null],
    avatar: [null],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Adicionando: ', this.form.value);
    this.userService.newUser(this.form.value).subscribe(
      ({ avatar, email, first_name, id, last_name }) => {
        this.trogleModal.emit();
        this.newUser.emit({ avatar, email, first_name, id, last_name });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTrogleModal() {
    this.trogleModal.emit();
  }
}
