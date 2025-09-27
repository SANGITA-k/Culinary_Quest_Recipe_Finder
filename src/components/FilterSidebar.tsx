import React from 'react';
import { FilterOptions } from '../types/recipe';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const cuisines = ['All', 'Mediterranean', 'Thai', 'American', 'Modern', 'Indian', 'Italian'];
  const mealTypes = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const dietaryTags = ['Vegetarian', 'Gluten-Free', 'Healthy', 'Spicy', 'Quick', 'Sweet', 'Baking', 'Creamy', 'Fresh'];

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleDietaryTag = (tag: string) => {
    const currentTags = filters.dietaryTags;
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    handleFilterChange('dietaryTags', newTags);
  };

  return (
    <div className="w-80 bg-white p-6 shadow-lg border-r border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Cuisine</h3>
          <div className="space-y-2">
            {cuisines.map(cuisine => (
              <label key={cuisine} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="cuisine"
                  checked={filters.cuisine === cuisine}
                  onChange={() => handleFilterChange('cuisine', cuisine)}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-600 group-hover:text-gray-800 transition-colors">{cuisine}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Meal Type</h3>
          <div className="space-y-2">
            {mealTypes.map(type => (
              <label key={type} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="mealType"
                  checked={filters.mealType === type}
                  onChange={() => handleFilterChange('mealType', type)}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-600 group-hover:text-gray-800 transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty</h3>
          <div className="space-y-2">
            {difficulties.map(difficulty => (
              <label key={difficulty} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="difficulty"
                  checked={filters.difficulty === difficulty}
                  onChange={() => handleFilterChange('difficulty', difficulty)}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-600 group-hover:text-gray-800 transition-colors">{difficulty}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Cook Time</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="60"
              value={filters.maxCookTime}
              onChange={(e) => handleFilterChange('maxCookTime', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0 min</span>
              <span>{filters.maxCookTime} min</span>
              <span>60+ min</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Dietary Preferences</h3>
          <div className="flex flex-wrap gap-2">
            {dietaryTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleDietaryTag(tag)}
                className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                  filters.dietaryTags.includes(tag)
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
                } border`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}