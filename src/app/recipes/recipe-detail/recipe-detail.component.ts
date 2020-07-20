import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {

  }

  addIngrToSList(): void {
    const ingredients = this.selectedRecipe.ingredients;
    // METHOD 1
    // ingredients.forEach(ingredient => {
    //   this.sLService.onAddNewIngredient(ingredient);
    // });

    // METHOD 2 - Add a new method from SLService
    this.sLService.addNewIngrFromRecipe(ingredients);
  }

}
