import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HorarioProvider} from "../../providers/horario/horario";
import {LoginPage} from "../login/login";
import {PaseListaPage} from "../pase-lista/pase-lista";
import {ResponseApi} from "../../providers/ResponseApi";

/**
 * Generated class for the SessionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sessiones',
  templateUrl: 'sessiones.html',
})
export class SessionesPage {
  mis_servicios: Array<any> = [];
  myDate: any;
  user_id: number;
  token: string;
  estatus_session: boolean = true;
  pase_lista: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public horarioService: HorarioProvider,
              public alert: AlertController,
              public storage: Storage) {
    //this.storage.get('perfil')
    this.myDate = new Date().toISOString();
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
    console.log('ionViewDidLoad SessionesPage');
  }

  buscarSessionesPorFecha() {
    //if (this.myDate.validate()) {
    let fecha = new Date(this.myDate);
    let fecha_formateada = `${fecha.getFullYear()}-${(fecha.getMonth() + 1)}-${fecha.getDate()}`;
    this.horarioService.buscarHorarioPorFecha({
      fecha_inicio: fecha_formateada,
      estatus: this.estatus_session ? 'ocupado' : '',
      usuario_id: this.user_id,
      token: this.token,
      pase_lista: this.pase_lista ? 'todo' : ''
    }).then((data: ResponseApi) => {
      console.log(data);
      if (data['state'] === 200) {
        this.mis_servicios = data.response.sessiones
      } else {
        this.showAlert('Atención', data.response.message)
      }
    }).catch(errs => {
      console.log(errs);
      this.showAlert('Error', errs)
    })
  }

  showAlert(title, message) {
    this.alert.create({
      title: title,
      subTitle: message,
      buttons: ['Aceptar']
    }).present();
  }

  pasarLista(servicio, listadoAsistentes) {
    console.log(servicio);
    console.log(listadoAsistentes);
    this.navCtrl.push(PaseListaPage, {'servicio': servicio, 'user_id': this.user_id, 'token': this.token})

  }


// }
}
