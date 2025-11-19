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
    },
    {
        id: '7',
        title: 'Korean Bibimbap Bowl',
        description: 'Colorful Korean rice bowl with seasoned vegetables, marinated beef, and gochujang sauce.',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 40,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Korean',
        mealType: 'Dinner',
        dietaryTags: ['Spicy', 'Healthy'],
        ingredients: [
            '2 cups cooked white rice',
            '1 lb thinly sliced beef',
            '2 tbsp soy sauce',
            '1 tbsp sesame oil',
            '2 carrots, julienned',
            '1 zucchini, julienned',
            '200g spinach',
            '200g bean sprouts',
            '4 shiitake mushrooms',
            '4 eggs',
            '3 tbsp gochujang',
            '2 tbsp rice vinegar',
            'Sesame seeds'
        ],
        instructions: [
            'Marinate beef in soy sauce and sesame oil for 20 minutes.',
            'Blanch spinach and bean sprouts separately, season with salt.',
            'Sauté carrots, zucchini, and mushrooms until tender.',
            'Cook marinated beef until browned.',
            'Fry eggs sunny-side up.',
            'Mix gochujang with rice vinegar for sauce.',
            'Arrange rice in bowls, top with vegetables and beef.',
            'Top with fried egg, drizzle sauce, and sprinkle sesame seeds.'
        ],
        author: 'Chef Kim',
        rating: 4.7,
        reviews: 156
    },
    {
        id: '8',
        title: 'French Croissants',
        description: 'Buttery, flaky pastries perfect for breakfast with layers of golden, crispy dough.',
        image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 180,
        servings: 12,
        difficulty: 'Hard',
        cuisine: 'French',
        mealType: 'Breakfast',
        dietaryTags: ['Baking', 'Sweet'],
        ingredients: [
            '500g bread flour',
            '10g salt',
            '80g sugar',
            '10g instant yeast',
            '300ml warm milk',
            '250g cold butter',
            '1 egg for wash',
            '2 tbsp water'
        ],
        instructions: [
            'Mix flour, salt, sugar, and yeast in a bowl.',
            'Add warm milk and knead into smooth dough.',
            'Wrap and refrigerate for 1 hour.',
            'Roll butter into rectangle, wrap in dough.',
            'Perform 3 sets of letter folds, chilling between each.',
            'Roll out and cut into triangles.',
            'Roll triangles into croissant shape.',
            'Proof for 2 hours, brush with egg wash, bake at 375°F for 15-20 minutes.'
        ],
        author: 'Chef Pierre',
        rating: 4.9,
        reviews: 203
    },
    {
        id: '9',
        title: 'Mexican Street Tacos',
        description: 'Authentic soft corn tortillas filled with seasoned meat, onions, cilantro, and lime.',
        image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 25,
        servings: 6,
        difficulty: 'Easy',
        cuisine: 'Mexican',
        mealType: 'Dinner',
        dietaryTags: ['Spicy', 'Quick'],
        ingredients: [
            '12 corn tortillas',
            '1 lb beef chuck, diced',
            '1 white onion, diced',
            '3 cloves garlic, minced',
            '2 tsp cumin',
            '2 tsp chili powder',
            '1 tsp paprika',
            'Fresh cilantro',
            '2 limes, cut in wedges',
            'Salsa verde',
            'White onion, finely diced'
        ],
        instructions: [
            'Season beef with cumin, chili powder, and paprika.',
            'Cook beef in hot pan until browned and crispy.',
            'Add garlic and half the onion, cook until fragrant.',
            'Warm tortillas on griddle or comal.',
            'Fill tortillas with meat mixture.',
            'Top with fresh onion and cilantro.',
            'Serve with lime wedges and salsa verde.',
            'Enjoy immediately while hot.'
        ],
        author: 'Chef Carlos',
        rating: 4.8,
        reviews: 189
    },
    {
        id: '10',
        title: 'Japanese Ramen Bowl',
        description: 'Rich, savory broth with tender noodles, soft-boiled eggs, and fresh toppings.',
        image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 60,
        servings: 4,
        difficulty: 'Hard',
        cuisine: 'Japanese',
        mealType: 'Dinner',
        dietaryTags: ['Creamy', 'Spicy'],
        ingredients: [
            '4 portions fresh ramen noodles',
            '6 cups chicken broth',
            '2 tbsp miso paste',
            '2 tbsp soy sauce',
            '1 tbsp sesame oil',
            '4 soft-boiled eggs',
            '200g pork belly, sliced',
            '2 green onions, sliced',
            '1 sheet nori, cut in strips',
            '100g bamboo shoots',
            '2 cloves garlic, minced',
            '1 inch ginger, grated'
        ],
        instructions: [
            'Prepare soft-boiled eggs, peel and set aside.',
            'Cook pork belly until crispy, set aside.',
            'Sauté garlic and ginger until fragrant.',
            'Add chicken broth, bring to simmer.',
            'Whisk in miso paste and soy sauce.',
            'Cook ramen noodles according to package directions.',
            'Divide noodles among bowls, ladle hot broth over.',
            'Top with egg, pork, green onions, nori, and bamboo shoots.'
        ],
        author: 'Chef Tanaka',
        rating: 4.9,
        reviews: 234
    },
    {
        id: '11',
        title: 'Greek Moussaka',
        description: 'Layered casserole with eggplant, spiced meat sauce, and creamy béchamel topping.',
        image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 90,
        servings: 8,
        difficulty: 'Hard',
        cuisine: 'Greek',
        mealType: 'Dinner',
        dietaryTags: ['Creamy'],
        ingredients: [
            '3 large eggplants, sliced',
            '1 lb ground lamb',
            '1 onion, diced',
            '3 cloves garlic, minced',
            '1 can crushed tomatoes',
            '2 tbsp tomato paste',
            '1 tsp cinnamon',
            '1 tsp oregano',
            '4 tbsp butter',
            '4 tbsp flour',
            '2 cups milk',
            '1/2 cup parmesan cheese',
            '2 egg yolks',
            'Olive oil for frying'
        ],
        instructions: [
            'Salt eggplant slices, let drain for 30 minutes.',
            'Fry eggplant slices until golden, set aside.',
            'Cook lamb with onion and garlic until browned.',
            'Add tomatoes, tomato paste, cinnamon, and oregano.',
            'Simmer meat sauce for 20 minutes.',
            'Make béchamel: melt butter, whisk in flour, add milk gradually.',
            'Stir in cheese and egg yolks to béchamel.',
            'Layer eggplant, meat sauce, repeat, top with béchamel.',
            'Bake at 350°F for 45 minutes until golden.'
        ],
        author: 'Chef Dimitri',
        rating: 4.6,
        reviews: 167
    },
    {
        id: '12',
        title: 'Moroccan Tagine',
        description: 'Aromatic slow-cooked stew with tender lamb, dried fruits, and warm spices.',
        image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 120,
        servings: 6,
        difficulty: 'Medium',
        cuisine: 'Moroccan',
        mealType: 'Dinner',
        dietaryTags: ['Spicy', 'Sweet'],
        ingredients: [
            '2 lbs lamb shoulder, cubed',
            '2 onions, sliced',
            '3 cloves garlic, minced',
            '1 tsp ginger, grated',
            '2 tsp cinnamon',
            '1 tsp turmeric',
            '1 tsp cumin',
            '1/2 cup dried apricots',
            '1/2 cup prunes',
            '1/4 cup almonds',
            '2 cups beef broth',
            'Fresh cilantro',
            'Couscous for serving'
        ],
        instructions: [
            'Brown lamb pieces in tagine or heavy pot.',
            'Add onions, garlic, and ginger, cook until soft.',
            'Add all spices, cook for 1 minute.',
            'Add dried fruits, almonds, and broth.',
            'Bring to boil, then reduce heat to low.',
            'Cover and simmer for 1.5-2 hours until tender.',
            'Adjust seasoning and add more broth if needed.',
            'Garnish with cilantro, serve over couscous.'
        ],
        author: 'Chef Amina',
        rating: 4.7,
        reviews: 145
    },
    {
        id: '13',
        title: 'New York Cheesecake',
        description: 'Rich, creamy classic cheesecake with graham cracker crust and berry topping.',
        image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 240,
        servings: 12,
        difficulty: 'Medium',
        cuisine: 'American',
        mealType: 'Dessert',
        dietaryTags: ['Sweet', 'Baking', 'Creamy'],
        ingredients: [
            '2 cups graham cracker crumbs',
            '1/2 cup melted butter',
            '32 oz cream cheese, softened',
            '1 cup sugar',
            '4 large eggs',
            '1 cup sour cream',
            '2 tsp vanilla extract',
            '1/4 cup flour',
            'Mixed berries for topping',
            '2 tbsp berry jam'
        ],
        instructions: [
            'Mix graham cracker crumbs with melted butter.',
            'Press mixture into bottom of springform pan.',
            'Beat cream cheese until smooth and fluffy.',
            'Gradually add sugar, then eggs one at a time.',
            'Mix in sour cream, vanilla, and flour.',
            'Pour over crust, smooth top.',
            'Bake at 325°F for 50-60 minutes until center is almost set.',
            'Cool completely, refrigerate 4 hours, top with berries.'
        ],
        author: 'Chef Sarah',
        rating: 4.8,
        reviews: 298
    },
    {
        id: '14',
        title: 'Vietnamese Pho',
        description: 'Fragrant beef noodle soup with aromatic broth, fresh herbs, and rice noodles.',
        image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 180,
        servings: 6,
        difficulty: 'Hard',
        cuisine: 'Vietnamese',
        mealType: 'Lunch',
        dietaryTags: ['Healthy', 'Spicy'],
        ingredients: [
            '2 lbs beef bones',
            '1 lb beef brisket',
            '1 onion, halved',
            '3 inch ginger piece',
            '6 star anise',
            '4 cloves',
            '1 cinnamon stick',
            '1 tbsp coriander seeds',
            '1 lb rice noodles',
            '1/2 lb raw beef, thinly sliced',
            'Bean sprouts',
            'Thai basil',
            'Cilantro',
            'Lime wedges',
            'Fish sauce',
            'Hoisin sauce'
        ],
        instructions: [
            'Char onion and ginger over open flame until blackened.',
            'Toast spices in dry pan until fragrant.',
            'Boil bones and brisket for 10 minutes, drain and rinse.',
            'Add bones, brisket, charred vegetables, and spices to pot.',
            'Cover with water, simmer for 2-3 hours.',
            'Strain broth, season with fish sauce.',
            'Cook rice noodles according to package directions.',
            'Serve noodles in bowls, top with raw beef, ladle hot broth over.',
            'Serve with herbs, bean sprouts, lime, and sauces.'
        ],
        author: 'Chef Linh',
        rating: 4.9,
        reviews: 276
    },
    {
        id: '15',
        title: 'Italian Risotto Milanese',
        description: 'Creamy saffron risotto with parmesan cheese and a rich, golden color.',
        image: 'https://images.pexels.com/photos/8477552/pexels-photo-8477552.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 35,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Italian',
        mealType: 'Dinner',
        dietaryTags: ['Creamy', 'Vegetarian'],
        ingredients: [
            '1 1/2 cups Arborio rice',
            '6 cups warm chicken broth',
            '1/2 cup white wine',
            '1 small onion, finely diced',
            '3 tbsp butter',
            '2 tbsp olive oil',
            'Pinch of saffron threads',
            '1/2 cup grated Parmesan',
            '2 tbsp heavy cream',
            'Salt and white pepper'
        ],
        instructions: [
            'Steep saffron in 2 tbsp warm broth.',
            'Heat olive oil and 1 tbsp butter in heavy pan.',
            'Sauté onion until translucent.',
            'Add rice, stir to coat for 2 minutes.',
            'Add wine, stir until absorbed.',
            'Add warm broth one ladle at a time, stirring constantly.',
            'Continue until rice is creamy but still al dente, about 18 minutes.',
            'Stir in saffron mixture, remaining butter, cream, and Parmesan.',
            'Season and serve immediately.'
        ],
        author: 'Chef Giuseppe',
        rating: 4.7,
        reviews: 187
    },
    {
        id: '16',
        title: 'Turkish Baklava',
        description: 'Layers of flaky phyllo pastry filled with nuts and sweetened with honey syrup.',
        image: 'https://images.pexels.com/photos/7474020/pexels-photo-7474020.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 90,
        servings: 24,
        difficulty: 'Hard',
        cuisine: 'Turkish',
        mealType: 'Dessert',
        dietaryTags: ['Sweet', 'Baking'],
        ingredients: [
            '1 lb phyllo pastry',
            '2 cups mixed nuts, chopped',
            '1 cup melted butter',
            '1 tsp cinnamon',
            '1 cup sugar',
            '1 cup water',
            '1/2 cup honey',
            '2 tbsp lemon juice',
            '1 tsp vanilla extract'
        ],
        instructions: [
            'Mix chopped nuts with cinnamon.',
            'Brush baking dish with melted butter.',
            'Layer half the phyllo sheets, brushing each with butter.',
            'Spread nut mixture over phyllo.',
            'Layer remaining phyllo on top, brushing with butter.',
            'Cut into diamond shapes before baking.',
            'Bake at 350°F for 45-50 minutes until golden.',
            'Make syrup: boil sugar, water, honey, lemon juice, and vanilla.',
            'Pour cooled syrup over hot baklava, let absorb for 4 hours.'
        ],
        author: 'Chef Mehmet',
        rating: 4.8,
        reviews: 156
    },
    {
        id: '17',
        title: 'Brazilian Feijoada',
        description: 'Traditional black bean stew with various pork cuts, served with rice and orange slices.',
        image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 180,
        servings: 8,
        difficulty: 'Medium',
        cuisine: 'Brazilian',
        mealType: 'Dinner',
        dietaryTags: ['Spicy'],
        ingredients: [
            '2 cups dried black beans',
            '1 lb pork shoulder, cubed',
            '1/2 lb bacon, diced',
            '1/2 lb chorizo, sliced',
            '1 large onion, diced',
            '4 cloves garlic, minced',
            '2 bay leaves',
            '1 orange, zested and juiced',
            '2 tbsp olive oil',
            'White rice for serving',
            'Orange slices for garnish',
            'Collard greens, sautéed'
        ],
        instructions: [
            'Soak black beans overnight, drain and rinse.',
            'Cook beans with bay leaves until tender, about 1 hour.',
            'In large pot, cook bacon until crispy.',
            'Add pork shoulder, brown on all sides.',
            'Add chorizo, onion, and garlic, cook until fragrant.',
            'Add cooked beans with their liquid.',
            'Add orange zest and juice.',
            'Simmer for 1-2 hours until meat is tender.',
            'Serve over rice with orange slices and collard greens.'
        ],
        author: 'Chef Isabella',
        rating: 4.6,
        reviews: 134
    },
    {
        id: '18',
        title: 'Lebanese Hummus',
        description: 'Creamy chickpea dip with tahini, lemon, and garlic, served with warm pita bread.',
        image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=800',
        cookTime: 15,
        servings: 6,
        difficulty: 'Easy',
        cuisine: 'Lebanese',
        mealType: 'Snack',
        dietaryTags: ['Vegetarian', 'Healthy', 'Quick'],
        ingredients: [
            '2 cups cooked chickpeas',
            '1/4 cup tahini',
            '2 cloves garlic',
            '3 tbsp lemon juice',
            '2 tbsp olive oil',
            '1/2 tsp cumin',
            'Salt to taste',
            'Paprika for garnish',
            'Pine nuts for garnish',
            'Pita bread for serving'
        ],
        instructions: [
            'Reserve some chickpeas and liquid for garnish.',
            'Blend remaining chickpeas until smooth.',
            'Add tahini, garlic, lemon juice, and cumin.',
            'Blend until creamy, adding chickpea liquid as needed.',
            'Season with salt to taste.',
            'Transfer to serving bowl.',
            'Drizzle with olive oil, sprinkle paprika and pine nuts.',
            'Garnish with reserved whole chickpeas.',
            'Serve with warm pita bread.'
        ],
        author: 'Chef Layla',
        rating: 4.5,
        reviews: 89
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