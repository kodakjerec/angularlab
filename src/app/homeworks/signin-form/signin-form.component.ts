import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';

interface person {
  id: string;
  name: string;
  gender: string;
  cellphone: string;
}

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {
  myPerson: person = {
    id: '',
    name: '',
    gender: '',
    cellphone: '',
  };

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      id: new FormControl(this.myPerson.id, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[A-Za-z][0-9]{9}'),
      ]),
      name: new FormControl(this.myPerson.name, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      gender: new FormControl(this.myPerson.gender, Validators.required),
      cellphone: new FormControl(this.myPerson.cellphone, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]{10}'),
      ]),
    });
    this.heroForm.setValue({
      id: 'L133540972',
      name: 'kodak',
      gender: 0,
      cellphone: '0980111222',
    });
  }

  submit() {
    if (this.heroForm.valid) {
      this.myPerson = this.heroForm.value;

      window.alert(JSON.stringify(this.myPerson));
    }
  }

  get id() {
    return this.heroForm.get('id')!;
  }
  get name() {
    return this.heroForm.get('name')!;
  }
  get gender() {
    return this.heroForm.get('gender')!;
  }
  get cellphone() {
    return this.heroForm.get('cellphone')!;
  }
}
