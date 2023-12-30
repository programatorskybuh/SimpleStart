import React, { forwardRef } from 'react';

import produktyImg from '../img/produktybg.svg';

const Produkty = forwardRef((props, ref) => {
    return(
      <div ref={ref} style={{backgroundImage: `url(${produktyImg})`}} className='h-screen bg-secondary w-full text-center bg-contain bg-center bg-no-repeat text-text'>
        <div className='p-10'>
          <h2 className='text-3xl xl:text-5xl p-2'>Firma je pouhým <span className='text-primary font-semibold'>začátkem!</span></h2>
          <p className='text-xl xl:text-2xl'>Vizionářská síla v digitálním prostředí, kde se vydáváme<br/>na cestu k novému vymezení vaší online prezentace.</p>
        </div>
        <div className='flex justify-center'>
          <div className='w-7/12'>
            <div className='w-full xl:mt-12 flex xl:justify-end justify-center'> 
              <div className='w-96 xl:mr-10'>
                <h3 className='xl:text-3xl text-primary font-bold'>Web-design</h3>
                <p className='xl:text-2xl'>Vdechneme život vaší digitální vizi prostřednictvím strategického vývoje webu.</p>
              </div>
            </div>
            <div className='w-full mt-60 xl:mt-52 flex justify-center xl:justify-start'>
              <div className='w-96'>
                <h3 className='xl:text-3xl text-primary font-bold'>Sociální média</h3>
                <p className='xl:text-2xl'>Zlepšete online prezentaci své značky díky zkušenostem společnosti SimpleStart v oblasti sociálních médií.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default Produkty;