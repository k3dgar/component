import { Component, OnInit } from '@angular/core';
import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { barbell, basket, call, globe, heart, home, person, pin, star, trash } from 'ionicons/icons';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false
})
export class SegmentPage implements OnInit {

  constructor() {
    addIcons({ barbell, basket, call, globe, heart, home, person, pin, star, trash });
   }

  ngOnInit() {
  }

}
