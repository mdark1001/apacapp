import {Component, ViewChild} from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EvaluacionPage} from '../pages/evaluacion/evaluacion';
import {SessionesPage} from "../pages/sessiones/sessiones";
import {LoginPage} from "../pages/login/login";
import {Storage} from '@ionic/storage';
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public storage: Storage,
              public menu: MenuController,
              public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      {title: 'Inicio', component: HomePage},
      {title: 'Asistencias', component: SessionesPage},
      {title: 'Evaluacion', component: EvaluacionPage}
    ];
    this.storage.get('perfil').then((value) => {
     // console.log(value);
      if (value == null) {
        this.menu.swipeEnable(false);
      } else {
        this.menu.swipeEnable(true);
        this.openPage(this.pages[0]);
      }
    }).catch(err => {
      console.log(err);
    });
    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    return this.nav.setRoot(page.component);
  }
}
