// Indian Food Database
// Curated list from full dataset (Processed ~200 key items)
const indianFoodDatabase = [
    // --- Beverages ---
    { name: "Masala Chai", type: "Snack", cal: 16, prot: 0.4, carb: 2.6, fat: 0.5, unit: "1 cup" },
    { name: "Filter Coffee", type: "Snack", cal: 23, prot: 0.6, carb: 3.6, fat: 0.7, unit: "1 cup" },
    { name: "Sweet Lassi", type: "Snack", cal: 36, prot: 1.3, carb: 6.5, fat: 0.7, unit: "100ml" },
    { name: "Mango Lassi", type: "Snack", cal: 50, prot: 1.5, carb: 9.0, fat: 1.0, unit: "100ml" },

    // --- Breakfast (South Indian) ---
    { name: "Idli", type: "Breakfast", cal: 138, prot: 4.6, carb: 28, fat: 0.3, unit: "2 pieces" },
    { name: "Plain Dosa", type: "Breakfast", cal: 381, prot: 10, carb: 64, fat: 8.4, unit: "1 large" },
    { name: "Masala Dosa", type: "Breakfast", cal: 165, prot: 3.3, carb: 19.6, fat: 7.8, unit: "100g" },
    { name: "Uttapam", type: "Breakfast", cal: 256, prot: 6.2, carb: 36, fat: 9, unit: "1 piece" },
    { name: "Sambar", type: "Breakfast", cal: 97, prot: 3.4, carb: 10.6, fat: 4.4, unit: "1 bowl" },
    { name: "Upma", type: "Breakfast", cal: 148, prot: 3.3, carb: 16.3, fat: 7.5, unit: "1 bowl" },
    { name: "Poha", type: "Breakfast", cal: 295, prot: 6.1, carb: 35, fat: 14, unit: "1 plate" },
    { name: "Pongal", type: "Breakfast", cal: 215, prot: 4.2, carb: 42.6, fat: 4.6, unit: "1 bowl" },

    // --- Breakfast (North Indian / Parathas) ---
    { name: "Aloo Paratha", type: "Breakfast", cal: 205, prot: 3.7, carb: 24, fat: 10, unit: "1 piece" },
    { name: "Paneer Paratha", type: "Breakfast", cal: 263, prot: 8, carb: 24, fat: 15, unit: "1 piece" },
    { name: "Gobi Paratha", type: "Breakfast", cal: 178, prot: 3.7, carb: 19, fat: 9.5, unit: "1 piece" },
    { name: "Methi Paratha", type: "Breakfast", cal: 148, prot: 4.3, carb: 22, fat: 4.3, unit: "1 piece" },
    { name: "Poori", type: "Breakfast", cal: 738, prot: 8.2, carb: 1.3, fat: 77.6, unit: "100g" },
    { name: "Bhatura", type: "Breakfast", cal: 793, prot: 10.7, carb: 1.6, fat: 82.5, unit: "100g" },

    // --- Lunch / Dinner (Breads & Rice) ---
    { name: "Roti (Chapati)", type: "Lunch", cal: 202, prot: 5.9, carb: 35.6, fat: 3.6, unit: "2 pieces" },
    { name: "Roti (Chapati)", type: "Dinner", cal: 202, prot: 5.9, carb: 35.6, fat: 3.6, unit: "2 pieces" },
    { name: "Naan", type: "Lunch", cal: 286, prot: 8, carb: 51.7, fat: 5, unit: "1 piece" },
    { name: "Plain Rice", type: "Lunch", cal: 117, prot: 2.6, carb: 25.7, fat: 0.2, unit: "100g cooked" },
    { name: "Plain Rice", type: "Dinner", cal: 117, prot: 2.6, carb: 25.7, fat: 0.2, unit: "100g cooked" },
    { name: "Jeera Rice", type: "Lunch", cal: 135, prot: 2.5, carb: 23.6, fat: 3.2, unit: "100g" },
    { name: "Veg Pulao", type: "Lunch", cal: 113, prot: 2.7, carb: 17.5, fat: 3.3, unit: "100g" },
    { name: "Veg Biryani", type: "Lunch", cal: 175, prot: 3.2, carb: 18.6, fat: 9.5, unit: "100g" },
    { name: "Chicken Biryani", type: "Lunch", cal: 190, prot: 7.4, carb: 22.5, fat: 7.7, unit: "100g" },
    { name: "Mutton Biryani", type: "Lunch", cal: 215, prot: 8.5, carb: 20.0, fat: 10.0, unit: "100g" },
    { name: "Khichdi", type: "Dinner", cal: 143, prot: 5.6, carb: 19.6, fat: 4.5, unit: "1 bowl" },

    // --- Lunch / Dinner (Dals & Legumes) ---
    { name: "Dal Fry (Arhar)", type: "Lunch", cal: 100, prot: 5, carb: 12, fat: 3, unit: "1 bowl" },
    { name: "Dal Makhani", type: "Lunch", cal: 300, prot: 10, carb: 25, fat: 18, unit: "1 bowl" },
    { name: "Dal Makhani", type: "Dinner", cal: 300, prot: 10, carb: 25, fat: 18, unit: "1 bowl" },
    { name: "Chana Masala", type: "Lunch", cal: 163, prot: 6, carb: 20, fat: 7, unit: "1 bowl" },
    { name: "Rajma", type: "Lunch", cal: 144, prot: 6, carb: 16.4, fat: 5.8, unit: "1 bowl" },
    { name: "Moong Dal", type: "Dinner", cal: 54, prot: 5.2, carb: 2.2, fat: 2.5, unit: "1 bowl" },

    // --- Lunch / Dinner (Curries - Veg) ---
    { name: "Aloo Gobi", type: "Lunch", cal: 106, prot: 1.9, carb: 6, fat: 8, unit: "1 bowl" },
    { name: "Aloo Gobi", type: "Dinner", cal: 106, prot: 1.9, carb: 6, fat: 8, unit: "1 bowl" },
    { name: "Bhindi Masala", type: "Lunch", cal: 110, prot: 1.8, carb: 4.5, fat: 9, unit: "1 bowl" },
    { name: "Palak Paneer", type: "Lunch", cal: 186, prot: 7.6, carb: 9.6, fat: 13.5, unit: "1 bowl" },
    { name: "Palak Paneer", type: "Dinner", cal: 186, prot: 7.6, carb: 9.6, fat: 13.5, unit: "1 bowl" },
    { name: "Paneer Butter Masala", type: "Lunch", cal: 250, prot: 8, carb: 12, fat: 20, unit: "1 bowl" },
    { name: "Matar Paneer", type: "Lunch", cal: 135, prot: 6.6, carb: 9.3, fat: 7.7, unit: "1 bowl" },
    { name: "Mix Veg", type: "Lunch", cal: 89, prot: 3.7, carb: 8.4, fat: 4.4, unit: "1 bowl" },
    { name: "Baingan Bharta", type: "Dinner", cal: 65, prot: 1.4, carb: 4.4, fat: 4.5, unit: "1 bowl" },
    { name: "Malai Kofta", type: "Lunch", cal: 330, prot: 5, carb: 25, fat: 25, unit: "1 bowl" },

    // --- Lunch / Dinner (Non-Veg) ---
    { name: "Chicken Curry", type: "Lunch", cal: 129, prot: 11.8, carb: 3.4, fat: 7.6, unit: "1 bowl" },
    { name: "Chicken Curry", type: "Dinner", cal: 129, prot: 11.8, carb: 3.4, fat: 7.6, unit: "1 bowl" },
    { name: "Butter Chicken", type: "Lunch", cal: 240, prot: 15, carb: 8, fat: 18, unit: "1 bowl" },
    { name: "Tandoori Chicken", type: "Dinner", cal: 145, prot: 16.3, carb: 2.3, fat: 7.9, unit: "1 piece" },
    { name: "Fish Curry", type: "Lunch", cal: 111, prot: 8.8, carb: 3.8, fat: 6.7, unit: "1 bowl" },
    { name: "Fish Fry", type: "Lunch", cal: 250, prot: 15, carb: 5, fat: 20, unit: "1 piece" },
    { name: "Egg Curry", type: "Dinner", cal: 118, prot: 5.4, carb: 4.0, fat: 8.8, unit: "1 bowl" },
    { name: "Mutton Curry", type: "Lunch", cal: 180, prot: 12, carb: 5, fat: 14, unit: "1 bowl" },

    // --- Snacks ---
    { name: "Samosa", type: "Snack", cal: 250, prot: 3, carb: 24, fat: 15, unit: "1 piece" },
    { name: "Pakora (Mix Veg)", type: "Snack", cal: 280, prot: 4, carb: 20, fat: 20, unit: "1 plate" },
    { name: "Paneer Pakora", type: "Snack", cal: 340, prot: 12, carb: 15, fat: 25, unit: "100g" },
    { name: "Dhokla", type: "Snack", cal: 150, prot: 6, carb: 25, fat: 3, unit: "2 pieces" },
    { name: "Pani Puri", type: "Snack", cal: 100, prot: 2, carb: 18, fat: 2, unit: "6 pieces" },
    { name: "Bhel Puri", type: "Snack", cal: 200, prot: 5, carb: 35, fat: 5, unit: "1 plate" },
    { name: "Aloo Tikki", type: "Snack", cal: 275, prot: 4, carb: 32, fat: 14, unit: "2 pieces" },
    { name: "Vada Pav", type: "Snack", cal: 290, prot: 6, carb: 40, fat: 12, unit: "1 piece" },
    { name: "Chana Chaat", type: "Snack", cal: 150, prot: 8, carb: 20, fat: 4, unit: "1 bowl" },
    { name: "Roasted Makhana", type: "Snack", cal: 100, prot: 3, carb: 20, fat: 0.5, unit: "1 bowl" },
    { name: "Momos (Veg)", type: "Snack", cal: 180, prot: 4, carb: 35, fat: 3, unit: "6 pieces" },
    { name: "Momos (Chicken)", type: "Snack", cal: 220, prot: 10, carb: 30, fat: 6, unit: "6 pieces" },

    // --- Sweets / Desserts (Snacks) ---
    { name: "Gulab Jamun", type: "Snack", cal: 300, prot: 2, carb: 40, fat: 15, unit: "2 pieces" },
    { name: "Rasgulla", type: "Snack", cal: 200, prot: 4, carb: 45, fat: 1, unit: "2 pieces" },
    { name: "Besan Ladoo", type: "Snack", cal: 350, prot: 5, carb: 50, fat: 15, unit: "2 pieces" },
    { name: "Kheer", type: "Snack", cal: 200, prot: 6, carb: 30, fat: 8, unit: "1 bowl" },
    { name: "Gajar Halwa", type: "Snack", cal: 250, prot: 4, carb: 40, fat: 10, unit: "1 bowl" },
    { name: "Jalebi", type: "Snack", cal: 300, prot: 1, carb: 50, fat: 10, unit: "100g" }
];
