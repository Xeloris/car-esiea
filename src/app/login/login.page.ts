import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { AuthenticationService } from "../core/services/authentication/authentication.service";
import { Router } from "@angular/router";
import { IUser } from '../models/user.interface';
import { ToastController } from '@ionic/angular/standalone';
import { emailValidator, strongPasswordValidator } from '../core/validators/validators';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ReactiveFormsModule
	]
})
export class LoginPage implements OnInit {

	public loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, emailValidator()]),
		password: new FormControl('', [Validators.required, strongPasswordValidator()]),
	});

	public passwordType = 'password';
	public passwordIcon = 'eye-off-outline';

	constructor(private authenticationService: AuthenticationService,
		private router: Router,
		private toastController: ToastController) {
		addIcons({ eyeOutline, eyeOffOutline });
	}

	ngOnInit() {

	}

	public onToggleShowPassword(): void {
		if (this.passwordType === 'password') {
			this.passwordType = 'text';
			this.passwordIcon = 'eye-outline';
		} else {
			this.passwordType = 'password';
			this.passwordIcon = 'eye-off-outline';
		}
	}

	public onSignIn(): void {
		this.authenticationService.signInWithEmailAndPassword(this.loginForm.value as unknown as Partial<IUser>)
			.then(() => {
				this.router.navigate(['car']);
			}).catch((error) => {
				const errorCode = (error as { code: string }).code;
				const errorMessage = this.getErrorMessage(errorCode);
				this.errorToast(errorMessage);
			});
	}


	private getErrorMessage(errorCode: string): string {
		switch (errorCode) {
			case 'auth/invalid-credential':
				return 'Email address or password is incorrect.';
			default:
				return 'An error occurred. Please try again later.';
		}
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

	public navigateToRegister(): void {
		this.router.navigate(['/register']);
	}

}