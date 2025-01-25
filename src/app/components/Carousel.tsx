import React from 'react'

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-t from-black to-gray-700">
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

                <img src='https://static.vecteezy.com/system/resources/previews/023/809/530/non_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg'
                  alt='burger 1'
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />

                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Classic Bites 
                </h3>
              </a>
            </div>

            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700'>
             <a href=''
             className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
              <img src='https://static.vecteezy.com/system/resources/thumbnails/028/249/206/small/pub-style-treat-bacon-cheese-burger-on-brioche-rustic-red-log-background-ai-generated-photo.jpg'
              alt='Burger 2'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Spicy Burger
                </h3>
              
             </a>
            


           <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
            <a href=''
            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
              <img src='https://static.vecteezy.com/system/resources/thumbnails/024/294/748/small_2x/hot-beef-burger-illustration-ai-generative-free-photo.jpg'
              alt='Burger 3'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Veggie Burger
                </h3>
              </a>

              <a href=''
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
               
               <img src='https://static.vecteezy.com/system/resources/thumbnails/039/617/751/small/ai-generated-grilled-beef-burger-with-cheese-tomato-and-gourmet-bread-generated-by-ai-free-photo.jpg'
              alt='Burger 3'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  cheesy Burger
                </h3>
              </a>
           </div>
           </div>
          
          <div className='col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
             <a href=''
             className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/023/185/162/small_2x/burger-with-flying-ingredients-on-a-black-background-concept-of-fast-food-ai-generative-image-free-photo.jpg'
                  alt='burger 5'
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />

                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Gourmet Burger 
                </h3>
             </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}