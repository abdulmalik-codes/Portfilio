import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCopy,
  faCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SideNavComponent {

  selectedItem = 'copyIcon'

  navList = [
    {
      name: 'copyIcon',
      value: faCopy
    },
    {
      name: 'codeIcon',
      value: faCode
    },
    {
      name: 'envelopeIcon',
      value: faEnvelope
    },
  ]

  selectPage(name: string){
    this.selectedItem = name
  }

}
