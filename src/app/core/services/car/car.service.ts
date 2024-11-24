import { Injectable } from '@angular/core';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ICar } from 'src/app/models/car.interface';


@Injectable({
	providedIn: 'root'
})
export class CarService {

	constructor() { }

	public saveCar(car: ICar, frontPhoto: File, backPhoto: File): Promise<void> {
		const storage = getStorage();

		const frontPhotoName = `front_${car.licensePlate}.jpg`;
		const backPhotoName = `back_${car.licensePlate}.jpg`;

		const frontPhotoRef = storageRef(storage, `cars/${frontPhotoName}`);
		const backPhotoRef = storageRef(storage, `cars/${backPhotoName}`);

		return uploadBytes(frontPhotoRef, frontPhoto)
			.then(() => {
				return uploadBytes(backPhotoRef, backPhoto);
			})
			.then(() => {
				return Promise.all([
					getDownloadURL(frontPhotoRef),
					getDownloadURL(backPhotoRef)
				]);
			})
			.then(([frontPhotoUrl, backPhotoUrl]) => {
				const carRef = ref(getDatabase(), 'cars/' + car.licensePlate);
				return set(carRef, {
					licensePlate: car.licensePlate,
					brand: car.brand,
					model: car.model,
					frontPhotoUrl: frontPhotoUrl,
					backPhotoUrl: backPhotoUrl,
				});
			})
			.catch((error) => {
				throw error;
			});
	}

	public getAllCars(): Promise<ICar[]> {
		return new Promise((resolve, reject) => {
			const carsRef = ref(getDatabase(), 'cars/');
			onValue(carsRef, (snapshot) => {
				const data = snapshot.val();
				const cars: ICar[] = [];
				if (data) {
					Object.entries(data).forEach(([key, value]) => {
						cars.push(value as ICar);
					});
				}
				resolve(cars);
			}, (error) => {
				reject(error);
			});
		});
	}

	public getCarByLicensePlate(licensePlate: string): Promise<ICar | null> {
		return new Promise((resolve, reject) => {
			const carRef = ref(getDatabase(), 'cars/' + licensePlate);
			onValue(carRef, (snapshot) => {
				const data = snapshot.val();
				if (data) {
					resolve(data as ICar);
				} else {
					resolve(null);
				}
			}, (error) => {
				reject(error);
			});
		});
	}

}