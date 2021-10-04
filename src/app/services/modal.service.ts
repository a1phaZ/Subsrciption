import {Injectable} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalComponent} from '../modals/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: any;

  constructor(public modalCtrl: ModalController) {
  }

  async presentModal(data) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {data}
    });
    // this.modal = await
    return await modal.present();
  }

  async dismiss() {
    await this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
