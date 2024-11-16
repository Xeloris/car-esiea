import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

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

	carId: string | null = null;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.carId = this.route.snapshot.paramMap.get('id');
    	console.log('Car ID:', this.carId);
	}

}
