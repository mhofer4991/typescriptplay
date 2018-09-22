import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BTokenInterceptor } from './binterceptor';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { MaxikingComponent } from './maxiking/maxiking.component'
@NgModule({
  declarations: [
    AppComponent,
    MaxikingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QuillModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BTokenInterceptor,
    multi: true
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
