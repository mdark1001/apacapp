import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HorarioProvider} from "../../providers/horario/horario";

/**
 * Generated class for the PaseListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-pase-lista',
  templateUrl: 'pase-lista.html',
})
export class PaseListaPage {
  beneficiariosListado:Object;
  servicio: any;
  marcar_todos: boolean = false;
  user_id: number;
  token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public horarioService: HorarioProvider, public Toast: ToastController) {
    this.servicio = this.navParams.get('servicio');
    this.user_id = this.navParams.get('user_id');
    this.token = this.navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  marcarTodos() {
<<<<<<< HEAD
    console.log(this.marcar_todos);

    this.beneficiariosListado['beneficiarios'].forEach(b => {
=======

    this.servicio.asisiatencias.beneficiarios.forEach(b => {
>>>>>>> 8a02c48e51f7b44651c34db954dd243b9df88aca
      b.asistencia = this.marcar_todos
    })
  }

  pasar_lista() {


    let formulario = {
      sesion_id: this.servicio.id,
      usuario_id: this.user_id,
      token: this.token,
      pase_lista: this.servicio.asisiatencias.beneficiarios.filter(b => b.asistencia == true).map(b => b.id).join(',')
    }
    console.log(formulario);

    this.horarioService.pasar_lista_session(formulario).then(data => {
      console.log(data);
      if (data['state'] == 200) {
        this.showMessage('Se actualizó el pase de lista').present();
        this.servicio.paso_asistencia = true
        this.navCtrl.pop()
      } else {
        this.showMessage('Error al procesar su solicitud...').present()
      }

    }).catch(erros => {
      console.log(erros);

    })
  }

  showMessage(message) {
    return this.Toast.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
    });
  }

  regresar() {
    this.navCtrl.pop()
  }

}
