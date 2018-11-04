import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { ContactoPage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
   @ViewChild('content') nav: Nav;
   public pages: Array<{titulo: string, component:any, icon: string}>; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.pages = [
       {titulo: "Inicio", component: HomePage, icon: "home"}
      // {titulo: "Contactos", component: ContactoPage, icon: "contact"}
    ]
  }

   goToPage(page){
     this.nav.setRoot(page);
   }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
