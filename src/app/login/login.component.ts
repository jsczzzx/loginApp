import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onClickRegister() {
    this.router.navigate(['register']);
  }

  onSubmit (myForm: NgForm) {
    if (myForm.valid) {
      this.auth.login(myForm.value).subscribe({
        next: (response) => {
          alert(response.message);
          this.router.navigate(['home']);
        },
        error: (error) => {
          alert(error);
        }
      });
    }
  }
}
