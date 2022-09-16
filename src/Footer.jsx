import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 border-t bg-white' style={{width:"100%"}}>
    <div className='footer px-12 py-4'>
       <div className="md:flex justify-between hidden">
             <div className="flex flex-wrap">
                 <p className='text-gray-500 text-sm px-2'>&copy; Airbnb Inc.</p>
                 <p className='text-gray-500 text-sm px-2'>.Privacy</p>
                 <p className='text-gray-500 text-sm px-2'>.Terms</p>
                 <p className='text-gray-500 text-sm px-2'>.Sitemap</p>
                 <p className='text-gray-500 text-sm px-2'>.Company details</p>
                 <p className='text-gray-500 text-sm px-2'>.Destinations</p>
             </div>
             <div className="flex flex-wrap">
             <p className='text-black-700 text-sm px-2'><i class="fa-solid fa-globe"></i> English(IN),</p>
             <p className='text-black-700 text-sm px-2'>&#8377; INR</p>
             <p className='text-black-700 text-sm px-2 underline'>Support&Resources</p>
             </div>
       </div>
       <div className="md:hidden">
          <div className="flex justify-center items-center flex-col">
            <div className="flex">
              <p className="text-3xl px-12"><i class="fa-solid fa-magnifying-glass"></i></p>
              <p className="text-3xl px-12"><i class="fa-regular fa-heart"></i></p>
              <p className="text-3xl px-12"><i class="fa-solid fa-user"></i></p>
              </div>
              <div className="text flex text-center">
                <p className='px-10 text-sm text-gray-500'>Explore</p>
                <p className='px-10 text-sm text-gray-500'>Wishlists</p>
                <p className='px-10 text-sm text-gray-500'>Login</p>
              </div> 
          </div>
    </div>
    </div>
    
    </footer>
  )
}

export default Footer
