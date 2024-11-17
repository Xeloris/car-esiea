import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car/car.service';
import { ICar } from 'src/app/models/car.interface';
import { ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { powerOutline, returnUpBackOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { licencePlateNumberValidator } from 'src/app/core/validators/validators';

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

	public carForm = new FormGroup({
		brand: new FormControl('', [Validators.required]),
		model: new FormControl('', [Validators.required]),
		licensePlate: new FormControl('', [Validators.required, licencePlateNumberValidator()]),
		frontPhoto: new FormControl<File | null>(null, [Validators.required]),
		backPhoto: new FormControl<File | null>(null, [Validators.required]),
	});

	public previewFrontPhoto: string | null = null;
	public previewBackPhoto: string | null = null;

	constructor(private router: Router,
		private carService: CarService,
		private toastController: ToastController,
		private authenticationService: AuthenticationService) {
		addIcons({ powerOutline, returnUpBackOutline });
	}

	ngOnInit() {

	}

	public onFileChange(event: any, field: string): void {
		const file = event.target.files[0];
		if (file) {
			this.carForm.patchValue({
				[field]: file,
			});
		}
	}


	public onSaveCar(): void {
		if (this.carForm.invalid) {
			return;
		}

		this.carService.getCarByLicensePlate(this.carForm.value.licensePlate ?? '').then((car) => {
			if (car) {
				this.errorToast("A car with the same license plate is already registered");
				return;
			}
			const formValues = this.carForm.value;
			const newCar: ICar = {
				licensePlate: formValues.licensePlate ?? '',
				brand: formValues.brand ?? '',
				model: formValues.model ?? '',
				frontPhotoUrl: '',
				backPhotoUrl: '',
			};

			const frontPhoto = formValues.frontPhoto;
			const backPhoto = formValues.backPhoto;

			if (frontPhoto && backPhoto) {
				this.carService.saveCar(newCar, frontPhoto as File, backPhoto as File).then(() => {
					this.router.navigate(['/car']);
				});
			} else {
				this.errorToast("Please upload or capture both front and back photos.");
			}
		}).catch(() => {
			this.errorToast("An error occurred. Please try again later.")
		});
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

	public async capturePhoto(field: string): Promise<void> {
		try {
			const photo = await Camera.getPhoto({
				resultType: CameraResultType.Uri,
				source: CameraSource.Camera,
			});

			if (photo && photo.webPath) {
				const file = await this.uriToFile(photo.webPath, `${field}.jpg`);
				this.setPhotoField(field, file);
			}
		} catch (error) {
			this.errorToast('Error capturing photo. Please try again.');
		}
	}

	public uploadPhoto(field: string): void {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';

		input.onchange = (event: any) => {
			const file = event.target.files[0];
			if (file) {
				this.setPhotoField(field, file);
			}
		};

		input.click();
	}

	private setPhotoField(field: string, file: File): void {
		if (field === 'frontPhoto') {
			this.previewFrontPhoto = URL.createObjectURL(file);
		} else if (field === 'backPhoto') {
			this.previewBackPhoto = URL.createObjectURL(file);
		}

		this.carForm.patchValue({
			[field]: file,
		});
	}

	private async uriToFile(uri: string, fileName: string): Promise<File> {
		const response = await fetch(uri);
		const blob = await response.blob();
		const file = new File([blob], fileName, { type: 'image/jpeg' });
		return file;
	}

}
