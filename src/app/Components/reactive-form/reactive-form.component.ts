import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  Formulario: FormGroup;

  constructor() {
    this.Formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      paises: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
    });
  }

  botonEnviar() {
    if (this.Formulario.valid) {
      Swal.fire('Enviado Exitosamente', '', 'success');
    } else if (this.Formulario.invalid) {
      Swal.fire('Complete primero los campos restantes', '', 'error');
    }
  }
}
