import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { SQLiteService } from 'src/app/shared/services/sqlite';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, 
    TranslateModule,
    LottieComponent
  ],
})
export class HomePage {

  options: AnimationOptions = {
    path: '/assets/images/animations/fox.json',
  };

  private animationItem: AnimationItem | null = null;;

  constructor(
    private navigationService: NavigationService,
    private _sqlite: SQLiteService
  ) {}

  animationCreated(animationItem: AnimationItem):void {
    this.animationItem = animationItem;
    if (this.animationItem) {
      this.animationItem.setSpeed(0.5);
    }
  }

  startGame() {
    console.log('startGame');
    
    // Implement logic for starting a new game
    this.navigationService.navigateTo('story')
  }

  continueGame() {
    // Implement logic for continuing a saved game
  }

  viewAchievements() {
    // Implement logic for viewing achievements
  }

  viewStory() {
    // Implement logic for viewing the story
  }

  settings() {
    // Implement logic for opening the settings
    this.navigationService.navigateTo('settings');
  }

  viewInfo() {
    // Implement logic for viewing information
  }

}
