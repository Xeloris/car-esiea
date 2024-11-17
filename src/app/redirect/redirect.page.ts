import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-redirector',
	templateUrl: './redirect.page.html',
	styleUrls: ['./redirect.page.scss'],
	standalone: true,
	imports: [
		IonicModule,
	]
})
export class RedirectPage {

	constructor(private authService: AuthenticationService, private router: Router) {
		this.checkAuthStatus();
	}

	private async checkAuthStatus() : Promise<void> {
		const user = await this.authService.getCurrentUser();
		if (user) {
			this.router.navigate(['/car']);
		} else {
			this.router.navigate(['/login']);
		}
	}
}
