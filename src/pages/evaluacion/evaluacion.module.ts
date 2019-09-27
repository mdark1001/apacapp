import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluacionPage } from './evaluacion';
import {FormatosEncuestasProvider} from "../../providers/formatos-encuestas/formatos-encuestas";

@NgModule({
  declarations: [
    EvaluacionPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluacionPage),
  ],
  providers:[
    FormatosEncuestasProvider
  ]
})
export class EvaluacionPageModule {}
