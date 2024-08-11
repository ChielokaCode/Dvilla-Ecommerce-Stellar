import React from 'react';
import { Suspense, lazy } from 'react';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
// import FoodGrid from '@/components/food-grid/FoodGrid';


const FoodGrid = lazy(() => import('@/components/food-grid/FoodGrid'));
const foodItems = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="flex justify-center text-center text-black text-2xl">Loading...</div>}>
      <FoodGrid />
      </Suspense>
      <Footer/>
      </>
  )
}

export default foodItems;