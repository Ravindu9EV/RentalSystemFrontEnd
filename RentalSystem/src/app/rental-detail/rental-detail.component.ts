import { Component } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component';

@Component({
  selector: 'app-rental-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './rental-detail.component.html',
  styleUrl: './rental-detail.component.css',
})
export class RentalDetailComponent {}
