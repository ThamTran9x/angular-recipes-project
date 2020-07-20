import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) name: ElementRef;
  @ViewChild('amountInput', { static: false }) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addShoppingItem(): void {
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    this.shoppingListService.onAddNewIngredient(new Ingredient(ingName, ingAmount));
  }
}
