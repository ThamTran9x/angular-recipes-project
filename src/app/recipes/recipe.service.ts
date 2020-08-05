import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Gamberetto piatto con avocado',
  //     'Buono buono con gusto di mare',
  //     'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_1280.jpg',
  //     [
  //       new Ingredient('Fish', 1),
  //       new Ingredient('Soy source', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'Beef steak with salad',
  //     'Perfect choice for this season',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
  //     [
  //       new Ingredient('Menta', 3),
  //       new Ingredient('French fries', 10)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor() {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
