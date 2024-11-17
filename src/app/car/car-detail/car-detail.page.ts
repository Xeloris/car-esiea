import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/models/car.interface';
import { CarService } from 'src/app/core/services/car/car.service';
import { ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { powerOutline, returnUpBackOutline } from 'ionicons/icons';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
	selector: 'app-car-detail',
	templateUrl: './car-detail.page.html',
	styleUrls: ['./car-detail.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class CarDetailPage implements OnInit {

	public car: ICar | null = null;

	constructor(private route: ActivatedRoute,
		private carService: CarService,
		private router: Router,
		private toastController: ToastController,
		private authenticationService: AuthenticationService
	) {
		addIcons({ powerOutline, returnUpBackOutline });
	}

	ngOnInit() {
		const licensePlate = this.route.snapshot.paramMap.get('licensePlate');
		if (licensePlate) {
			this.carService.getCarByLicensePlate(licensePlate).then(
				(car) => {
					if (car) {
						this.car = car;
					}
					else {
						this.errorToast("Car not found");
						this.router.navigate(['car']);
					}
				},
				() => {
					this.errorToast("An error occurred. Please try again later.");
					this.router.navigate(['car']);
				}
			);
		}
		else {
			this.errorToast("Car not found");
			this.router.navigate(['car']);
		}
	}

	public onSeeCars(): void {
		this.router.navigate([`/car`]);
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
