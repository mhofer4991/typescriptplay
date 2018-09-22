import { Component, ViewChild, ElementRef, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Platform, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { KudaComponent } from '../components/kuda/kuda';
import { MuhaComponent } from '../components/muha/muha';



@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild('iframe2') iframe2: ElementRef;
  doc: any;
  doc2: any;
  compRef: ComponentRef<IonicApp>;
  compRef2: ComponentRef<IonicApp>;



  constructor(private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {

  }

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(IonicApp);
    this.compRef = this.vcRef.createComponent(compFactory);

    console.log(this.compRef);
    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  createComponent2() {
    const compFactory = this.resolver.resolveComponentFactory(IonicApp);
    this.compRef2 = this.vcRef.createComponent(compFactory);

    console.log(this.compRef);
    var para = document.createElement("link");
//var node = document.createTextNode(".lada { color: red; }");

//para.appendChild(node);
para.setAttribute('href', 'build/main.css');
para.setAttribute('rel', 'stylesheet');

    this.doc2.head.appendChild(para);
    this.doc2.body.appendChild(this.compRef2.location.nativeElement);
  }

  onLoad() {
    this.doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    var para = document.createElement("link");
//var node = document.createTextNode(".lada { color: red; }");

//para.appendChild(node);
para.setAttribute('href', 'build/main.css');
para.setAttribute('rel', 'stylesheet');

    this.doc.head.appendChild(para);
  }

  onLoad2() {
    this.doc2 = this.iframe2.nativeElement.contentDocument || this.iframe2.nativeElement.contentWindow;
  }

  ngAfterViewInit() {
    this.onLoad();
  }

  ngOnDestroy() {
    if(this.compRef) {
      this.compRef.destroy();
    }
  }
}

