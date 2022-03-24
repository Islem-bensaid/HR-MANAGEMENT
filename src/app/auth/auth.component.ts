import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() {

   }
    @ViewChild('docTest') docTest :any;

  ngOnInit(): void {
    let img=document.querySelector(".img__btn");
    let con=document.querySelector(".cont");
    img?.addEventListener("click",function(){
      con?.classList.toggle('s--signup');
    })

  };

}




