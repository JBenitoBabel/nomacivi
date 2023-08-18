import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageObject } from 'src/app/shared/constants/languages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule]
})
export class SettingsPage {

  public langs: LanguageObject[];

  constructor(
    private languageService: LanguageService
  ) { 
    this.langs = languageService.getLanguages();
  }

  changeLanguage(lang: LanguageObject) {
    this.languageService.setLanguage(lang);
  }
}
