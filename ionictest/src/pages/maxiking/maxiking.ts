import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Maxiking2Page } from '../maxiking2/maxiking2';

/**
 * Generated class for the MaxikingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maxiking',
  templateUrl: 'maxiking.html',
})
export class MaxikingPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaxikingPage');
  }

  modal() {
    //const modal = this.modalCtrl.create(Maxiking2Page);
    //modal.present();

    this.navCtrl.push(Maxiking2Page,{},{});
  }
  dismiss() {
    this.viewCtrl.dismiss();
}

}
