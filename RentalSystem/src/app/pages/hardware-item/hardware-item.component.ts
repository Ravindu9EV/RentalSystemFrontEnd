import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hardware-item',
  standalone: true,
  imports: [NavbarComponent, RouterLink,CommonModule],
  templateUrl: './hardware-item.component.html',
  styleUrl: './hardware-item.component.css',
})
export class HardwareItemComponent {

  constructor(private http:HttpClient){}

  
}
