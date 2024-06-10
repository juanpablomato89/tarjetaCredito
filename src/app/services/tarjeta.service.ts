import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private storage: Firestore) { }

  async guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    const ref = collection(this.storage, 'tarjeta');
    console.log(tarjeta);
    await addDoc(ref, tarjeta);

  }

}
