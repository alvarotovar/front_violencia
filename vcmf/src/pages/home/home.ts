import { Component,ViewChild } from '@angular/core';
import { NavController, MenuController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // @ViewChild('content'); 
 public rootPage: any;
 @ViewChild('content') nav: Nav;
  constructor(public navCtrl: NavController, menu: MenuController) {

   
  }

}
