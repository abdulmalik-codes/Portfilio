import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faAddressCard,
  faBriefcase,
  faEnvelope,
  faCode
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent implements OnInit {

  navExtended = false

  pages = [
    {
      label: 'home',
      value: faHouse
    },
    {
      label: 'about',
      value: faAddressCard
    },
    {
      label: 'portfolio',
      value: faBriefcase
    },
    {
      label: 'contact',
      value: faEnvelope
    }
  ]
  socials = [
    {
      label: 'github',
      value: faCode
    },
    {
      label: 'linkedIn',
      value: faAddressCard
    }
  ]

  gitHub = faCode



  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(){
    this.navExtended = !this.navExtended
  }

}
