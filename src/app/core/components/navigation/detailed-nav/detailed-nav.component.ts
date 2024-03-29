import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-detailed-nav',
  templateUrl: './detailed-nav.component.html',
  styleUrls: ['./detailed-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class DetailedNavComponent {

}
