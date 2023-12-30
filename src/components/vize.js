import React, { forwardRef } from 'react';

import vizeImg from '../img/vize.svg';
import logovizeImg from '../img/logovize.svg';

const Vize = forwardRef((props, ref) =>{
    return(
      <section ref={ref} className='h-full bg-secondary text-5xl text-text flex flex-col justify-center items-center'>     
        <div className='m-5'>
          <h1 className='flex flex-col xl:flex-row gap-3 items-center'>Kdo stojí za <span className='font-bold flex items-center'>Simple<img src={logovizeImg} alt='logo' />Start</span></h1>    
        </div>
        <div className='w-11/12 flex flex-col xl:flex-row justify-center items-center text-2xl'>
          <div className='xl:w-1/2 w-full h-full flex flex-col justify-evenly'>
            <p className='p-2 text-center xl:p-0 xl:text-left'>Vítejte ve světě, kde se inovace setkávají s dokonalostí - vítejte ve společnosti <span className='text-primary font-medium'>SimpleStart!</span></p>
            <p className='p-2 text-center xl:p-0 xl:text-left'>Ve společnosti SimpleStart jsme <span className='text-primary'>architekty</span> vašeho digitálního <span className='text-primary'>úspěchu</span>. Jako dynamická startupová společnost se specializujeme na tvorbu webových stránek a optimalizaci strategií sociálních médií, které vaši značku vynesou do nových výšin. Náš specializovaný tým odborníků je poháněn <span className='text-primary'>inovacemi</span>, <span className='text-primary'>spoluprací</span> a <span className='text-primary'>vášní pomáhat</span> firmám prezentovat se ve stále se vyvíjejícím online prostředí.</p>
          </div>
          <div className='xl:w-1/2 w-full flex justify-center items-center'>
            <img src={vizeImg} alt='Naše vize' />
          </div>
        </div>
      </section>
    );
  });

  export default Vize;