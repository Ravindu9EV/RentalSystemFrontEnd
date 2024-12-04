import { Routes } from '@angular/router';
import { HardwareItemComponent } from './pages/hardware-item/hardware-item.component';
import { RentalComponent } from './pages/rental/rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

export const routes: Routes = [
    {
        path:"item",
        component: HardwareItemComponent
    },{
        path:"rental",
        component: RentalComponent
    },{
        path:"rent-detail",
        component:RentalDetailComponent
    }
];
