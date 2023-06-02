import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 
  disable:boolean=true
  data=['RRR','car','jameel']
  isactive:boolean=false;
  op:string='-'
  num1:number=2;
  num2:number=3;
  mydata:any=[
    {names:'jameel',designation:'software developer',rollno:'123',marks:100},
    {names:'jameel',designation:'software developer',rollno:'123',marks:100},
    {names:'jameel',designation:'software developer',rollno:'123',marks:100},
    {names:'jameel',designation:'software developer',rollno:'123',marks:100},
    {names:'jameel',designation:'software developer',rollno:'123',marks:100}
  ]
  
  
}
