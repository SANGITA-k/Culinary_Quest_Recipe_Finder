export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Dessert';
  dietaryTags: string[];
  ingredients: string[];
  instructions: string[];
  author: string;
  rating: number;
  reviews: number;
}

export interface FilterOptions {
  searchTerm: string;
  cuisine: string;
  mealType: string;
  difficulty: string;
  dietaryTags: string[];
  maxCookTime: number;
}