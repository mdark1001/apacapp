import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EvaluacionPage} from '../pages/evaluacion/evaluacion';
import {SessionesPage} from "../pages/sessiones/sessiones";
import {HttpClientModule} from '@angular/common/http'
import {FormatosEncuestasProvider} from '../providers/formatos-encuestas/formatos-encuestas';

import {ApiProvider} from "../providers/api/api";
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule} from "@ionic/storage";
import {HomePage} from "../pages/home/home";
import { HorarioProvider } from '../providers/horario/horario';
import { StorageLocalProvider } from '../providers/storage-local/storage-local';
import {PaseListaPage} from "../pages/pase-lista/pase-lista";
import {IndicadoresPage} from "../pages/indicadores/indicadores";
import { IndicadoresProvider } from '../providers/indicadores/indicadores';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EvaluacionPage,
    SessionesPage,
    LoginPage,
    PaseListaPage,
    IndicadoresPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydbApac',
      //driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EvaluacionPage,
    SessionesPage,
    LoginPage,
    IndicadoresPage,
    HomePage,
    PaseListaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FormatosEncuestasProvider,
    ApiProvider,
    HorarioProvider,
    StorageLocalProvider,
    IndicadoresProvider
  ]
})
export class AppModule {
}
