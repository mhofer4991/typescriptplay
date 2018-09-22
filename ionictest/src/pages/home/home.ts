import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MaxikingPage } from '../maxiking/maxiking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  modal() {
    const modal = this.modalCtrl.create(MaxikingPage);
    modal.present();

    //this.navCtrl.push(MaxikingPage);
  }
}
