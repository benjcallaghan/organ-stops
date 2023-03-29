import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { getAuth } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import {
  PreloadAllModules,
  provideRouter,
  RouteReuseStrategy,
  withPreloading,
} from '@angular/router';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      })
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
}).catch((err) => console.log(err));
