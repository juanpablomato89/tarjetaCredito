import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  constructor(private _tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this._tarjetaService.getTarjetas().subscribe(data => {
      console.log(data);

    }, error => {
      console.error(error);

    })
  }

}
