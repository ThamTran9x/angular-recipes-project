import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  showRecipe(recipe: Recipe): void {
    console.log('***  ' + JSON.stringify(recipe));
    this.selectedRecipe = recipe;
  }
}
