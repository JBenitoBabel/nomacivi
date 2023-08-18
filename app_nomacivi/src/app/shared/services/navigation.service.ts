import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pages } from '../constants/pages';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private navCtrl: NavController
  ) {}

  navigateTo(pageName: keyof typeof Pages, params?: any) {
    let route = Pages[pageName];

    if (params === undefined) {
      params = {};
    }
    
    this.navCtrl.navigateForward([route, params]);
  }

  navigateBackTo(namePage: keyof typeof Pages, params?: any) {
    let route = Pages[namePage];
    this.navCtrl.navigateBack([route, params]);
  }

  navigateBack() {
    this.navCtrl.back();
  }
}
