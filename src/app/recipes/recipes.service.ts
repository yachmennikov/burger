import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { SpoppingListService } from '../shopping-list/spopping-list.service'
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe
            ('a test recipe', 
            'yeah only test recipy', 
            'https://adindex.ru/files2/news/2019_06/273019_veeegan.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe
            ('a test recipe 2', 
            'second recipe for you', 
            'https://burgerking.ru/images/product_images/mobile/cheezy-joe.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3)
            ])
      ];
    

      constructor(private shopListService: SpoppingListService) {  }

      getRecipes() {
          return this.recipes.slice();
      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shopListService.addIngredients(ingredients)
      }

      getRecipe(index: number) {
        return this.recipes[index]
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
      }

}