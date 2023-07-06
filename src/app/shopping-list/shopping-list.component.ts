import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private slService : ShoppingListService, private loggingService : LoggingService){}
  
  private igChangedSub : Subscription;

  ingredients : Ingredient[];

  ngOnInit(): void {
      this.ingredients = this.slService.getIngredients();
      this.igChangedSub = this.slService.ingredientChanged.subscribe(
       (ingredients : Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

      this.loggingService.printLog('Hello from ShoppingList Component ngOnInit');
  }

  
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(index : number){
    this.slService.startedEditeing.next(index);
  }


}
