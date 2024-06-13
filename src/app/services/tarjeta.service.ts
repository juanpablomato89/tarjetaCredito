import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { Firestore, addDoc, collection, collectionData, collectionSnapshots, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private storage: Firestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    const ref = collection(this.storage, 'tarjeta');

    return addDoc(ref, tarjeta);

  }

  getTarjetas(): Observable<TarjetaCredito[]> {
    const ref = collection(this.storage, 'tarjeta');

    return collectionData(ref, { idField: 'id' }) as Observable<TarjetaCredito[]>;

  }

}
