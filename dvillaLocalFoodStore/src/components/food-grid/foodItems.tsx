// Define a sample list of food items
import OrganicApple from "/public/assests/image/organic-apples.jpg";
import FreeRangeEggs from "/public/assests/image/free-range-eggs.jpg";
import CherryTomatoes from "/public/assests/image/cheery-tomatoes.jpg";
import Kale from "/public/assests/image/kale.png";
import GrassFedBeef from "/public/assests/image/grass-fed-beef.jpg";
import LocalHoney from "/public/assests/image/local-honey.jpg";
import ArtisanBread from "/public/assests/image/artisan-bread.jpg";
import OrganicCarrot from "/public/assests/image/organic-carrot.jpg";
import HomemadeJam from "/public/assests/image/homemade-jam.jpg";
import FreshBasil from "/public/assests/image/fresh-basil.jpg";
import SweetCorn from "/public/assests/image/sweet-corn.jpg";
import BlueBerries from "/public/assests/image/blueberries.jpeg";



const foodItems = [
    {
      id: 1,
      name: 'Organic Apple',
      price: '2.99',
      description: 'Fresh and organic apples from local farms.',
      image: OrganicApple, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 2,
      name: 'Free-Range Eggs',
      price: '3.49',
      description: 'Farm-fresh eggs with rich taste and high quality.',
      image: FreeRangeEggs, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 3,
      name: 'Cherry Tomatoes',
      price: '4.99',
      description: 'Juicy cherry tomatoes perfect for salads or snacks.',
      image: CherryTomatoes, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 4,
      name: 'Kale',
      price: '2.49',
      description: 'Nutritious kale, great for salads and smoothies.',
      image: Kale, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 5,
      name: 'Grass-Fed Beef',
      price: '8.99',
      description: 'High-quality beef from grass-fed cattle.',
      image: GrassFedBeef, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 6,
      name: 'Local Honey',
      price: '6.99',
      description: 'Delicious honey from local bees.',
      image: LocalHoney, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 7,
      name: 'Artisan Bread',
      price: '4.29',
      description: 'Freshly baked artisan bread with a crispy crust.',
      image: ArtisanBread, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 8,
      name: 'Organic Carrots',
      price: '3.79',
      description: 'Sweet and crunchy organic carrots.',
      image: OrganicCarrot, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 9,
      name: 'Homemade Jam',
      price: '5.49',
      description: 'Delicious homemade jam with seasonal fruits.',
      image: HomemadeJam, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 10,
      name: 'Fresh Basil',
      price: '2.99',
      description: 'Fragrant fresh basil, perfect for cooking and garnishing.',
      image: FreshBasil, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 11,
      name: 'Sweet Corn',
      price: '3.29',
      description: 'Sweet and tender corn, perfect for summer grilling.',
      image: SweetCorn, // Replace with actual image URL
      quantity: 4
    },
    {
      id: 12,
      name: 'Organic Blueberries',
      price: '5.99',
      description: 'Fresh and juicy organic blueberries.',
      image: BlueBerries, // Replace with actual image URL
      quantity: 4
    }
  ];

  export default foodItems;