import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-landing-shell',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './landing-shell.component.html',
  styleUrl: './landing-shell.component.css'
})
export class LandingShellComponent {

}
