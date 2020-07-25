import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private sLService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

   // let id = +this.route.snapshot.params['id']; // This way just make id loaded once when app initializes

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.id);
      }

    );

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

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route }); // this is correct method
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); // this is to practice another method

  }

}
