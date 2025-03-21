import { Component, OnInit } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { archive, heart, trash } from 'ionicons/icons';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
  standalone: false
})
export class ItemSlidingPage implements OnInit {

  constructor() { 
    addIcons({ archive, heart, trash });
  }

  ngOnInit() {
  }

}
