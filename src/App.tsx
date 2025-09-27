import React, { useState } from 'react';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { recipes } from './data/recipes';
import { useRecipeFilter } from './hooks/useRecipeFilter';
import { Recipe, FilterOptions } from './types/recipe';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    cuisine: 'All',
    mealType: 'All',
    difficulty: 'All',
    dietaryTags: [],
    maxCookTime: 60
  });

  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRecipes = useRecipeFilter(recipes, filters);

  const handleToggleFavorite = (recipeId: string) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={filters.searchTerm}
        onSearchChange={(searchTerm) => setFilters(prev => ({ ...prev, searchTerm }))}
        favoriteCount={favorites.length}
      />
      
      <div className="flex">
        <FilterSidebar filters={filters} onFilterChange={setFilters} />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Discover Amazing Recipes
                </h2>
                <p className="text-gray-600 mt-2">
                  Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} for you
                </p>
              </div>
            </div>
            
            {filteredRecipes.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">🍳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No recipes found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelect={handleSelectRecipe}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isFavorite={selectedRecipe ? favorites.includes(selectedRecipe.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;