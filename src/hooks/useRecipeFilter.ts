import { useMemo } from 'react';
import { Recipe, FilterOptions } from '../types/recipe';

export function useRecipeFilter(recipes: Recipe[], filters: FilterOptions) {
  return useMemo(() => {
    return recipes.filter(recipe => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          recipe.title.toLowerCase().includes(searchLower) ||
          recipe.description.toLowerCase().includes(searchLower) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchLower)) ||
          recipe.cuisine.toLowerCase().includes(searchLower) ||
          recipe.dietaryTags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Cuisine filter
      if (filters.cuisine !== 'All' && recipe.cuisine !== filters.cuisine) {
        return false;
      }

      // Meal type filter
      if (filters.mealType !== 'All' && recipe.mealType !== filters.mealType) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty !== 'All' && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      // Cook time filter
      if (filters.maxCookTime < 60 && recipe.cookTime > filters.maxCookTime) {
        return false;
      }

      // Dietary tags filter
      if (filters.dietaryTags.length > 0) {
        const hasMatchingTag = filters.dietaryTags.some(tag => 
          recipe.dietaryTags.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [recipes, filters]);
}