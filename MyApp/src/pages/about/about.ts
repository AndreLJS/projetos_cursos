import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public objeto_noticia ={

		titulo:"André Luís",
		data:"12 de Julho, 2017",
		descricao:"Estamos contratando desenvolvedores...",
		qtd_likes: 20,
		time_comment:"2h atrás"
	}

  public nome_usuario:string = "André Luís";
  constructor(public navCtrl: NavController) {

  }

}
