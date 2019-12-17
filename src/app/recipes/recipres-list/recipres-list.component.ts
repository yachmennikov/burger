import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipres-list',
  templateUrl: './recipres-list.component.html',
  styleUrls: ['./recipres-list.component.css']
})
export class RecipresListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subcription: Subscription;
 
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subcription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subcription.unsubscribe()
  }

}
