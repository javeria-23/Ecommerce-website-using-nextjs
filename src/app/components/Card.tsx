
import React from 'react'

const FloatingImageContaintBlock = () => {
  return(
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>

    <div className='md:w-1/2 md:pr-10'>
    <h2 className='text-3xl font-bold mb-4 text-orange-400 text-center '> Delicious Burger </h2>
    <p className='text-white mb-4'> Experience the juiciest burgers in town, made with fresh ingredients</p>
    <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>Order Now</button>
     
     <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-orange-400'> Coming Soon: Our New Burger Launches</h3>
    
    <ul className='text-white'>
      <li> <strong>Cheesy BBQ Bacon Burger: </strong>A mouthwatering blend of cheddar cheese, crispy bacon and BBQ. </li>
      <br />

      <li> <strong>Spicy Jalapeno Burger: </strong>A fiery delight topped with fresh jalapeons and zesty chipotle mayo. </li>
      <br />

      <li> <strong>Mashroom Swiss Burger: </strong>A juicy beef patty melted Swiss cheese for a rich , savory taste. </li>
      <br />

      <li> <strong>Avacado Veggie Burger: </strong>A delicious plant-based option featuring a grilled veggie patty. </li>
      <br />

      <li> <strong>Buffalo Chicken Burger: </strong>Spicy chicken  breast tossed in spicy buffalo sauce </li>
      <br />
    </ul>
    </div>

     <div className='md:w-1/2 mt-6 md:mt-0'>
     <img src='https://static.vecteezy.com/system/resources/thumbnails/038/811/126/small/ai-generated-beautiful-background-for-beef-burger-advertising-free-photo.jpeg'
     alt='delicious burger'
     className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'
     />
     

    </div>
    </section>
  )
}

export default FloatingImageContaintBlock;