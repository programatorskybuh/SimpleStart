import React, { forwardRef } from 'react';

import mailImg from '../img/mail.svg';
import phoneImg from '../img/phone.svg';
import mapImg from '../img/map.svg';

const Kontakty = forwardRef((props, ref) =>{

    return(
      <section ref={ref} className='h-full bg-secondary text-text flex flex-col items-center'>
        <div className='text-center w-9/12'>
          <h1 className='font-semibold text-5xl m-10'>Kontakty</h1>
          <p className='font-semibold text-xl'>Máme rádi osobní spojení! Navštivte nás na naší adrese a promluvte si s naším týmem o tom, jak můžeme společně posunout váš digitální image vpřed. Alternativně nás můžete kontaktovat telefonicky nebo prostřednictvím e-mailu a rádi vám poskytneme veškeré informace ohledně našich služeb a spolupráce.</p>
          <div className='flex flex-col xl:flex-row justify-between my-10'>
            <div className='font-semibold text-2xl flex flex-col gap-10 justify-center'>
              <div className='flex flex-col xl:flex-row xl:gap-6 gap-3 items-center justify-center xl:justify-start'>
                <img src={mailImg} alt='mail' />
                <p>simplestartsro@gmail.com</p>
              </div>
              <div className='flex flex-col xl:flex-row xl:gap-6 gap-3 items-center justify-center xl:justify-start'>
                <img src={phoneImg} alt='phone' />
                <p>+420 776 348 106</p>
              </div>
              <div className='flex flex-col xl:flex-row xl:gap-6 gap-3 items-center justify-center xl:justify-start'>
                <img src={mapImg} alt='map' />
                <p>Olonkinbyen<br/>8099, Jan Mayen</p>
              </div>
            </div>
            <iframe className='xl:w-[600px] xl:h-[450px] h-[400px] my-5 xl:my-0' title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333727.45762882615!2d-9.144107063923613!3d70.92913162642576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f4503c0d48cfe05%3A0x81a5cda944176e23!2sOlonkinbyen%208099%2C%20Jan%20Mayen!5e0!3m2!1scs!2scz!4v1703696721107!5m2!1scs!2scz" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    );
  });

  export default Kontakty;