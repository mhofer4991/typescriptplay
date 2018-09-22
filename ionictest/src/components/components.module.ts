import { NgModule } from '@angular/core';
import { KudaComponent } from './kuda/kuda';
import { IonicModule } from 'ionic-angular';
import { MuhaComponent } from './muha/muha';
@NgModule({
	declarations: [KudaComponent,
    MuhaComponent],
	imports: [IonicModule],
	exports: [KudaComponent,
    MuhaComponent]
})
export class ComponentsModule {}
