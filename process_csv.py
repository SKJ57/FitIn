import csv
import json
import random
import sys

# Log to file
log_file = open("debug_log.txt", "w", encoding="utf-8")
def log(msg):
    log_file.write(msg + "\n")
    log_file.flush()

csv_file = 'Indian_Food_Nutrition_Processed.csv'
js_file = 'indian_food_data.js'

log("Starting script...")

def categorize_food(name):
    # Simple heuristic to categorize food
    name_lower = name.lower()
    if any(x in name_lower for x in ['tea', 'coffee', 'shake', 'biscuit', 'sandwich', 'toast', 'dhokla', 'chaat', 'samosa', 'pakora']):
        return 'Snack'
    elif any(x in name_lower for x in ['paratha', 'poha', 'upma', 'dosa', 'idli', 'omelette', 'egg', 'pancake', 'porridge']):
        return 'Breakfast'
    elif any(x in name_lower for x in ['dal', 'rice', 'curry', 'roti', 'chapati', 'fettuccine', 'pasta', 'biryani', 'pulao', 'khichdi', 'chicken', 'mutton', 'fish', 'paneer']):
        return 'Lunch' # Can be Lunch or Dinner, we'll assign randomly or use logic
    else:
        return 'Dinner' # Default fallback

# Read CSV
foods = []
try:
    log(f"Reading from {csv_file}...")
    # Use latin-1 to avoid encoding errors on Windows if file is not utf-8
    with open(csv_file, mode='r', encoding='latin-1') as file:
        reader = csv.DictReader(file)
        row_count = 0
        for row in reader:
            row_count += 1
            try:
                # Extract and clean data
                name = row['Dish Name'].strip()
                # Handle potential empty strings or bad conversions
                cal_str = row.get('Calories (kcal)', '0')
                prot_str = row.get('Protein (g)', '0')
                carb_str = row.get('Carbohydrates (g)', '0')
                fat_str = row.get('Fats (g)', '0')
                
                cal = float(cal_str) if cal_str else 0
                prot = float(prot_str) if prot_str else 0
                carb = float(carb_str) if carb_str else 0
                fat = float(fat_str) if fat_str else 0
                
                # Assign type
                food_type = categorize_food(name)
                
                if food_type == 'Lunch':
                    foods.append({
                        "name": name,
                        "type": "Lunch",
                        "cal": round(cal),
                        "prot": round(prot, 1),
                        "carb": round(carb, 1),
                        "fat": round(fat, 1),
                        "unit": "100g"
                    })
                    foods.append({
                        "name": name,
                        "type": "Dinner",
                        "cal": round(cal),
                        "prot": round(prot, 1),
                        "carb": round(carb, 1),
                        "fat": round(fat, 1),
                        "unit": "100g"
                    })
                else:
                    foods.append({
                        "name": name,
                        "type": food_type,
                        "cal": round(cal),
                        "prot": round(prot, 1),
                        "carb": round(carb, 1),
                        "fat": round(fat, 1),
                        "unit": "100g"
                    })

            except ValueError as ve:
                log(f"Skipping row {row_count}: {ve}")
                continue # Skip rows with bad data
        
        log(f"Processed {row_count} rows.")

    # Write to JS file
    log(f"Writing to {js_file}...")
    js_content = f"// Generated from {csv_file}\nconst indianFoodDatabase = {json.dumps(foods, indent=4)};\n"
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    log(f"Successfully converted {len(foods)} items to {js_file}")

except Exception as e:
    log(f"Error: {e}")
finally:
    log_file.close()
