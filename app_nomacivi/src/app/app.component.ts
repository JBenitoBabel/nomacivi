import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(
    private languageService: LanguageService
  ) {
    this.languageService.initializeAppLanguage();
  }
}
