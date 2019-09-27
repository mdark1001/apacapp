import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormatosEncuestasProvider} from "../../providers/formatos-encuestas/formatos-encuestas";


/**
 * Generated class for the EvaluacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html',
})
export class EvaluacionPage {
  formuni: FormGroup;
  numpregunta;
  aunmento;
  progreso;
  LocalPreguntas: any = {};
  objectRespuestas: any = [];

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public formatosProvider: FormatosEncuestasProvider,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.numpregunta = 0;
    this.progreso = 0;
    this.initializeItems();
    let validattor_value = [];
    if (this.objectRespuestas.length > 0) {
      validattor_value = [this.objectRespuestas[this.numpregunta].value, [Validators.required]]
    }
    this.formuni = this.formBuilder.group({
      unica: validattor_value
    });

  }

  enviar() {
    let toast = this.toastCtrl.create({
      message: 'Felicidades has culminado tu evaluacion',
      duration: 2000,
      position: 'top'
    });

    toast.present(toast);
    //this.navCtrl.setRoot(HomePage);
  }

  methodunica() {
    this.objectRespuestas[this.numpregunta].value = this.formuni.getRawValue().unica;
    if (this.objectRespuestas[this.numpregunta].state != 1) {
      this.progreso = this.progreso + this.aunmento;
      this.formuni.reset();
      this.objectRespuestas[this.numpregunta].state = 1;
    } else {
      this.formuni.reset();
    }
    this.numpregunta = this.numpregunta + 1;

    console.log(this.objectRespuestas);
    console.log(this.numpregunta);

    if (this.objectRespuestas[this.numpregunta].state == 1) {
      this.formuni.get("unica").setValue(this.objectRespuestas[this.numpregunta].value);
    }

  }

  atrasp() {
    this.numpregunta = this.numpregunta - 1;
    this.formuni.setValue({unica: this.objectRespuestas[this.numpregunta].value});
    console.log(this.objectRespuestas);
    console.log(this.numpregunta);

  }

  siguientep() {
    this.numpregunta = this.numpregunta + 1;
    this.progreso = this.progreso + this.aunmento;
    console.log(this.numpregunta);
  }

  initializeItems() {
    this.LocalPreguntas = []

    this.LocalPreguntas.forEach((element, index) => {
      this.objectRespuestas[index] = {id: element.id, value: "", state: 0};
    });
    this.aunmento = 100 / this.LocalPreguntas.length;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluacionPage');
  }

}
