import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipes.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService)  {} 

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-recipe-b5d3c.firebaseio.com/recipes.json', recipes)
               .subscribe( response => console.log(response))
    }

    fetchRecipes() {
        this.http.get('https://ng-recipe-b5d3c.firebaseio.com/recipes.json')
                .subscribe( recipes => {
                    console.log(recipes)
                })
    }

}