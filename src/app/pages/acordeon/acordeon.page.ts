import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.page.html',
  styleUrls: ['./acordeon.page.scss'],
  standalone: false
})
export class AcordeonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('listenerOut', { static: true }) listenerOut!: ElementRef;
  private values: string[] = ['first', 'second', 'third'];

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };


}
