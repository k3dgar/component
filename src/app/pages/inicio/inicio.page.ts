import { Component, OnInit } from '@angular/core';

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {
  componentes: Components[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'layers-outline',
      name: 'Acordeon',
      redirectTo: '/acordeon',
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/button',
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check-box',
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/date',
    },
    {
      icon: 'car',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'hammer',
      name: 'Input',
      redirectTo: '/input',
    },
    {
      icon: 'list',
      name: 'List',
      redirectTo: '/list',
    },
    {
      icon: 'reorder-three',
      name: 'List Reorder',
      redirectTo: '/list-reorder',
    },
    {
      icon: 'refresh-circle',
      name: 'Loading',
      redirectTo: '/loading',
    },
    {
      icon: 'create',
      name: 'Modal',
      redirectTo: '/modal',
    },
    {
      icon: 'paper-plane',
      name: 'Popover',
      redirectTo: '/popover',
    },
    {
      icon: 'color-fill',
      name: 'Progress Bar',
      redirectTo: '/progress-bar',
    },
    {
      icon: 'refresh',
      name: 'Refresher',
      redirectTo: '/refresher',
    },
    {
      icon: 'search',
      name: 'Searchbar',
      redirectTo: '/searchbar',
    },
    {
      icon: 'share',
      name: 'Share',
      redirectTo: '/share',
    },
    {
      icon: 'shuffle',
      name: 'Skeleton Text',
      redirectTo: '/skeleton-text',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
