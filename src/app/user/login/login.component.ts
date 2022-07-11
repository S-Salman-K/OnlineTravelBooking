 import { Component, OnInit } from '@angular/core'; 
 import { MatSnackBar } from '@angular/material/snack-bar';
 import { Router } from '@angular/router';
 import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  userLoginData = {
    username: '',
    password: ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginFormSubmit() {
    if (this.userLoginData.username.trim() == '' || this.userLoginData.username == null) {
      this.snack.open("Email is required", 'ok', {
        duration: 3000
      });
      return;
    }

    if (this.userLoginData.password.trim() == '' || this.userLoginData.password == null) {
      this.snack.open("Password is required", 'ok', {
        duration: 3000
      });
      return;
    }

    this.loginService.generateToken(this.userLoginData).subscribe(
      (data: any) => {
        console.log("success");
        //Login User
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user) => {
            this.loginService.setUser(user);

            if (this.loginService.getUserRole() === "Admin") {

              //Admin Dashboard
              this.router.navigate(['/admin']);
              this.loginService.loginStatusSubject.next(true);

            } else if (this.loginService.getUserRole() === "Normal") {

              //Normal Dashboard
              this.router.navigate(['/user']);
              this.loginService.loginStatusSubject.next(true);

            } else {
              this.loginService.logout();
            }

          },
          (error) => {
            console.log(error);
          }
        )
        
      },
      (error) => {
        console.log(error);
        this.snack.open("Invalid Details!!", "ok", {
          duration: 3000
        })

      }
    )
  }

}
