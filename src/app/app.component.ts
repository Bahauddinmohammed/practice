import { UnaryOperator } from '@angular/compiler';
import { Component } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

    console.log('1');
    console.log('2');


    setTimeout(() => {
      console.log('3');

    }, 5000)

    console.log('4');
    console.log('5');
    var p1 = new Promise(function (resolve, reject) {
      var res = false;
      if (res) {
        resolve('it is resolved')

      }
      else {
        reject(' it is having error ')

      }
    })
    p1.then(function (value1) {
      console.log(value1)
    })
      .catch(function (value2) {
        console.log(value2);

      })

    // //reverse a string
    // var a='jameel';
    // var b=a.split('');
    // var c=b.reverse();
    // var d=c.join()
    // console.log(d);

    var str = 'jameel';
    console.log(str.length);
    for (let i = str.length - 1; i >= 0; i--) {
      let res = str[i]
      var res2 = res.split('')
      console.log(res2.join());
    }
  }
op:string='+'
}