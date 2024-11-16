import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";

@Component({
	selector: 'app-car-create',
	templateUrl: './car-create.page.html',
	styleUrls: ['./car-create.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class CarCreatePage implements OnInit {

	car = { brand: '', model: '', plate: '', photoFront: '' as string | File, photoRear: '' as string | File, };

	constructor() { }

	ngOnInit() {}

	saveCar() {
		console.log('Car saved:', this.car);
	}

	onFileChange(event: Event, type: 'photoFront' | 'photoRear') {
		const input = event.target as HTMLInputElement;
		if (input?.files?.length) {
		  this.car[type] = input.files[0];
		} else {
		  console.warn('No file selected or input is invalid');
		}
	}
	  
}
