import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
})
export class PageLoginComponent {
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const observer = {
        next: (response: any) => {
          console.log(response);
          // Handle successful login response (e.g., navigate to a different page)
        },
        error: (error: any) => {
          console.error(error);
          // Handle login errors (e.g., display an error message)
        },
        complete: () => {
          console.log('Login completed!'); // (Optional)
        },
      };

      this.http
        .post('https://your-api-url.com/login', this.loginForm.value)
        .subscribe(observer);
    }
  }
}
