import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';

import { LanguageService } from './shared/services/language.service';
import { SQLiteService } from './shared/services/sqlite';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {

  private initPlugin: boolean = false;

  constructor(
    private languageService: LanguageService,
    private platform: Platform,
    private _sqlite: SQLiteService
  ) {
    this.initializeApp();
    this.languageService.initializeAppLanguage();
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      this._sqlite.initializePlugin().then(ret => {
        this.initPlugin = ret;
        console.log('>>>> in App this.initPlugin ' + this.initPlugin);
      });
    });
  }
}
