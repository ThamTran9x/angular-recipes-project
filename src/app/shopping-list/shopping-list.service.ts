import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  changedIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIng: Ingredient): void {
    this.ingredients[index] = newIng;
    this.changedIngredients.next(this.ingredients.slice());
  }
}
