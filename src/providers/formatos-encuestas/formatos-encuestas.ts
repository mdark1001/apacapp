import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BASECONFIG} from "../BASECONFIG";

/*
  Generated class for the FormatosEncuestasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormatosEncuestasProvider extends BASECONFIG {
  url: string;

  constructor(public http: HttpClient) {
    super();
    this.url = this.BASEURL;
  }


  formatos() {
    console.log("aaaaaa");
  }

}
