import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages, LanguageObject } from '../constants/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private langs: LanguageObject[] = [
    { lang_key: Languages.es, lang_description: 'p_settings.languages.es' },
    { lang_key: Languages.en, lang_description: 'p_settings.languages.en' },
  ];

  private defaultLanguage: string =  Languages.es;

  constructor(
    private translateService: TranslateService
  ) {}

  initializeAppLanguage(): void {
    this.translateService.setDefaultLang(this.defaultLanguage);
    
    const userLanguage = this.translateService.getBrowserLang() as Languages;

    if (userLanguage && this.isLanguageAvailable(userLanguage)) {
      this.translateService.use(userLanguage);
    } else {
      this.translateService.use(this.defaultLanguage);
    }
  }

  private isLanguageAvailable(language: Languages): boolean {
    const availableLanguages = [Languages.en, Languages.es];
    return availableLanguages.includes(language);
  }

  setLanguage(language: LanguageObject): void {
    this.translateService.use(language.lang_key);
  }

  translate(key = ''): string {
    return this.translateService.instant(key);
  }

  getLanguages(): LanguageObject[] {
    return this.langs.map(lang => ({
      lang_key: lang.lang_key,
      lang_description: this.translate(lang.lang_description)
    }));
  }
}
