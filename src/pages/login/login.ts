import {Component} from '@angular/core';
import {
  AlertController, IonicPage, LoadingController, MenuController, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ApiProvider} from "../../providers/api/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionesPage} from "../sessiones/sessiones";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myForm: FormGroup;
  username: string = 'admin@oohel.net';
  userpassword: string = 'Oohel2019*';
  logueo: any;
  errorinput = false;
  errorEmail = false;
  src_logo:string = "assets/imgs/books.png"

  constructor(public Toast: ToastController, public navCtrl: NavController,
              private storage: Storage, public _apiprovider: ApiProvider, public alert: AlertController,
              public loading: LoadingController, public navParams: NavParams, public menu: MenuController,
              public formBuilder: FormBuilder) {
    this.menu.swipeEnable(false);
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    //this.myForm.get('email').setValue(this.navParams.get('email'));


  }

  ionViewDidLoad() {

  }

  //Metodo para guardar en el storage nativo del celular

  async guardarStorage(DataPerfilStorage) {
    await this.storage.set('perfil', DataPerfilStorage);
    await this.storage.set('MiniTutorialAaapre', true);
    await this.navCtrl.setRoot(SessionesPage);
    console.log(await this.storage.get('perfil'));
  }

  checkSesion() {
    // That's right, we're pushing to ourselves!

    if (this.myForm.invalid == true) {
      this.errorinput = true;
      console.log('Falta campos');
      const toast = this.Toast.create({
        message: 'Error en los campos',
        showCloseButton: true,
        closeButtonText: 'Ok',
      });
      toast.present();
    } else {
      this.username = this.myForm.getRawValue().email;
      this.userpassword = this.myForm.getRawValue().password;
      console.log(this.username + " " + this.userpassword);
      this._apiprovider.login(this.username, this.userpassword)
        .then(async data => {
          this.logueo = data;
          console.log(this.logueo);
          if (this.logueo.state == 200) {
            let loading = this.loading.create({
              content: 'Verificando'
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.guardarStorage(this.logueo.response);
            }, 100);
          } else {
            let loading = this.loading.create({
              content: 'Verificando'
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.alert.create({
                title: 'Datos incorrectos',
                subTitle: 'Verifique email o contraseña',
                buttons: ['Aceptar']
              }).present();
            }, 100);
          }
        });


    }


    //llamada del metodo para guardar en el storage nativo


  }

  validatorEmail() {
    this.errorEmail = true;

  }

  validatorEmailFalse() {
    this.errorEmail = false;

  }


}
