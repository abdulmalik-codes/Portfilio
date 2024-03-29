import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
