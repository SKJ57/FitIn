document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fitness-form');
    const resultsCard = document.getElementById('results-display');

    // Indian Food Database (~values per 100g or serving)
    // Load database from external file or defined variable
    // We assume indianFoodDatabase is loaded via <script src="indian_food_data.js"> in HTML
    // Or we can define it here if strict separation isn't needed. 
    // Since we added a new file, let's include it in HTML structure first, but for now I'll merge the logic here 
    // to ensure it works seamlessly without HTML edits if possible. 
    // ACTUALLY, I will assume I edit HTML to include the new script file, OR I can just paste the array here.
    // To keep it clean, I will use the array I just created.

    // Note: In a real app, we'd fetch this from a JSON file.
    let foodDB = [];
    // Fallback if file not loaded
    if (typeof indianFoodDatabase !== 'undefined') {
        foodDB = indianFoodDatabase;
    } else {
        // Fallback/inline definition if needed, but we will make sure to link the file.
        console.error("Database not loaded");
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Input Values
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const goal = document.getElementById('goal').value;

        // Validation
        if (!age || !weight || !height) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // 1. Calculate BMR (Mifflin-St Jeor Equation)
        let bmr;
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        // 2. Calculate TDEE
        let tdee = bmr * activity;

        // 3. Adjust for Goal
        let targetCalories;
        if (goal === 'cut') {
            targetCalories = tdee - 500;
        } else if (goal === 'bulk') {
            targetCalories = tdee + 300;
        } else {
            targetCalories = tdee;
        }

        targetCalories = Math.round(targetCalories);

        // 4. Calculate Macros
        let pRatio = 0.30;
        let cRatio = 0.40;
        let fRatio = 0.30;

        if (goal === 'bulk') {
            cRatio = 0.45; fRatio = 0.25;
        } else if (goal === 'cut') {
            pRatio = 0.40; cRatio = 0.30;
        }

        const proteinGrams = Math.round((targetCalories * pRatio) / 4);
        const carbsGrams = Math.round((targetCalories * cRatio) / 4);
        const fatsGrams = Math.round((targetCalories * fRatio) / 9);

        // Update UI
        updateResults(targetCalories, proteinGrams, carbsGrams, fatsGrams);
        generateDietPlan(targetCalories); // Pass calories, goal logic handled in calc
    });

    function updateResults(calories, p, c, f) {
        resultsCard.classList.remove('hidden');

        animateValue("target-calories", 0, calories, 1000);
        animateValue("protein-grams", 0, p, 1000, "g");
        animateValue("carbs-grams", 0, c, 1000, "g");
        animateValue("fats-grams", 0, f, 1000, "g");

        const totalMass = p + c + f;
        const pPct = totalMass > 0 ? (p / totalMass) * 100 : 0;
        const cPct = totalMass > 0 ? (c / totalMass) * 100 : 0;
        const fPct = totalMass > 0 ? (f / totalMass) * 100 : 0;

        document.querySelector('.protein .progress-bar div').style.width = `${pPct}%`;
        document.querySelector('.carbs .progress-bar div').style.width = `${cPct}%`;
        document.querySelector('.fats .progress-bar div').style.width = `${fPct}%`;

        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Helper for number animation
    function animateValue(id, start, end, duration, suffix = "") {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function generateDietPlan(targetCalories) {
        const dietContainer = document.getElementById('diet-plan');
        dietContainer.innerHTML = '';

        // Filter DB by meal type
        const breakfastItems = foodDB.filter(i => i.type === 'Breakfast');
        const lunchItems = foodDB.filter(i => i.type === 'Lunch');
        const snackItems = foodDB.filter(i => i.type === 'Snack');
        const dinnerItems = foodDB.filter(i => i.type === 'Dinner');

        const meals = [
            { type: 'Breakfast', calShare: 0.25, data: breakfastItems },
            { type: 'Lunch', calShare: 0.35, data: lunchItems },
            { type: 'Pre-Workout / Snack', calShare: 0.10, data: snackItems },
            { type: 'Dinner', calShare: 0.30, data: dinnerItems }
        ];

        meals.forEach(meal => {
            const mealTarget = targetCalories * meal.calShare;
            let currentCal = 0;
            let selectedItems = [];

            // Randomize options
            const shuffled = [...meal.data].sort(() => 0.5 - Math.random());

            for (let item of shuffled) {
                // Ensure we don't pick duplicates if possible, or just allow it
                // Check if adding this item keeps us within a reasonable upper bound
                if (currentCal + item.cal <= mealTarget + 150) {
                    selectedItems.push(item);
                    currentCal += item.cal;
                }
                if (currentCal >= mealTarget - 50) break;
            }

            if (selectedItems.length === 0 && shuffled.length > 0) selectedItems.push(shuffled[0]); // Fallback

            // Create UI HTML
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';

            let itemsHtml = selectedItems.map(item => `
                <div class="food-item">
                    <div>
                        <div class="food-name">${item.name}</div>
                        <div class="food-qty">${item.unit}</div>
                    </div>
                    <div>
                        <div class="food-cal">${item.cal} kcal</div>
                        <div style="font-size: 0.75rem; color: #888;">P: ${item.prot}g | C: ${item.carb}g | F: ${item.fat}g</div>
                    </div>
                </div>
            `).join('');

            mealCard.innerHTML = `
                <div class="meal-header">
                    <h3>${meal.type}</h3>
                    <small>Target: ${Math.round(mealTarget)} | Actual: ${Math.round(currentCal)} kcal</small>
                </div>
                <div class="meal-content">
                    ${itemsHtml}
                </div>
            `;

            dietContainer.appendChild(mealCard);
        });
    }
});
