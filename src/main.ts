import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
import { importProvidersFrom } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { environment } from './environments/environment';
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';

initializeApp(environment.firebaseConfig);

const auth = getAuth();
setPersistence(auth, browserSessionPersistence).catch(() => {

})

bootstrapApplication(AppComponent, {
	providers: [
		{
			provide: RouteReuseStrategy, useClass: IonicRouteStrategy
		},
		importProvidersFrom(IonicModule.forRoot({ innerHTMLTemplatesEnabled: true })),
		provideIonicAngular(),
		provideRouter(routes, withPreloading(PreloadAllModules)),
	],
});
