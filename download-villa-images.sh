#!/bin/bash

echo "🏡 Downloading Luxury Group Stay Villa Images from Darza Resorts..."
echo ""

cd assets/images

# Exterior & Overview
echo "📥 Downloading villa exterior 1..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2837/x_0,y_12,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-166_enzhqi" -o villa-exterior-1.jpg
echo "✅ Saved: assets/images/villa-exterior-1.jpg"

echo "📥 Downloading villa exterior 2..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-055_etz4is" -o villa-exterior-2.jpg
echo "✅ Saved: assets/images/villa-exterior-2.jpg"

# Living & Dining Spaces
echo "📥 Downloading outdoor dining area..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-142_tv1foc" -o villa-dining.jpg
echo "✅ Saved: assets/images/villa-dining.jpg"

echo "📥 Downloading living area..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-104_fc3anu" -o villa-living.jpg
echo "✅ Saved: assets/images/villa-living.jpg"

echo "📥 Downloading lounge area..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-094_woxv5h" -o villa-lounge.jpg
echo "✅ Saved: assets/images/villa-lounge.jpg"

echo "📥 Downloading pool table area..."
curl -s "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/darza-resorts/DARZA_ROOMS-103_fnw1oh" -o villa-pool-table.jpg
echo "✅ Saved: assets/images/villa-pool-table.jpg"

cd ../..

echo ""
echo "🎉 Download complete! 6 luxury villa photos saved to assets/images/"
echo ""
echo "Villa features captured:"
echo "  • Exterior views (2 photos)"
echo "  • Outdoor dining area"
echo "  • Living room"
echo "  • Lounge area"
echo "  • Entertainment space with pool table"
