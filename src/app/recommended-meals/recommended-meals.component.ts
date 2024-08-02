import { Component } from '@angular/core';
import { IMeals } from '../Inteface/IMeals';

@Component({
  selector: 'app-recommended-meals',
  standalone: true,
  imports: [],
  templateUrl: './recommended-meals.component.html',
  styleUrl: './recommended-meals.component.css'
})
export class RecommendedMealsComponent {
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
