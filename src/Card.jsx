import React, { useState } from 'react'

const Card = ({img1,img2,img3,img4,text}) => {
    const [id,setId]=useState(1);
    const [active,setActive]=useState(1)
    const prevSlideHandler=()=>{
         if(id==1){
            setActive(4);
            setId(4)
         }
         else if(id>1){
            setActive(active-1)
            setId(id-1)
         }
         else{
            setActive(4)
            setId(4)
         }
    }
    const nextSlideHandler=()=>{
        if(id==4){
            setActive(1);
            setId(1)
         }
         else if(id<4){
            setActive(active+1)
            setId(id+1)
         }
         else{
            setActive(4)
            setId(4)
         }
    }
  return (
    
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
       <div className="relative"> 
      <img
        width={"100%"}
        style={{height:"20vw"}}
        src={active==1?img1:active==2?img2:active==3?img3:img4}
        className="object-cover rounded card_img"
        alt="Sunset in the mountains"
      />

      <i class="fa-solid fa-circle-arrow-left absolute cursor-pointer" onClick={prevSlideHandler}></i>
      <i class="fa-solid fa-circle-arrow-right absolute cursor-pointer" onClick={nextSlideHandler}></i>
      </div> 
      <div class="px-6 py-4">
        <div class="font-semibold text-sm mb-2 flex justify-between">
            {text.length>27?text.substr(0,20)+"...":text}
            <p><i class="fa-solid fa-star"></i>4.8</p>
            </div>
        <p class="text-gray-700 text-base">
          4726 kilometeres
        </p>
        <p class="text-gray-700 text-base">
          3-8oct
        </p>
        <p class="text-black-700 text-base font-bold">
        &#8377;5496 <span className='text-gray-700 font-light'>night</span>
        </p>
      </div>
    </div>
  )
}

export default Card
