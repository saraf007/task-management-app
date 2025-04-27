import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    //private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    // this.authService.login(this.loginForm.value).subscribe({
    //     next: () => this.router.navigate(['/dashboard']),
    //     error: (err) => {
    //         this.errorMessage = err.error?.message || 'Invalide credentials';
    //     }
    // })
  }
}
