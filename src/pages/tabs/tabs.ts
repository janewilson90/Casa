import { Component } from '@angular/core';

import { BoozePage } from '../booze/booze';
import { NotesPage } from '../notes/notes';
import { FoodPage } from '../food/food';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FoodPage;
  tab2Root = BoozePage;
  tab3Root = NotesPage;

  constructor() {

  }
}
