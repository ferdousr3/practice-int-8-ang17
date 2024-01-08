import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-post-data',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css',
})
export class PostDataComponent {
  constructor(private fromBuilder: FormBuilder, private http: HttpClient) {}

  productForm = this.fromBuilder.group({
    productName: new FormControl('', [Validators.required]),
    productPrice: new FormControl('', [Validators.required]),
    productColor: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', [Validators.required]),
  });

  url: string = 'https://aninter8-bd319-default-rtdb.firebaseio.c';

  onSubmit(product: any): void {
    this.http.post(`${this.url}/product.json`, product).subscribe((res) => {
      // console.log(res);
      this.productForm.reset();
    }),catchError((err) => {
      return throwError(() => {
        console.log('Product not found');
        return err;
      });
    });

    console.log(this.productForm.value);
  }
}
