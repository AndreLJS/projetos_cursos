import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public objeto_vaga ={

		titulo:"Desenvolvedor PHP",
		data:"12 de Julho, 2017",
		descricao:"Estamos contratando desenvolvedores...",
		time_comment:"2h atrás"
	}


  constructor(public navCtrl: NavController) {

  }

}
