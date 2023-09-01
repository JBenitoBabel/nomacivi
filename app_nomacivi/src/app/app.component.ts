import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';

import { LanguageService } from './shared/services/language.service';
import { SQLiteService } from './shared/services/sqlite';
import { IndexedDbService } from './shared/services/indexed-db.service';

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
    private _sqlite: SQLiteService,
    private indexedDbService: IndexedDbService
  ) {
    this.initializeApp();
    this.languageService.initializeAppLanguage();
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      if (this.platform.is('cordova') || this.platform.is('capacitor')) {
        // Si es una aplicación móvil, inicializa SQLite
        this._sqlite.initializePlugin().then(ret => {
          this.initPlugin = ret;
          console.log('>>>> in App this.initPlugin (SQLite) ' + this.initPlugin);
        });
      } else {
        // Si es un navegador web, inicializa IndexedDB
        this.indexedDbService.openDatabase(); // Llama al método adecuado para abrir la base de datos de IndexedDB
        console.log('>>>> in App (IndexedDB)');
      }
    });
  }
}
