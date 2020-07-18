import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is test', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_1280.jpg'),
    new Recipe('A test recipe2', 'this is test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  @Output() outputRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {

  }

  onSelectRecipe(selectedRecipe: Recipe): void {
    this.outputRecipe.emit(selectedRecipe);
  }
}
