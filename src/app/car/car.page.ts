import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { Router } from '@angular/router';
import { CarService } from '../core/services/car/car.service';
import { ICar } from '../models/car.interface';
import { addIcons } from 'ionicons';
import { powerOutline } from 'ionicons/icons';
import { ToastController } from '@ionic/angular/standalone';
import { AuthenticationService } from '../core/services/authentication/authentication.service';

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

	public cars: ICar[] = [];

	constructor(private router: Router,
		private carService: CarService,
		private toastController: ToastController,
		private authenticationService: AuthenticationService) {
		addIcons({ powerOutline });
	}

	ngOnInit() {
		this.carService.getAllCars().then((cars) => {
			this.cars = cars;
		}).catch(() => {
			this.errorToast("An error occurred. Please try again later.");
		});
	}

	public onCreationCar(): void {
		this.router.navigate(['/car/create']);
	}

	public seeDetailsCar(car: ICar): void {
		this.router.navigate([`/car/detail/${car.licensePlate}`]);
	}

	public onLogout(): void {
		this.authenticationService.logout()
			.then(() => {
				this.router.navigate(['/login']);
			})
			.catch(() => {
				this.errorToast("An error occurred. Please try again later.");
			});
	}


	private async errorToast(errorMessage: string): Promise<void> {
		const toast = await this.toastController.create({
			message: errorMessage,
			duration: 3000,
			position: 'top',
			color: 'danger',
			buttons: [
				{
					text: 'Dismiss',
					role: 'cancel'
				}
			]
		});
		await toast.present();
	}

}
