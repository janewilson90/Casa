import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BoozePage } from '../pages/booze/booze';
import { AddBoozePage } from '../pages/addbooze/addbooze';
import { NotesPage } from '../pages/notes/notes';
import { FoodPage } from '../pages/food/food';
import { TabsPage } from '../pages/tabs/tabs';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BoozePage,
    AddBoozePage,
    NotesPage,
    FoodPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BoozePage,
    AddBoozePage,
    NotesPage,
    FoodPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
