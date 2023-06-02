import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  constructor() {
   
    console.log(window)
    var age: number = 14;
    var drive = age >= 18 ?
      'yes drive' : 'no drive';
    
    window.console.log('hi', drive);

    let ab:string='dff12dfdf';
    var x='dff';
    var x='dffd';
   
  }
  data: string = ''
  path: string = "assets/images/car.jpg"
  ishidden: boolean = false
  isdisabled: boolean = false
  isactive: boolean = false
  cvar: string = 'green'
  dvar: string = 'red'
  name() {
    return this.data = 'bahauddin'
  }
  cols:number=0
  currentItems = [{
    id: 21,
    name: 'phone'
  }];
  mystyle: any = {
    color: 'blue',
    border: '1px solid red',
    backgroundColor: 'black'}
   

}
