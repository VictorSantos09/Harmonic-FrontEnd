import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-page-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.scss',
})
export class PageProfileComponent {
  form = new FormGroup({
    user: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  registerForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.emailDomainValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

  onSubmit() {
    if (this.registerForm.valid) {
      this.http
        .put('https://your-api-url.com', this.registerForm.value)
        .subscribe((response) => {
          console.log(response);
          this.registerForm.reset(); // Limpe os campos do formulário após a submissão
        });
    }
  }
}
