import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-page-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FloatLabelModule,
    PasswordModule,
  ],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.scss',
})
export class PageProfileComponent {
  registerForm = this.fb.group({
    user: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.registerForm;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http
        .put('https://your-api-url.com', this.registerForm.value)
        .subscribe((response) => {
          this.registerForm.reset(); // Limpe os campos do formulário após a submissão
        });
    }
  }
}
