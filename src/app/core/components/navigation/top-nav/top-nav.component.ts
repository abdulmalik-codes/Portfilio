import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TopNavComponent {

  maximizeWindow = faWindowMaximize

  navList = [
    'File',
    'Edit',
    'View',
    'Go',
    'Run',
    'Terminal',
    'Help'
  ]

}
