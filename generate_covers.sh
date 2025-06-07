#!/bin/bash

# Generate cover images for all folders with README.md files
# Uses random gradients and extracts titles from README files

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "sudo apt-get install imagemagick"
    exit 1
fi

# Array of gradient color combinations for variety
gradients=(
    "#FF6B6B:#4ECDC4"     # Red to Teal
    "#667eea:#764ba2"     # Blue to Purple
    "#f093fb:#f5576c"     # Pink to Red
    "#4facfe:#00f2fe"     # Light Blue to Cyan
    "#43e97b:#38f9d7"     # Green to Mint
    "#fa709a:#fee140"     # Pink to Yellow
    "#a8edea:#fed6e3"     # Mint to Pink
    "#ff9a9e:#fecfef"     # Coral to Light Pink
    "#a18cd1:#fbc2eb"     # Purple to Pink
    "#ffecd2:#fcb69f"     # Cream to Peach
    "#ff8a80:#ea80fc"     # Light Red to Purple
    "#8fd3f4:#84fab0"     # Sky Blue to Green
)

# Function to extract title from README.md
get_title_from_readme() {
    local readme_path="$1"
    local title
    
    # Try to get title from first # heading
    title=$(grep -m 1 "^# " "$readme_path" | sed 's/^# //' | sed 's/Test: //')
    
    # If no title found, use directory name
    if [[ -z "$title" ]]; then
        title=$(basename "$(dirname "$readme_path")")
    fi
    
    echo "$title"
}

# Function to generate cover image
generate_cover() {
    local folder_path="$1"
    local readme_path="$folder_path/README.md"
    local cover_path="$folder_path/cover.jpg"
    
    if [[ ! -f "$readme_path" ]]; then
        echo "No README.md found in $folder_path"
        return
    fi
    
    local title
    title=$(get_title_from_readme "$readme_path")
    
    # Get a random gradient
    local gradient_index=$((RANDOM % ${#gradients[@]}))
    local gradient="${gradients[$gradient_index]}"
    local color1=$(echo "$gradient" | cut -d':' -f1)
    local color2=$(echo "$gradient" | cut -d':' -f2)
    
    echo "Generating cover for: $folder_path"
    echo "  Title: $title"
    echo "  Colors: $color1 to $color2"
    
    # Create the cover image with proper gradient syntax
    convert -size 1200x630 \
        -define gradient:direction=NorthWest \
        gradient:"$color1-$color2" \
        -gravity center \
        -font "DejaVu-Sans-Bold" \
        -pointsize 72 \
        -fill white \
        -stroke black \
        -strokewidth 2 \
        -annotate +0-50 "$title" \
        -font "DejaVu-Sans" \
        -pointsize 24 \
        -fill white \
        -stroke black \
        -strokewidth 1 \
        -annotate +0+50 "Docsify Frontmatter OpenGraph Plugin" \
        "$cover_path"
    
    if [[ $? -eq 0 ]]; then
        echo "  ✅ Created: $cover_path"
    else
        echo "  ❌ Failed to create: $cover_path"
    fi
    echo
}

# Find all directories with README.md and generate covers
echo "🎨 Generating cover images for all folders..."
echo

# Root directory
if [[ -f "README.md" ]]; then
    generate_cover "."
fi

# All subdirectories with README.md
find . -name "README.md" -not -path "./README.md" | while read -r readme_file; do
    folder_path=$(dirname "$readme_file")
    generate_cover "$folder_path"
done

echo "🎉 Cover image generation complete!"
echo
echo "Generated covers can be used as:"
echo "- Social sharing images via front-matter: image: ./cover.jpg"
echo "- Fallback images when no specific image is provided"
echo "- Visual navigation aids in the documentation"
