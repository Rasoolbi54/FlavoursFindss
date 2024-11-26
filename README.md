# Flavours Find - Recipe Finder Web App

## Project Overview

Flavours Find is a web application that allows users to explore and discover delicious recipes based on various search parameters. Users can search by ingredients, meal names, categories, moods, time, and cuisines. The app also allows users to mark meals as favorites and filter recipes by different criteria. It provides a rich, responsive experience and a clean UI built with React.js, styled using Tailwind CSS.

---

## Features

### 1. **Search by Ingredients and Meal Name**
   - Users can search for recipes based on one or more ingredients.
   - Additionally, users can search by meal name.
   - The app combines results from both search types, ensuring unique recipes are displayed.

### 2. **Mood-Based Filtering**
   - Users can filter recipes based on mood categories such as:
     - Comfort
     - Healthy
     - Quick
     - Indulgent
   - Each mood category is mapped to a set of recipes that match the theme.

### 3. **Time-Based Filtering**
   - Recipes can be filtered based on time:
     - quick

### 4. **Category and Cuisine-Based Filtering**
   - Users can filter recipes by:
     - **Category**: (e.g., Soup, Salad, Dessert)
     - **Cuisine**: (e.g., Italian, Mexican, Asian)
   
### 5. **Favorites**
   - Users can mark their favorite meals.
   - A separate "Favorites" page lists all favorited recipes.
   - The app uses context API and `localStorage` to persist favorite meals.

### 6. **Random Meal Fetch**
   - Users can discover random meals by loading a set of 20 random recipes upon initial page load.



### 7. **Mobile and Desktop Responsive**
   - The app is fully responsive, adapting the layout for mobile, tablet, and desktop views.
   - Mobile and desktop sidebars are dynamically shown or hidden based on user interaction.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Context API
- **API**: TheMealDB API
- **Deployment**: [Netlify](https://www.netlify.com/) (or any other preferred platform)

---

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/flavours-find.git
    ```

2. **Install Dependencies**:
    Navigate into the project directory and run the following command to install dependencies:
    ```bash
    cd flavours-find
    npm install
    ```

3. **Start the Development Server**:
    After installing the dependencies, run the following command to start the local development server:
    ```bash
    npm start
    ```
    This will open the app in your browser at `http://localhost:3000`.

---

## How It Works

1. **Search Functionality**:
   - The search bar allows users to input ingredients or meal names.
   - When the user submits the search, the app fetches data from TheMealDB API based on the provided search query.
   
2. **Mood Selector**:
   - When a user selects a mood ( Healthy, Quick), the app fetches recipes from predefined categories that match the selected mood.
   


3. **Category and Cuisine Filters**:
   - Users can filter meals by category (e.g., Dessert, Salad, etc.) and cuisine (e.g., Italian, Mexican).
   
4. **Favorites**:
   - Users can mark meals as favorites, and these meals will be stored in local storage, persisting across page reloads.
   
5. **Random Meal Fetch**:
   - Upon loading, the app fetches 20 random meals from TheMealDB API for users to discover.


---



## Video Walkthrough

Watch the video walkthrough of the app here: [(https://drive.google.com/file/d/1DawOWmNbHAyHZ5gm7DHabKHhPizM4aEm/view)].

---



