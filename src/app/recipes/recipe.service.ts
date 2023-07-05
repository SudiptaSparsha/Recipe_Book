import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
constructor(private slService : ShoppingListService){}

recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Tasty Schinitzel', 
    //     'This is simply a test!', 
    //     'https://previews.123rf.com/images/voltan1/voltan11802/voltan1180200102/95164532-tasty-schnitzel-with-cucumber-salad-on-white-plate-close-up-view.jpg',
    //     [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20)
    //     ]),
    //     new Recipe('Big fat burger', 
    //     'This is simply a test!', 
    //     'https://heygrillhey.com/static/dc974e8bcee73db392a7f72a21278635/BBQ-Fatty-Burger-Feature.png',
    //     [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('Buns', 2)
    //     ]),
    //     new Recipe('Sandwich', 
    //     'This is simply a test!', 
    //     'https://img.freepik.com/premium-photo/two-homemade-sandwiches-with-toasted-bread-lettuce-cheese-meat-isolated_244366-392.jpg',
    //     [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('Bread', 2),
    //         new Ingredient('Vegetable', 2)
    //     ])
    //   ];

    private recipes : Recipe[] = [];

      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index : number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index : number, newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index : number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}