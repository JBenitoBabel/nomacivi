import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

interface Option {
  text: string;
  nextStoryIndex: number;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StoryPage implements OnInit {

  currentStoryIndex: number = 0;
  currentStoryText: string = '';
  options: Option[] = [];
  showOptions: boolean = false;

  stories: string[] = [
    'Una vez en un lugar lejano...',
    'El personaje se encontró con una encrucijada...',
    // Agrega más fragmentos de la historia
  ];

  storyOptions: Option[][] = [
    [
      { text: 'Explorar el bosque', nextStoryIndex: 1 },
      { text: 'Ir hacia la montaña', nextStoryIndex: 2 },
    ],
    [
      { text: 'Seguir el camino de la izquierda', nextStoryIndex: 3 },
      { text: 'Tomar el camino de la derecha', nextStoryIndex: 4 },
    ],
    // Define más opciones según la historia
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentStoryIndex = parseInt(params['storyIndex']);
      this.loadStory();
    });
  }

  loadStory() {
    this.currentStoryText = this.stories[this.currentStoryIndex];
    this.options = this.storyOptions[this.currentStoryIndex];
    this.showOptions = this.options && this.options.length > 0;
  }

  selectOption(option: Option) {
    this.currentStoryIndex = option.nextStoryIndex;
    this.loadStory();
  }
}
