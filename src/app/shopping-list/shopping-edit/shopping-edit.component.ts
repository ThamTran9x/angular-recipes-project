import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) name: ElementRef;
  @ViewChild('amountInput', { static: false }) amount: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  addShoppingItem(): void {
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    this.ingredient.emit(new Ingredient(ingName, ingAmount));
  }
}
