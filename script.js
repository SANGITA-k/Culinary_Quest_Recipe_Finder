// Recipe data
const recipes = [
    {
        id: '1',
        title: 'Mediterranean Quinoa Bowl',
        description: 'A vibrant and nutritious bowl packed with fresh vegetables, quinoa, and tahini dressing.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 25,
        servings: 4,
        difficulty: 'Easy',
        cuisine: 'Mediterranean',
        mealType: 'Lunch',
        dietaryTags: ['Vegetarian', 'Gluten-Free', 'Healthy'],
        ingredients: [
            '1 cup quinoa',
            '2 cups vegetable broth',
            '1 cucumber, diced',
            '2 tomatoes, chopped',
            '1/2 red onion, sliced',
            '1/2 cup olives',
            '1/4 cup feta cheese',
            '3 tbsp tahini',
            '2 tbsp lemon juice',
            'Fresh parsley'
        ],
        instructions: [
            'Rinse quinoa and cook with vegetable broth for 15 minutes.',
            'Let quinoa cool completely.',
            'Prepare all vegetables and arrange in bowls.',
            'Whisk tahini with lemon juice and water until smooth.',
            'Top quinoa with vegetables, feta, and tahini dressing.',
            'Garnish with fresh parsley and serve.'
        ],
        author: 'Chef Maria',
        rating: 4.8,
        reviews: 124
    },
    {
        id: '2',
        title: 'Spicy Thai Basil Stir Fry',
        description: 'An aromatic Thai dish with crispy vegetables and fragrant basil in a spicy sauce.',
        image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 15,
        servings: 2,
        difficulty: 'Medium',
        cuisine: 'Thai',
        mealType: 'Dinner',
        dietaryTags: ['Spicy', 'Quick'],
        ingredients: [
            '2 tbsp vegetable oil',
            '3 cloves garlic, minced',
            '1 bell pepper, sliced',
            '1 onion, sliced',
            '2 tbsp soy sauce',
            '1 tbsp fish sauce',
            '1 tsp sugar',
            '2 Thai chilies',
            '1 cup fresh Thai basil',
            'Jasmine rice for serving'
        ],
        instructions: [
            'Heat oil in a wok over high heat.',
            'Add garlic and chilies, stir fry for 30 seconds.',
            'Add vegetables and stir fry for 3-4 minutes.',
            'Mix in sauces and sugar, toss well.',
            'Add Thai basil and stir until wilted.',
            'Serve immediately over jasmine rice.'
        ],
        author: 'Chef Somchai',
        rating: 4.6,
        reviews: 89
    },
    {
        id: '3',
        title: 'Classic Chocolate Chip Cookies',
        description: 'Perfectly chewy cookies with golden edges and melty chocolate chips.',
        image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 30,
        servings: 24,
        difficulty: 'Easy',
        cuisine: 'American',
        mealType: 'Dessert',
        dietaryTags: ['Sweet', 'Baking'],
        ingredients: [
            '2 1/4 cups all-purpose flour',
            '1 tsp baking soda',
            '1 tsp salt',
            '1 cup butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup brown sugar',
            '2 large eggs',
            '2 tsp vanilla extract',
            '2 cups chocolate chips'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C).',
            'Mix flour, baking soda, and salt in a bowl.',
            'Cream butter with both sugars until fluffy.',
            'Beat in eggs and vanilla.',
            'Gradually mix in flour mixture.',
            'Stir in chocolate chips.',
            'Drop rounded tablespoons on baking sheet.',
            'Bake 9-11 minutes until golden brown.'
        ],
        author: 'Grandma Betty',
        rating: 4.9,
        reviews: 256
    },
    {
        id: '4',
        title: 'Avocado Toast Deluxe',
        description: 'Elevated avocado toast with poached egg, cherry tomatoes, and everything seasoning.',
        image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 10,
        servings: 2,
        difficulty: 'Easy',
        cuisine: 'Modern',
        mealType: 'Breakfast',
        dietaryTags: ['Healthy', 'Vegetarian', 'Quick'],
        ingredients: [
            '2 slices sourdough bread',
            '1 ripe avocado',
            '2 eggs',
            '1/2 cup cherry tomatoes',
            '2 tbsp everything seasoning',
            '1 tbsp olive oil',
            'Salt and pepper to taste',
            'Lemon juice'
        ],
        instructions: [
            'Toast bread slices until golden.',
            'Bring water to simmer for poached eggs.',
            'Mash avocado with lemon juice, salt, and pepper.',
            'Crack eggs into simmering water, cook 3 minutes.',
            'Spread avocado on toast.',
            'Top with halved cherry tomatoes.',
            'Add poached egg on top.',
            'Sprinkle with everything seasoning and drizzle olive oil.'
        ],
        author: 'Chef Alex',
        rating: 4.5,
        reviews: 78
    },
    {
        id: '5',
        title: 'Indian Butter Chicken',
        description: 'Rich and creamy tomato-based curry with tender chicken in aromatic spices.',
        image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        mealType: 'Dinner',
        dietaryTags: ['Spicy', 'Creamy'],
        ingredients: [
            '2 lbs chicken breast, cubed',
            '1 cup heavy cream',
            '1 can crushed tomatoes',
            '3 tbsp butter',
            '1 onion, diced',
            '4 cloves garlic',
            '1 inch ginger',
            '2 tsp garam masala',
            '1 tsp turmeric',
            '1 tsp cumin',
            'Salt and cilantro'
        ],
        instructions: [
            'Marinate chicken in yogurt and spices for 30 minutes.',
            'Sauté onion, garlic, and ginger until fragrant.',
            'Add spices and cook 1 minute.',
            'Add tomatoes and simmer 10 minutes.',
            'Add marinated chicken and cook 15 minutes.',
            'Stir in cream and butter.',
            'Simmer until chicken is tender.',
            'Garnish with cilantro and serve with rice.'
        ],
        author: 'Chef Priya',
        rating: 4.7,
        reviews: 143
    },
    {
        id: '6',
        title: 'Fresh Caesar Salad',
        description: 'Crisp romaine lettuce with homemade caesar dressing, croutons, and parmesan.',
        image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 20,
        servings: 4,
        difficulty: 'Easy',
        cuisine: 'Italian',
        mealType: 'Lunch',
        dietaryTags: ['Vegetarian', 'Fresh'],
        ingredients: [
            '2 heads romaine lettuce',
            '1/2 cup parmesan cheese',
            '1/2 cup croutons',
            '2 anchovy fillets',
            '2 cloves garlic',
            '1 egg yolk',
            '2 tbsp lemon juice',
            '1/3 cup olive oil',
            'Black pepper'
        ],
        instructions: [
            'Wash and chop romaine lettuce.',
            'Make croutons from day-old bread.',
            'Mash anchovies and garlic into paste.',
            'Whisk egg yolk with lemon juice.',
            'Slowly add olive oil while whisking.',
            'Mix in anchovy paste.',
            'Toss lettuce with dressing.',
            'Top with croutons and shaved parmesan.'
        ],
        author: 'Chef Marco',
        rating: 4.4,
        reviews: 97
    }
];

