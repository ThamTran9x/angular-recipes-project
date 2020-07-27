import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  changedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  onAddNewIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.changedIngredients.next(this.ingredients.slice());
  }

  addNewIngrFromRecipe(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.changedIngredients.next(this.ingredients.slice());
  }
}
