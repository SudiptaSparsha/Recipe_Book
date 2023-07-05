import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth.guard.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';

const routes : Routes = [
  {path : 'recipes', component : RecipesComponent, canActivate : [AuthGuardService],
  children : [
    {path : '', component : RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, resolve : [RecipesResolverService]},
    {path : ':id', component : RecipeDetailsComponent, resolve : [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve : [RecipesResolverService]}
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
