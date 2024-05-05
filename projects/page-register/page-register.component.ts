import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss',
})
export class PageRegisterComponent {
  registerForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        user: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, this.emailDomainValidator],
        ],
        confirmEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: this.matchingFieldsValidator(
          'email',
          'confirmEmail',
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  emailDomainValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const email: string = control.value;
    const domain = email.split('@')[1];
    if (
      email === '' ||
      (domain.endsWith('.com') &&
        (domain.startsWith('gmail.') ||
          domain.startsWith('hotmail.') ||
          domain.startsWith('outlook.')))
    ) {
      return null;
    } else {
      return { emailDomain: true };
    }
  }

  matchingFieldsValidator(
    field1: string,
    field2: string,
    field3: string,
    field4: string
  ) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[field1];
      const control2 = formGroup.controls[field2];
      const control3 = formGroup.controls[field3];
      const control4 = formGroup.controls[field4];

      if (control1.value !== control2.value) {
        control2.setErrors({ notMatching: true });
      } else {
        control2.setErrors(null);
      }

      if (control3.value !== control4.value) {
        control4.setErrors({ notMatching: true });
      } else {
        control4.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http
        .post('https://your-api-url.com', this.registerForm.value)
        .subscribe((response) => {
          console.log(response);
          this.registerForm.reset(); // Limpe os campos do formulário após a submissão
        });
    }
  }
}
