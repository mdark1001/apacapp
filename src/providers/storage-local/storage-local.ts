import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

/*
  Generated class for the StorageLocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageLocalProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello StorageLocalProvider Provider');
  }

  getValue(key: string, isValidationLogin: boolean) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then(value => {
        if (value) {
          resolve(value)
        } else {
          reject(new Error('Error al procesar la solicitud....'))
        }
      }).catch(err => {
        reject(err)
      })
    })
  }


}
