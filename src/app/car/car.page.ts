import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
	selector: 'app-car',
	templateUrl: './car.page.html',
	styleUrls: ['./car.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class CarPage implements OnInit {

	cars = [
		{ id: 1, brand: 'Toyota', model: 'Corolla', photo: 'assets/toyota.jpg' },
		{ id: 2, brand: 'Honda', model: 'Civic', photo: 'assets/honda.jpg' },
	];

	constructor(private router: Router) {}

	ngOnInit() {}

	public onCreationCar(): void {
		this.router.navigate(['/car/create']);
	}

	public seeDetailsCar(car: { id: any; }): void {
		this.router.navigate([`/car/detail/${car.id}`]);
	}

}
