import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  beneficiariosListado: Array<any>;
  marcar_todos: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.beneficiariosListado = this.navParams.get('listadoAsistentes')
    console.log(this.beneficiariosListado);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaseListaPage');
  }

  marcarTodos() {
    console.log(this.marcar_todos);
    this.beneficiariosListado.beneficiarios.forEach(b => {
      b.asistencia = this.marcar_todos
    })
  }

}
