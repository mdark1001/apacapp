import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BASECONFIG} from "../BASECONFIG";
import {AlertController, LoadingController} from "ionic-angular";

/*
  Generated class for the HorarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HorarioProvider extends BASECONFIG {

  constructor(public http: HttpClient,
              public loading: LoadingController,
              public alert: AlertController) {
    super();
    console.log('Hello HorarioProvider Provider');
  }

  buscarHorarioPorFecha(params) {
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

    let url = `${this.BASEURL}horario_sesiones`;
    return new Promise((resolve, reject) => {
      this.http.post(url, form, options).subscribe(data => {
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

  pasar_lista_session(params) {
    console.log(params);
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

    let url = `${this.BASEURL}horario_pase_lista`;
    return new Promise((resolve, reject) => {
      this.http.post(url, form, options).subscribe(data => {
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
