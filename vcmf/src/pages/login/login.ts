import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
//import { AuthService} from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

username: string;
password: string;
isLogged: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    ) {
  
  }

  login(){
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  //  let f = {username: this.username, password: this.username};
  //    this.auth.login(f)
  //    .subscribe(
  //      rs => this.isLogged = rs,
  //      er => console.log(er),
  //      () => {
  //        if (this.isLogged){
  //          this.navCtrl.setRoot(TabsPage)
  //          .then(data => console.log(data),
  //          error => console.log(error)); 
  //        } else {
  //          console.log('Acceso denegado');
  //        }
  //      } 
  //    )
    }

   goRegister(){
     this.navCtrl.push(RegisterPage);
   }

 ////   console.log('ionViewDidLoad LoginPage');

  //    }

}
