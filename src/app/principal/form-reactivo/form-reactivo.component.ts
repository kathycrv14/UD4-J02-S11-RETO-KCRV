import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {

  constructor(private formbuilder: FormBuilder) { }

  nombreform = this.formbuilder.group({
      name: ['']
    });

}
