import { Component } from '@angular/core';
import { IPrinter, APrinter, BPrinter, Printer, PrinterType, PrinterTypeDict } from './printer';
import {classToPlain, plainToClass, serialize, deserialize} from "class-transformer";
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, fromEvent } from 'rxjs';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import Quill from 'quill';

const BlockEmbed = Quill.import('blots/block/embed');// as { new (node, value): Object };
const BlockInline = Quill.import('blots/inline');

export class DividerBlot extends BlockEmbed {
  static create(value) {
    let node = super.create();

    node.innerText = 'blabla';
    node.setAttribute('style', 'border: 1px solid red');

    return node;
  }

  length() {
    return 6;
  }
    static blotName = 'divider';
    static tagName = 'span';
}
Quill.register(DividerBlot);

export class CalcBlot extends BlockInline{}
CalcBlot.blotName = 'calcblot';
CalcBlot.tagName = 'div';
CalcBlot.className = 'calc-blot';

Quill.register(CalcBlot);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  econtent: string;
  title = 'test1';
  testme = "dd";
  quill: any;
  fullname = "";
  customInput : Subject<string> = new Subject<string>();
  @ViewChild('questionInput') questionInput: ElementRef;

  public input$: Observable<string>;

  constructor(private http: HttpClient) {

    /*let dict = {};
    dict[PrinterType.A] = APrinter;
    dict[PrinterType.B] = BPrinter;

    let a: IPrinter[] = [];

    a.push(new APrinter("Printer a1", []));
    a.push(new APrinter("Printer a2", []));

    let b: IPrinter[] = [];

    b.push(new BPrinter("Printer b1", a));
    b.push(new BPrinter("Printer b2", []));

    let bb = new BPrinter("Printer bb", a);
    let aa = new APrinter("Printer aa", b);

    console.log(bb.print());

    let s = serialize(aa); //a[0]);

    console.log(s);

    let js = JSON.stringify(s);

    //console.log(js);

    let ds = deserialize<IPrinter>(APrinter, s);

    let realo = deserialize<IPrinter>(PrinterTypeDict.getDict()[ds.type], s); 

    console.log(realo.name);
    console.log(realo.print());
    console.log(realo.calc());
    console.log(realo.desc);

    console.log(serialize((a, b) => {return a + b;}));*/
    
    //a.forEach((p) => console.log(p.print()));

    let that = this;

    this.customInput.pipe(debounceTime(100),distinctUntilChanged()).subscribe(value => {
      console.log('haha');
      that.testme = that.fullname;
    });
  }

  fullnameChange(evt) {
    //this.testme = this.fullname;
    this.customInput.next(evt);
  }

  editorcreated(evt) {
    console.log(evt);
    evt.insertText(0, 'Hello', 'bold', true);
    let toolbar = evt.getModule('toolbar');
    let handler = (aha: any) => {
      console.log(aha);
    };

    this.quill = evt;

    //toolbar.addHandler('nigger', handler);
    //console.log(evt.getSelection());

    //evt.insertEmbed(evt.getSelection().index, 'divider', 'https://www.google.at/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
  }

  insertdiv(evt) {
    console.log(this.quill.getSelection());
    let index = this.quill.getSelection().index;

    //this.quill.insertEmbed(index, 'divider', 'https://www.google.at/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');

    //this.quill.insertEmbed(index, 'calcblot', 'asdf');
    this.quill.formatText(index,this.quill.getSelection().length,'calcblot',true);
  }

  sel() {
    console.log(this.quill.getSelection());
    console.log(this.quill.getText());
    console.log(this.quill.getContents());
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      let data = new FormData();

      //let file = event.target.files[0];

      //data.append('avatar', file, 'a');
      
      for (var i = 0; i < event.target.files.length; i++) {
        data.append('avatar[]', event.target.files[i], event.target.files[i].name);
      }

      data.append('firstname', 'Markus');
      data.append('skills[]', 'C#');
      data.append('skills[]', 'Java');

      let headers = new HttpHeaders();
      //headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU2NmY0MDdhYzk0YmNiZmVmNjlhYmVhZTVjZmNmNjIwMGIyMWU3ZTcxODBhZjRhOGViYmQ3ZmU4YWVhZDliNGY1ZDUxMzk1ZmM0MzIzMTc2In0.eyJhdWQiOiIzIiwianRpIjoiNTY2ZjQwN2FjOTRiY2JmZWY2OWFiZWFlNWNmY2Y2MjAwYjIxZTdlNzE4MGFmNGE4ZWJiZDdmZThhZWFkOWI0ZjVkNTEzOTVmYzQzMjMxNzYiLCJpYXQiOjE1MzU3MTU2MzIsIm5iZiI6MTUzNTcxNTYzMiwiZXhwIjoxNTY3MjUxNjMyLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.BioBk7yG4OwdMy8QGqPbTqQG48HFva8H6O32l6DwzWpXEAVp3-7-dw3NpGTKQGKX4T25Z8fVNzi4jCoEsVT9SF4BPgeFydosvntFcvdvbT5HVdZebgj6DYywSJB5i3bUdlP-x5aKSMCUWrkmDryGWM6YJp9geQyyNrIxy1yAF44mZjThy7jfBrmT4hOGUgGKVhynQbAtUiu_9t6jkQTVmKXjPisEyNn4_V8vr1avYnaogalCl7TTuI8OY93Dd35MiW16ftKResVVfaJZBw4PuHffz2WUuzt7-WvG_NtrqLQ9W86b0gSF_ZeDDJTUw9Irp_iqCdiG3tdT5CCi60vXCis1MjbKxY86k7aPLXhMoNT0xqZvqrg5n8gEUDYRc-OfGVRATuQ_5KIwAxDjOaohjX5_hTq67rSkMbOX3m5iG-bWolPBcZe6E5ucZypWKxOWjVo6TjD5Urwm-a50FTrTcMc8upsJcB-vKSs_cmxMgY16dyvS_SpsrsXr4hFQxUj2E4rvOEwE_xgC2iAyvlPpngcHxf2UlFi_48lVvDvZs26VhH5kVMZjXrgFpWGmfFIQrbLI0RRXfKxNAcc281mVmkQxpLOt1w1-WT1ieFoOVwTQaQ3Gj5vndz-wvqgNE0noS5Rrw6JF__9zzV4T8CfUfDatuhSvBpNhO1xzArK2mZk');

      let url = 'http://localhost/blog1/public/index.php/api/fileupload';
      //let url = 'http://127.0.0.1:8000/api/fileupload';

      this.http.post(url, data, {
        headers: headers
      }).subscribe(data => {
        console.log(data);
      })
    }
  }
}
