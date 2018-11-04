import { Component,ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // @ViewChild('content'); 

  constructor(public navCtrl: NavController, menu: MenuController) {

   
  }

}
