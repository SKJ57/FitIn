import kagglehub
import os

# Download latest version
path = kagglehub.dataset_download("batthulavinay/indian-food-nutrition")

print("Path to dataset files:", path)

# List files in the downloaded directory
print("Files in dataset:")
for root, dirs, files in os.walk(path):
    for file in files:
        print(os.path.join(root, file))
