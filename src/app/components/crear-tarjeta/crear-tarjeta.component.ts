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
      titular: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      fechaExpiracion: ['', Validators.required],
      cvv: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
