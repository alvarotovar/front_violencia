import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  confirmusername:string;
  password:string;
  repassword:string;
  myDate:Date;
  // month: '1990-02-19';
  // timeStarts: '07:43';
  // timeEnds: '1990-02-20';

  constructor(private viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }

  register(){
    if(this.username==null || this.confirmusername==null || this.password==null || this.repassword==null ||
       this.myDate==null){
     alert("Por favor digite todos los campos");
  }  else if (this.username==this.confirmusername && this.password==this.repassword) {
    console.log("Registro exitoso")
  } else alert("no se pudo registrar el usuario");
  }
  close() {
    this.viewCtrl.dismiss();
    }
}
