import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {BASECONFIG} from "../BASECONFIG";
import {ResponseApi} from "../ResponseApi";
import {AlertController, LoadingController} from "ionic-angular";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider extends BASECONFIG {

  constructor(public http: HttpClient,
              public loading: LoadingController,
              public alert: AlertController) {
    super();
    console.log('Hello ApiProvider Provider');
  }


  login(username, userpassword) {
    let loadcontent = this.loading.create({
      content: 'Por favor espere....'
    });

    loadcontent.present();

    var form = new FormData();
    form.append("email", username);
    form.append("password", userpassword);
    let options = {
      headers: {
        "accept": "application/json"
      }
    };

    let url = `${this.BASEURL}login`;
    console.log(url);
    return new Promise(resolve => {
      this.http.post(url, form, options).subscribe((data: ResponseApi) => {
        resolve(data);
      }, err => {
        loadcontent.dismiss();
        this.alert.create({
          title: 'Error',
          subTitle: 'No se ha podido conectar intente mas tarde',
          buttons: ['Aceptar']
        }).present();
        console.log(err);
      }, () => {
        setTimeout(() => {
          loadcontent.dismiss();
        }, 100);
      });
    });
  }

}
