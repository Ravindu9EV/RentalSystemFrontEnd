import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hardware-item',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './hardware-item.component.html',
  styleUrl: './hardware-item.component.css',
})
export class HardwareItemComponent {
  constructor(private http: HttpClient) {}

  public items = [];
  public item = {
    rentID: 0,
    name: '',
    rentalPerDay: 0,
    aavailability: false,
  };
  //public item:Object={}
  addItem() {
    this.http
      .post('http://localhost:8080/rental/save', this.item)
      .subscribe((data) => {
        if (data) {
          alert('item seved!');
        } else {
        }
      });
  }

  getItems() {
    this.http.get('http://localhost:8080/rental/get-all').subscribe((data) => {
      console.log(data);
    });
  }
}
