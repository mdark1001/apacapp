import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as HighCharts from 'highcharts';
import {LoginPage} from "../login/login";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the IndicadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indicadores',
  templateUrl: 'indicadores.html',
})
export class IndicadoresPage {
  user_id: number;
  token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.storage.get('perfil').then((value) => {
      if (value) {
        this.token = value.token;
        this.user_id = value.data.id
      } else {
        this.navCtrl.setRoot(LoginPage)
      }

    }).catch(err => {
      console.log(err);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicadoresPage');

  }

  buscarIndicadores() {

  }

}
