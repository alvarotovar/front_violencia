import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactosPage } from '../pages/contactos/contactos';
import { PerfilPage } from '../pages/perfil/perfil';
import { Slides } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  selector: 'page-menu'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Slides) slides: Slides;
   @ViewChild('content') nav: Nav;
  // public rootPage: any;
   public pages: Array<{titulo: string, component:any, icon: string}>; 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {titulo: "Inicio", component: HomePage, icon: "home"},
     {titulo: "Contactos", component: ContactosPage, icon: "mail"},
     {titulo: "Perfil", component: PerfilPage, icon: "contact"},
     {titulo: "Cerrar sesión", component: LoginPage, icon: "close-circle"}
   ];

   

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
  }
  
 ionViewDidLoad() {
   console.log('ionViewDidLoad MenuPage');
 }
 goToSlide() {
   this.slides.slideTo(2, 5);
 }
 slideChanged() {
   let currentIndex = this.slides.getActiveIndex();
   console.log('Current index is', currentIndex);
 }
}

