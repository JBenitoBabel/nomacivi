import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
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