// Application state
let currentFilters = {
    searchTerm: '',
    cuisine: 'All',
    mealType: 'All',
    difficulty: 'All',
    dietaryTags: [],
    maxCookTime: 60
};

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let filteredRecipes = [...recipes];

// DOM elements
const searchInput = document.getElementById('searchInput');
const recipesGrid = document.getElementById('recipesGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const favoritesCount = document.getElementById('favoritesCount');
const cookTimeSlider = document.getElementById('cookTimeSlider');
const cookTimeValue = document.getElementById('cookTimeValue');
const recipeModal = document.getElementById('recipeModal');
const closeModal = document.getElementById('closeModal');

// Initialize the application
function init() {
    setupEventListeners();
    updateFavoritesCount();
    renderRecipes();
}

// Set up event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value;
        filterAndRenderRecipes();
    });

    // Filter radio buttons
    document.querySelectorAll('input[name="cuisine"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.cuisine = e.target.value;
            filterAndRenderRecipes();
        });
    });

    document.querySelectorAll('input[name="mealType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.mealType = e.target.value;
            filterAndRenderRecipes();
        });
    });

    document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.difficulty = e.target.value;
            filterAndRenderRecipes();
        });
    });

    // Cook time slider
    cookTimeSlider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        currentFilters.maxCookTime = value;
        cookTimeValue.textContent = value === 60 ? '60+ min' : `${value} min`;
        filterAndRenderRecipes();
    });

    // Dietary tags
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tag = e.target.dataset.tag;
            toggleDietaryTag(tag);
            e.target.classList.toggle('active');
            filterAndRenderRecipes();
        });
    });

    // Modal close
    closeModal.addEventListener('click', closeRecipeModal);
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            closeRecipeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && recipeModal.classList.contains('active')) {
            closeRecipeModal();
        }
    });
}

// Toggle dietary tag filter
function toggleDietaryTag(tag) {
    const index = currentFilters.dietaryTags.indexOf(tag);
    if (index > -1) {
        currentFilters.dietaryTags.splice(index, 1);
    } else {
        currentFilters.dietaryTags.push(tag);
    }
}

// Filter recipes based on current filters
function filterRecipes() {
    return recipes.filter(recipe => {
        // Search term filter
        if (currentFilters.searchTerm) {
            const searchLower = currentFilters.searchTerm.toLowerCase();
            const matchesSearch = 
                recipe.title.toLowerCase().includes(searchLower) ||
                recipe.description.toLowerCase().includes(searchLower) ||
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchLower)) ||
                recipe.cuisine.toLowerCase().includes(searchLower) ||
                recipe.dietaryTags.some(tag => tag.toLowerCase().includes(searchLower));
            
            if (!matchesSearch) return false;
        }

        // Cuisine filter
        if (currentFilters.cuisine !== 'All' && recipe.cuisine !== currentFilters.cuisine) {
            return false;
        }

        // Meal type filter
        if (currentFilters.mealType !== 'All' && recipe.mealType !== currentFilters.mealType) {
            return false;
        }

        // Difficulty filter
        if (currentFilters.difficulty !== 'All' && recipe.difficulty !== currentFilters.difficulty) {
            return false;
        }

        // Cook time filter
        if (currentFilters.maxCookTime < 60 && recipe.cookTime > currentFilters.maxCookTime) {
            return false;
        }

        // Dietary tags filter
        if (currentFilters.dietaryTags.length > 0) {
            const hasMatchingTag = currentFilters.dietaryTags.some(tag => 
                recipe.dietaryTags.includes(tag)
            );
            if (!hasMatchingTag) return false;
        }

        return true;
    });
}

