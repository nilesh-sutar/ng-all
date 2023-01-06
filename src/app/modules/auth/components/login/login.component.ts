import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    this.authService
      .login('/auth/login', this.loginForm.value)
      .subscribe((result) => {
        sessionStorage.setItem('userData', JSON.stringify(result));
        sessionStorage.setItem('token', result.token);
        this.authService.loggedIn.next(true)
        this.router.navigate(['/main']);
        this.utilityService.openSnackbar(
          `You are logged in as <strong>
          ${result.firstName + ' ' + result.lastName}</strong>`
        );
      });
  }

  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.loginForm.controls['username'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }
}
