import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HymnPage } from '../pages/hymn/hymn';
import { StopsPage } from '../pages/stops/stops';
import { EditHymnPage } from '../pages/edit-hymn/edit-hymn';
import { EditStopsPage } from '../pages/edit-stops/edit-stops';
import { RegisterPage } from '../pages/register/register';
import { AcknowledgementsPage } from '../pages/acknowledgements/acknowledgements';
import { PipesModule } from '../pipes/pipes.module';

import config from './config';
import { AuthProvider } from '../providers/auth/auth';
import { LicenseProvider } from '../providers/license/license';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UserPage,
    HomePage,
    TabsPage,
    HymnPage,
    StopsPage,
    EditHymnPage,
    EditStopsPage,
    RegisterPage,
    AcknowledgementsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UserPage,
    HomePage,
    TabsPage,
    HymnPage,
    StopsPage,
    EditHymnPage,
    EditStopsPage,
    RegisterPage,
    AcknowledgementsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthProvider,
    GooglePlus,
    TwitterConnect,
    LicenseProvider
  ]
})
export class AppModule {}
