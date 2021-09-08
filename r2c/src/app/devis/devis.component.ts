import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.less']
})
export class DevisComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      message: ['', Validators.minLength(10)]
    });
  }
      // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
    this.submitted = true;
        // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
