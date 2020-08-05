import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-recipes-557ce.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        console.log(response);

      }
    );
  }

  fetchRecipes(): void {
    this.http.get<Recipe[]>('https://angular-recipes-557ce.firebaseio.com/recipes.json').subscribe(
      recipes => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}