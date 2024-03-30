import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCopy,
  faCode,
  faEnvelope,
  faUserCircle,
  faGear
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink
  ]
})
export class SideNavComponent {

  selectedItem = 'home'
  userIcon = faUserCircle
  settingsIcon = faGear

  navList = [
    {
      name: 'home',
      value: faCopy
    },
    {
      name: 'projects',
      value: faCode
    },
    {
      name: 'contact-me',
      value: faEnvelope
    },
  ]

  selectPage(name: string){
    const selected = this.selectedItem === name
    this.selectedItem = selected ? '' : name
  }

}
