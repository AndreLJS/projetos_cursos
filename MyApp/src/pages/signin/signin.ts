import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
 
	signinForm: FormGroup

  constructor(
  	public formBuilder: FormBuilder,
  	public navCtrl: NavController, 
  	public navParams: NavParams
  	) {

  	 let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit():void{
  	console.log(this.signinForm.value);
  }
   onSignup(){
    this.navCtrl.push(SignupPage);
  }

  onEnter(){
    this.navCtrl.push(TabsPage);
  }

}
