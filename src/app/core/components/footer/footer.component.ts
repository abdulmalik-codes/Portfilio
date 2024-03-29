import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCodeBranch,
  faCircleXmark,
  faExclamationTriangle,
  faCircleInfo,
  faBell,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class FooterComponent {

  branch = faCodeBranch
  bell = faBell
  copyright = faCopyright

  notifications = [
    {
      icon: faCircleXmark,
      value: 0,
      label: 'critical'
    },
    {
      icon: faExclamationTriangle,
      value: 0,
      label: 'warning'
    },
    {
      icon: faCircleInfo,
      value: 0,
      label: 'info'
    },
  ]

}
