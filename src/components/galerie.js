import React, { forwardRef } from 'react';

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
    return(
      <section ref={ref} className='h-full bg-secondary flex flex-col items-center'>
        <h1 className='text-5xl mt-24 flex gap-4'>Naše <div><span className='text-primary font-semibold'>projekty</span><img className='pt-1' src={lineImg} alt='line'/></div></h1>
        <div className='grid grid-cols-1 xl:grid-cols-3 m-5 gap-4 w-3/4'>
          <img className='w-auto hover:scale-105 transition' src={gallery1} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery2} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery3} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery4} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery5} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery6} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery7} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery8} alt='Obrázek'/>
          <img className='w-auto hover:scale-105 transition' src={gallery9} alt='Obrázek'/>
        </div>
      </section>
    );
  });

  export default Galerie;