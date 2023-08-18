import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    TranslateModule
  ],
})
export class HomePage {
  constructor() {}

  startGame() {
    // Implement logic for starting a new game
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
  }

  viewInfo() {
    // Implement logic for viewing information
  }
}
