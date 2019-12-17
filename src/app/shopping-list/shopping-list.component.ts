import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { SpoppingListService } from './spopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private idChangedSub: Subscription;
 

  constructor(private shopListService: SpoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.idChangedSub = this.shopListService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  onEditItem(index: number) {
    this.shopListService.startedEditing.next(index)
  }

  

  ngOnDestroy() {
    this.idChangedSub.unsubscribe()
  }

}
