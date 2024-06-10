import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  formCrearTarjeta: FormGroup;
  constructor(private fb: FormBuilder, private tarjetaService: TarjetaService) {
    this.formCrearTarjeta = this.fb.group({
      titular: ['', [Validators.required]],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  crearTarjeta() {
    const TARJETA: TarjetaCredito = {
      titular: this.formCrearTarjeta.value.titular,
      numeroTarjeta: this.formCrearTarjeta.value.numeroTarjeta,
      fechaExpiracion: this.formCrearTarjeta.value.fechaExpiracion,
      cvv: this.formCrearTarjeta.value.cvv,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date()
    }

    this.tarjetaService.guardarTarjeta(TARJETA).then(() => {
      console.log('insertado correctamente');
      this.formCrearTarjeta.reset();
    }, error => {
      console.error(error);
    });
  }

}
