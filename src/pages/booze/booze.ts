import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddBoozePage } from './../addbooze/addbooze';

@Component({
  selector: 'page-booze',
  templateUrl: 'booze.html'
})
export class BoozePage {
  AddBoozeBtn: any;

  types = [
    'Gin',
    'Vodka',
    'Whisky',
    'Wine',
    'Beer'
  ];

  typeSelected(type: string) {
    console.log("Selected Type", type);
  }

  constructor(public navCtrl: NavController) {
    this.AddBoozeBtn = AddBoozePage;
  }

}
