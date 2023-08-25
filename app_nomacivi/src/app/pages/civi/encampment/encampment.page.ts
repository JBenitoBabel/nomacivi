import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-encampment',
  templateUrl: './encampment.page.html',
  styleUrls: ['./encampment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EncampmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
