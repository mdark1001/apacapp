import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionesPage } from './sessiones';

@NgModule({
  declarations: [
    SessionesPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionesPage),
  ],
})
export class SessionesPageModule {}
