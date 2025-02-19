import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from "../../components/components.module";

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
  standalone: false
})
export class DatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
