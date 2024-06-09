import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  formCrearTarjeta: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formCrearTarjeta = this.fb.group({
      titular: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      cvv: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crearTarjeta() { }

}
