import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { AuthenticationService } from "../core/services/authentication/authentication.service";
import { Router } from "@angular/router";
import { IUser } from '../models/user.interface';

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
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	});

	public passwordType = 'password';
	public passwordIcon = 'eye-off-outline';

	constructor(private authenticationService: AuthenticationService,
		private router: Router) {
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
				console.log(error);
			}
			);
	}

	public navigateToRegister(): void {
		this.router.navigate(['/register']);
	}

}