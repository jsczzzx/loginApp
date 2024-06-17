import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  passwordsMatch(form: NgForm): boolean {
    const password = form.controls['password'].value;
    const confirmPassword = form.controls['password2'].value;
    return password === confirmPassword;
  }

  onSubmit (myForm: NgForm) {
    if (myForm.valid) {
      this.auth.register(myForm.value).subscribe({
        next: (response) => {
          alert(response.message);
          this.router.navigate(['login'])
        },
        error: (error) => {
          alert(error);
        }
      });
    }
  }
}
