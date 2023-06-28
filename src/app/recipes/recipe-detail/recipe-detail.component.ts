import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(params['name']);
      }
    );

  }

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {

    }

  onAddIngredientsToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  
}