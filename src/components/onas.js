import React, { forwardRef, useEffect } from 'react';

import onasImg from '../img/onas.svg';
import calekImg from '../img/calek.svg';
import jelinekImg from '../img/jelinek.svg';
import poustkaImg from '../img/poustka.svg';

const Onas = forwardRef((props, ref) => {

    return(
      <div ref={ref} className='h-full bg-secondary flex flex-col w-full justify-center items-center text-2xl gap-10 p-5 xl:pt-24'>
        <div className='flex flex-col xl:flex-row w-full'>
          <div className='flex flex-col justify-between xl:w-1/3 w-full p-10 xl:pl-24'>
            <div className='flex flex-col gap-5'>
              <h3 className='text-3xl'>Tým <span className='text-primary font-bold'>SimpleStart</span></h3>
              <p>Náš tým tvoří 3 profesionální designéři a vývojáři.</p>
            </div>
            <div className='flex flex-col'>
              <p>Tomáš Jelínek - <span className='text-primary'>vývojář</span></p>
              <p>Lukáš Poustka - <span className='text-primary'>designer</span></p>
              <p>Petr Čálek - <span className='text-primary'>marketing</span></p>
              <button className='bg-primary text-white rounded-full px-8 py-4 self-center xl:self-end'>Číst více</button>
            </div>
          </div>
          <div data-aos="fade-left" className='xl:w-2/3 w-full flex justify-center'><img  src={onasImg} alt='O nás' /></div>
        </div>
        <div className='flex flex-col xl:flex-row items-center w-full'>
          <div className='xl:w-1/3 w-full p-10 flex flex-col justify-between gap-5 self-start xl:pl-24'>
            <h3 className='text-3xl'>Tohle jsme <span className='text-primary'>my</span></h3>
            <p>Podívej se na členy našeho týmu, každý z nás je vymaxovaný v jiném odvětví naší práce a každý ti nabídne to nejlepší!</p>
          </div>
          <div className='flex flex-col items-center w-2/3'>
            <div className='xl:w-[1035px] flex flex-col xl:flex-row justify-between gap-6'>
              <img data-aos="fade-up" src={calekImg} alt='Čáleček'/>
              <img data-aos="fade-up" data-aos-delay="100" src={jelinekImg} alt='Jelíneček'/>
              <img data-aos="fade-up" data-aos-delay="200" src={poustkaImg} alt='Poustíček'/>
            </div>
            <button className='text-sm text-white bg-primary rounded-full m-5 px-8 py-2'>Zobrazit více</button>
          </div>
        </div>
      </div>
    );
  });

export default Onas;