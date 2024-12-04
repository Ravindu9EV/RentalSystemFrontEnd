import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HardwareItemComponent } from './pages/hardware-item/hardware-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RentalComponent } from './pages/rental/rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HardwareItemComponent,
    HomePageComponent,
    RentalComponent,
    RentalDetailComponent,
    NavbarComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RentalSystem';
}
