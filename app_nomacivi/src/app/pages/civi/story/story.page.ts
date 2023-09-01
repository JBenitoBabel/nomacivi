import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StoryOption, TypeOption } from 'src/app/models/story';


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
  options: StoryOption[] = [];
  showOptions: boolean = false;

  stories: string[] = [
    'Una vez en un lugar lejano...',
    'El personaje se encontró con una encrucijada...',
    // Agrega más fragmentos de la historia
  ];

  storyOptions: StoryOption[][] = [
    [
      { type: TypeOption.story, textButton: 'Opcion 1', nextStoryIndex: 1 },
      { type: TypeOption.story, textButton: 'Opcion 2', nextStoryIndex: 2 },
    ],
    [
      { type: TypeOption.planet, textButton: 'planeta', nextStoryIndex: 3 },
      {type: TypeOption.story, textButton: 'seguir', nextStoryIndex: 4 },
    ],
    // Define más opciones según la historia
  ];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentStoryIndex = params['storyIndex'] ? parseInt(params['storyIndex']) : 0;
      this.loadStory();
    });
  }

  loadStory() {
    this.currentStoryText = this.stories[this.currentStoryIndex];
    this.options = this.storyOptions[this.currentStoryIndex];
    this.showOptions = this.options && this.options.length > 0;
  }

  selectOption(option: StoryOption) {

    switch (option.type) {
      case TypeOption.planet:
        
        break;
      case TypeOption.camp:
        
        break;
      case TypeOption.community:
        
        break;
      case TypeOption.event:
        
        break;
      default:
        this.currentStoryIndex = option.nextStoryIndex ? option.nextStoryIndex : 0;
        this.loadStory();
        break;
    }

  }
}
