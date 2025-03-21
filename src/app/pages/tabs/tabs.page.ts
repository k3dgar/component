import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from "../../components/components.module";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
