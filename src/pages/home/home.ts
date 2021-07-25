import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  editItem(item, index){
    const toast = this.toastCtrl.create({
      message: "Editing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  };

  loadItems(){
    return this.dataService.getItems();
  };

  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  };

  addItem(){
    this.inputDialogService.showPrompt();
  };  

}
