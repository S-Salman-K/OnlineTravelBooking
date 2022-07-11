import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  }

  reactiveForm: FormGroup;

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
      {
        validators: this.mustMatch('password', 'confirmPassword')

      });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.reactiveForm.controls;
  }


  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true })
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onFormSubmit() {

    if (this.reactiveForm.invalid) {
      return;
    }

    this.user.email = this.reactiveForm.value.email;
    this.user.firstName = this.reactiveForm.value.firstName;
    this.user.lastName = this.reactiveForm.value.lastName;
    this.user.password = this.reactiveForm.value.password;
    this.user.confirmPassword = this.reactiveForm.value.confirmPassword;


    this.userService.addUser(this.user).subscribe(
      //Success
      (data) => {
        Swal.fire('Success', 'user is registered', 'success');

      },

      //Failure
      (error) => {
        this._snackBar.open('Something went wrong!!', 'ok', {
          duration: 3000
        })
      }
    )

    this.reactiveForm.reset();
  }

}
