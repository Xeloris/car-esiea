import { Routes } from '@angular/router';
import { AuthGuard } from './guard/authguard';
import { NonAuthGuard } from './guard/nonauthguard';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./redirect/redirect.page').then(m => m.RedirectPage),
		pathMatch: 'full'
	},
	{
		path: 'register',
		loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
		canActivate: [NonAuthGuard]
	},
	{
		path: 'login',
		loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
		canActivate: [NonAuthGuard]
	},
	{
		path: 'car',
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				loadComponent: () => import('./car/car.page').then(m => m.CarPage)
			},
			{
				path: 'create',
				loadComponent: () => import('./car/car-create/car-create.page').then(m => m.CarCreatePage)
			},
			{
				path: 'detail/:licensePlate',
				loadComponent: () => import('./car/car-detail/car-detail.page').then(m => m.CarDetailPage)
			}
		]
	},
	{
		path: '**',
		loadComponent: () => import('./redirect/redirect.page').then(m => m.RedirectPage),
		pathMatch: 'full'
	}
];
