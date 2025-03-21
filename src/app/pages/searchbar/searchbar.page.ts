import { Component, OnInit } from '@angular/core';

import { IonSearchbar } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { searchCircle } from 'ionicons/icons';  

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: false
})
export class SearchbarPage implements OnInit {

  constructor() {
    addIcons({ searchCircle });
   }

  ngOnInit() {
  }

}
