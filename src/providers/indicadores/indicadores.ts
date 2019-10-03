import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BASECONFIG} from "../BASECONFIG";
import {AlertController, LoadingController} from "ionic-angular";
import {ResponseApi} from "../ResponseApi";

/*
  Generated class for the IndicadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IndicadoresProvider   extends BASECONFIG {

  constructor(public http: HttpClient,
              public loading: LoadingController,
              public alert: AlertController) {
    super();
    console.log('Hello HorarioProvider Provider');
  }

  buscarIndicadores(){
    let loadcontent = this.loading.create({
      content: 'Por favor espere....'
    });

    loadcontent.present();
    var form = new FormData();
    for (let item in params) {
      form.append(item, params[item]);
    }
    let options = {
      headers: {
        "accept": "application/json"
      }
    };

    let url = `${this.BASEURL}indicadores`;
    return new Promise((resolve, reject) => {
      this.http.post(url, form, options).subscribe((data: ResponseApi) => {
        resolve(data);
      }, err => {
        loadcontent.dismiss();
        reject(err)
      }, () => {
        setTimeout(() => {
          loadcontent.dismiss();
        }, 100);
      });
    });
  }
}
