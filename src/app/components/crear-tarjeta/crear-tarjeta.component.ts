import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from '../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  formCrearTarjeta: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private tarjetaService: TarjetaService, private toastr: ToastrService) {
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
    this.loading = true;
    this.tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.toastr.success('Tarjeta de Banco creada correctamente', 'Add Tarjeta');
      this.formCrearTarjeta.reset();
      this.loading = false;
    }, error => {
      console.error(error);
      this.toastr.error('Opss.. a ocurrido un error', 'Error');
      this.loading = false;
    });
  }

}