// Filter and render recipes
function filterAndRenderRecipes() {
    filteredRecipes = filterRecipes();
    renderRecipes();
}

// Render recipes to the grid
function renderRecipes() {
    const count = filteredRecipes.length;
    resultsCount.textContent = `Found ${count} recipe${count !== 1 ? 's' : ''} for you`;

    if (count === 0) {
        recipesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    recipesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    recipesGrid.innerHTML = filteredRecipes.map(recipe => createRecipeCard(recipe)).join('');

    // Add event listeners to recipe cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        const recipeId = card.dataset.recipeId;
        const recipe = recipes.find(r => r.id === recipeId);
        
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-heart')) {
                openRecipeModal(recipe);
            }
        });
    });

    // Add event listeners to favorite buttons
    document.querySelectorAll('.favorite-heart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const recipeId = e.target.closest('.recipe-card').dataset.recipeId;
            toggleFavorite(recipeId);
        });
    });
}

// Create recipe card HTML
function createRecipeCard(recipe) {
    const isFavorite = favorites.includes(recipe.id);
    const difficultyClass = `difficulty-${recipe.difficulty.toLowerCase()}`;
    
    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <button class="favorite-heart ${isFavorite ? 'active' : ''}">
                    <i class="fas fa-heart"></i>
                </button>
                <div class="difficulty-badge ${difficultyClass}">
                    ${recipe.difficulty}
                </div>
            </div>
            
            <div class="recipe-content">
                <div class="recipe-meta-top">
                    <span class="cuisine-type">${recipe.cuisine}</span>
                    <span class="meal-type">${recipe.mealType}</span>
                </div>
                
                <h3 class="recipe-title">${recipe.title}</h3>
                
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-stats">
                    <div class="stat-group">
                        <div class="stat-item">
                            <i class="fas fa-clock"></i>
                            <span>${recipe.cookTime}min</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-users"></i>
                            <span>${recipe.servings}</span>
                        </div>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span class="rating-value">${recipe.rating}</span>
                        <span>(${recipe.reviews})</span>
                    </div>
                </div>
                
                <div class="recipe-tags">
                    ${recipe.dietaryTags.slice(0, 3).map(tag => 
                        `<span class="recipe-tag">${tag}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

// Toggle favorite status
function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderRecipes(); // Re-render to update heart states
    
    // Update modal favorite button if modal is open
    const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
    if (modalFavoriteBtn && modalFavoriteBtn.dataset.recipeId === recipeId) {
        modalFavoriteBtn.classList.toggle('active', favorites.includes(recipeId));
    }
}

// Update favorites count in header
function updateFavoritesCount() {
    favoritesCount.textContent = favorites.length;
    favoritesCount.style.display = favorites.length > 0 ? 'flex' : 'none';
}

// Open recipe modal
function openRecipeModal(recipe) {
    const modal = document.getElementById('recipeModal');
    const isFavorite = favorites.includes(recipe.id);
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').alt = recipe.title;
    document.getElementById('modalCookTime').textContent = `${recipe.cookTime} min`;
    document.getElementById('modalServings').textContent = `${recipe.servings} servings`;
    document.getElementById('modalRating').textContent = recipe.rating;
    document.getElementById('modalReviews').textContent = `(${recipe.reviews} reviews)`;
    document.getElementById('modalDescription').textContent = recipe.description;
    document.getElementById('modalCuisine').textContent = recipe.cuisine;
    document.getElementById('modalMealType').textContent = recipe.mealType;
    document.getElementById('modalAuthor').textContent = recipe.author;
    
    // Set difficulty badge
    const difficultyBadge = document.getElementById('modalDifficulty');
    difficultyBadge.textContent = recipe.difficulty;
    difficultyBadge.className = `difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}`;
    
    // Set favorite button
    const favoriteBtn = document.getElementById('modalFavoriteBtn');
    favoriteBtn.classList.toggle('active', isFavorite);
    favoriteBtn.dataset.recipeId = recipe.id;
    
    // Populate ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    // Populate instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = recipe.instructions.map(instruction => 
        `<li><span>${instruction}</span></li>`
    ).join('');
    
    // Populate dietary tags
    const dietaryTagsContainer = document.getElementById('modalDietaryTags');
    dietaryTagsContainer.innerHTML = recipe.dietaryTags.map(tag => 
        `<span class="recipe-tag">${tag}</span>`
    ).join('');
    
    // Add favorite button event listener
    favoriteBtn.onclick = () => toggleFavorite(recipe.id);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close recipe modal
function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);