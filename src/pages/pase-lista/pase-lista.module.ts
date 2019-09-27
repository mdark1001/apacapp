import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaseListaPage } from './pase-lista';

@NgModule({
  declarations: [
    PaseListaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaseListaPage),
  ],
})
export class PaseListaPageModule {}
