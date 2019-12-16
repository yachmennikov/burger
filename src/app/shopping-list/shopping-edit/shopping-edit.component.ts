import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { SpoppingListService } from '../spopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  
  constructor(private shopListService: SpoppingListService) { }

  ngOnInit() {}

  onAddItem() {
    const newName = this.nameInputRef.nativeElement.value,
          newAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.shopListService.addIngredients(newIngredient)
  }
}
