import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { QoutesComponent } from './Components/qoutes/qoutes.component';
import { GrandParentComponent } from './Components/grand-parent/grand-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QoutesComponent, NavBarComponent,GrandParentComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'qoutes-app';
  currentItem = 'Television';
}
