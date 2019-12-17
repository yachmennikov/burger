import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { SpoppingListService } from '../spopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editItem: Ingredient;

  constructor(private shopListService: SpoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
          this.editMode = true;
          this.editItem = this.shopListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          })
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shopListService.addIngredients(newIngredient)
    }
   form.reset()
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false
  }

  onDelete() {
    this.shopListService.deleteInrgedient(this.editedItemIndex)
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
