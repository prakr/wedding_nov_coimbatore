#!/bin/bash

# Download Love Letter Venue Images from Darza Resorts
# This script downloads venue images to the assets/images folder

echo "🎊 Downloading Love Letter Venue Images from Darza Resorts..."
echo ""

# Create images directory if it doesn't exist
mkdir -p assets/images

# Image URLs array
declare -a urls=(
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(2)_0beb153e"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(6)_a694fce8"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(7)_e2f102e3"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(3)_589a6a6d"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(5)_0936ac2f"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(1)_124cc5f5"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3753/x_0,y_470,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(8)_c81b8e60"
    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/Love_Letter_(4)_1628cd89"
)

# Download each image
counter=1
for url in "${urls[@]}"
do
    echo "📥 Downloading image $counter of ${#urls[@]}..."
    curl -s -o "assets/images/love-letter-$counter.jpg" "$url"

    if [ $? -eq 0 ]; then
        echo "✅ Saved: assets/images/love-letter-$counter.jpg"
    else
        echo "❌ Failed to download image $counter"
    fi

    counter=$((counter+1))
    echo ""
done

echo "🎉 Download complete! Images saved to assets/images/"
echo ""
echo "You now have ${#urls[@]} beautiful photos of the Love Letter venue!"
echo "You can use these in your wedding website or presentations."
