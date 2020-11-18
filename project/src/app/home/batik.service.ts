import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Batik} from "./batik";

@Injectable({
  providedIn: 'root'
})
export class BatikService {
  // Database path for batik
  private dbPath = '/batik';
  batikRef: AngularFireList<Batik> = null;

  constructor(private db: AngularFireDatabase) {
    this.batikRef = db.list(this.dbPath);
  }

  // Use this to get all data
  getAllBatik(): AngularFireList<Batik> {
    return this.batikRef;
  }

  // getBatik(){
  //   return new Promise<any>((resolve, reject) => {
  //     this.db.list(this.dbPath).snapshotChanges()
  //         .subscribe(snapshots => {
  //           resolve(snapshots)
  //         })
  //   })
  // }
}
