import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipres-list',
  templateUrl: './recipres-list.component.html',
  styleUrls: ['./recipres-list.component.css']
})
export class RecipresListComponent implements OnInit {

  recipes: Recipe[];
 
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
