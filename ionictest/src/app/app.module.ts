import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MaxikingPage } from '../pages/maxiking/maxiking';
import { MaxikingPageModule } from '../pages/maxiking/maxiking.module';
import { Maxiking2PageModule } from '../pages/maxiking2/maxiking2.module';
import { Maxiking2Page } from '../pages/maxiking2/maxiking2';
import { KudaComponent } from '../components/kuda/kuda';
import { ComponentsModule } from '../components/components.module';
import { MuhaComponent } from '../components/muha/muha';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(KudaComponent),
    MaxikingPageModule,
    Maxiking2PageModule,
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaxikingPage,
    Maxiking2Page,
    MuhaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
