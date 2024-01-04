import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct, TableData } from './pipe.data';
import { Slices } from './slices.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, Slices],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  public products: IProduct[] = TableData.products;
}
