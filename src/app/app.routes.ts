import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'register',
		loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
	},
	{
		path: 'login',
		loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
	},
	{
		path: 'car',
		children: [
			{
				path: '',
				loadComponent: () => import('./car/car.page').then( m => m.CarPage)
			},
			{
				path: 'create',
				loadComponent: () => import('./car/car-create/car-create.page').then( m => m.CarCreatePage)
			},
			{
				path: 'detail/:id',
				loadComponent: () => import('./car/car-detail/car-detail.page').then( m => m.CarDetailPage)
			}
		]
	}
];
