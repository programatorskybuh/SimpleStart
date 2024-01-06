import React, { forwardRef, useEffect, useState } from 'react';

import lineImg from '../img/line.svg';
import gallery1 from '../img/gallery1.svg';
import gallery2 from '../img/gallery2.svg';
import gallery3 from '../img/gallery3.svg';
import gallery4 from '../img/gallery4.svg';
import gallery5 from '../img/gallery5.svg';
import gallery6 from '../img/gallery6.svg';
import gallery7 from '../img/gallery7.svg';
import gallery8 from '../img/gallery8.svg';
import gallery9 from '../img/gallery9.svg';

const Galerie = forwardRef((props, ref) =>{
  const [selected, setSelected] = useState();
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    if(selected) setIsOverlay(true);
    console.log(selected);
  }, [selected])
  

    return(
      <section ref={ref} className='h-full bg-secondary flex flex-col items-center relative'>
        <h1 className='text-5xl mt-24 flex gap-4'>Naše <div><span className='text-primary font-semibold'>projekty</span><img className='pt-1' src={lineImg} alt='line'/></div></h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-5 gap-4 w-3/4'>
          <img onClick={() => setSelected(gallery1)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery1} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery2)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery2} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery3)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery3} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery4)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery4} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery5)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery5} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery6)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery6} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery7)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery7} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery8)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery8} alt='Obrázek'/>
          <img onClick={() => setSelected(gallery9)} className='w-auto filter grayscale hover:filter-none hover:scale-105 transition cursor-pointer' src={gallery9} alt='Obrázek'/>
        </div>
        {isOverlay &&(<div className='fixed flex justify-center bg-gray-700 w-full h-screen top-0 left-0 z-50 text-white'>
          <button onClick={() => {setIsOverlay(false); setSelected();}} className='right-0 absolute m-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          <img className='w-10/12' src={selected} alt='Obrázek'/>
        </div>)}
      </section>
    );
  });

  export default Galerie;