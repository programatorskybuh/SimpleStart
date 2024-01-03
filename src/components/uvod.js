import React, { forwardRef } from 'react';

import uvodImg from '../img/uvod.svg';
import figmaImg from '../img/figma.svg';
import htmlImg from '../img/html.svg';
import psImg from '../img/ps.svg';
import vscodeImg from '../img/vscode.svg';

const Uvod =  forwardRef((props, ref) => {
  
    return (
      <div ref={ref} className="flex flex-col-reverse lg:flex-row items-center justify-evenly grow-0 bg-primary h-full lg:h-screen pt-16 xl:p-0">
        <div className='text-white gap-10 flex flex-col text-center lg:items-start lg:text-left items-center p-5' >
            <h1 className="text-6xl leading-normal text-wrap font-bold">Inovace, spolupráce,<br/>dokonalost</h1>
            <p className='text-xl'>To je <span className='font-bold'>SimpleStart</span>! Vaše brána k digitální excelenci,<br/>kde se inovace setkávají se světem!</p>
            <div className='flex gap-5 justify-center xl:justify-start'>
                <img className='w-2/12 xl:w-auto hover:scale-110 transition' src={vscodeImg} alt='vscode' />
                <img className='w-2/12 xl:w-auto hover:scale-110 transition' src={figmaImg} alt='figma' />
                <img className='w-2/12 xl:w-auto hover:scale-110 transition' src={htmlImg} alt='html' />
                <img className='w-2/12 xl:w-auto hover:scale-110 transition' src={psImg} alt='photoshop'/>
            </div>
            <button className="bg-button rounded-full py-4 px-8 text-xl">Objednat</button>
        </div>
        <div>
            <img loading='lazy' src={uvodImg} alt='Uvodni obrazek' className='p-6' />
        </div>
      </div>
    );
});

export default Uvod;