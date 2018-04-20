import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { $$ } from 'protractor';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit{
  public valeur: string;
  @ViewChild('val') private el: ElementRef;

  onKey(event: any) { 
    this.valeur = this.el.nativeElement.value;
  }

  constructor() { 
  }


  ngOnInit() {

    
    
  }

}
