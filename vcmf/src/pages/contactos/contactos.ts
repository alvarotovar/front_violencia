import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

}
