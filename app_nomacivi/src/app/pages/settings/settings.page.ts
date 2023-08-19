import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, RangeCustomEvent } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { LanguageObject } from 'src/app/shared/constants/languages';
import { Size, SizeOptions } from 'src/app/shared/constants/size-options';
import { TextSizeService } from 'src/app/shared/services/text-size.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule]
})
export class SettingsPage implements OnInit {

  public langs: LanguageObject[];

  minIndex = 0;
  maxIndex = 4;
  valueRange = 1;

  SizeOptions = SizeOptions;
  public selectedSize: Size = SizeOptions.normal;

  constructor(
    private languageService: LanguageService,
    private textSizeService: TextSizeService
  ) { 
    this.langs = languageService.getLanguages();
  }

  ngOnInit():void {
    this.selectedSize = this.textSizeService.getSize();
    this.valueRange = this.textSizeService.mapSizeOptionToNumber(this.selectedSize);
  }

  changeLanguage(lang: LanguageObject):void {
    this.languageService.setLanguage(lang);
  }

  changeSize(event: Event):void {
    const selectedSize: any = (event as RangeCustomEvent).detail.value;
    const size = this.textSizeService.mapNumberToSizeOption(selectedSize);

    this.selectedSize = size;
    this.textSizeService.setSize(size);
    const sizeTarget = this.textSizeService.getTargetSizes();
    Object.keys(sizeTarget).forEach(value => {
      document.documentElement.style.setProperty(`--font-size-size${value.toUpperCase()}`, `${sizeTarget[value]}px`);
    });
  }

}
