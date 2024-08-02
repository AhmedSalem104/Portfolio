import { Component } from '@angular/core';
import { IMeals } from '../Inteface/IMeals';
import { RecommendedMealsComponent } from '../recommended-meals/recommended-meals.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedMealsComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {



  Meals: IMeals[] = [
    {
      mName: "Meal 1",
      mPrice: 29.99,
      mDes: "Description for Meal 1",
      mImage: "./assets/imgs/meal-1.jpg",
      mInStock: false
    },
    {
      mName: "Meal 2",
      mPrice: 49.99,
      mDes: "Description for Meal 2",
      mImage: "./assets/imgs/meal-4.jpg",
      mInStock: true
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-3.jpg",
      mInStock: false
    },
    {
      mName: "Meal 4",
      mPrice: 99.99,
      mDes: "Description for Meal 4",
      mImage: "./assets/imgs/meal-2.jpg",
      mInStock: true
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-2.jpg",
      mInStock: false
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-4.jpg",
      mInStock: false
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-3.jpg",
      mInStock: false
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-2.jpg",
      mInStock: false
    },
    {
      mName: "Meal 3",
      mPrice: 19.99,
      mDes: "Description for Meal 3",
      mImage: "./assets/imgs/meal-1.jpg",
      mInStock: false
    },

  ];


}
