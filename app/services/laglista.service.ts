import { Injectable } from '@angular/core';
import {Lagklass} from '../../models/Lagklass';
import {Observable, of} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LaglistaService {
  Lagdoc: AngularFirestoreDocument<Lagklass>;
  lagarray1: Observable<any[]>;
  Lagett: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.lagarray1 = afs.collection('CsLagen').snapshotChanges().pipe(
      map(L => L.map(
        a => {
          const data = a.payload.doc.data() as Lagklass;
          const id = a.payload.doc.id;
          return {id, ...data};
    }
      ))
    );
    /* this.lagarray = [
      new Lagklass('Astralis', 'Danmark', 1),
      new Lagklass('Liquid', 'NA', 2),
      new Lagklass('Natus Vincere', 'Ukraine/Russia', 3)
    ]; */
  }

  getLag(): Observable<Lagklass[]> {
    return this.lagarray1;
  }
  addLag(L: Lagklass) {
   this.afs.collection('CsLagen').add(L);
   console.log('hej hej!');
  }
  getLagName(id: string): Observable<Lagklass> {
   this.Lagdoc = this.afs.doc<Lagklass>(`CsLagen/${id}`);
   this.Lagett = this.Lagdoc.valueChanges();
   return this.Lagett;
  }
 tabortLag(id: string) {
    this.Lagdoc = this.afs.doc(`CsLagen/${id}`)
    this.Lagdoc.delete();
 }
}
