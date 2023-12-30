
import React, { Suspense, forwardRef, useEffect, useRef, useState } from 'react';

import whiteLogoImg from './img/white_logo.svg';
import fbImg from './img/facebook.svg';
import igImg from './img/instagram.svg';


const Uvod = React.lazy(() => import('./components/uvod'));
const Produkty = React.lazy(() => import('./components/produkty'));
const Onas = React.lazy(() => import('./components/onas'));
const Vize = React.lazy(() => import('./components/vize'));
const Galerie = React.lazy(() => import('./components/galerie'));
const Dotaznik = React.lazy(() => import('./components/dotaznik'));
const Kontakty = React.lazy(() => import('./components/kontakty'));

export default function Main() {
  const uvodRef = useRef(null);
  const produktyRef = useRef(null);
  const onasRef = useRef(null);
  const galerieRef = useRef(null);
  const kontaktyRef = useRef(null);

  function handleScroll(ref){
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    else console.error("ref error");
  }

  return(
    <div className='font-poppins overflow-x-hidden'>  
      <Suspense fallback={<div className='text-center text-7xl p-10'>Loading...</div>}>
        <Navbar toOnas={() => handleScroll(onasRef)} toGalerie={() => handleScroll(galerieRef)} toProdukty={() => handleScroll(produktyRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
        <Uvod ref={uvodRef}/>   
        <Produkty ref={produktyRef}/>
        <Onas ref={onasRef} />
        <Vize />
        <Galerie ref={galerieRef}/>
        <Dotaznik />
        <Kontakty ref={kontaktyRef} />
        <Footer />
      </Suspense>    
    </div>
  );
}

function Navbar({toOnas, toGalerie, toProdukty, toKontakty}){
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if(currentScrollPos < 400){
      setIsScrollingUp(true);
      setPrevScrollPos(currentScrollPos);
      return;
    }
    setIsScrollingUp(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);

    if(setIsScrollingUp) setShowNav(false);
  };

  function toggleNav(){
    setShowNav(!showNav);
  }

  return(
    <>
      <nav className={`w-full ${!isScrollingUp ? '-translate-y-full' : 'translate-y-0'} z-50 xl:py-5 py-2 transition-all fixed flex justify-center bg-primary`}>
      <div className='w-10/12 flex items-center justify-between'>
        <img className='cursor-pointer xl:w-auto w-10' src={whiteLogoImg} alt='logo'/>
        <div className='text-white text-xl hidden xl:flex gap-20 items-center'>
          <div className='flex items-center gap-5'>
            <a onClick={toOnas} className='cursor-pointer'>O nás</a>
            <a onClick={toGalerie} className='cursor-pointer'>Galerie</a>
            <a onClick={toProdukty}className='cursor-pointer'>Služby</a>
            <a onClick={toKontakty}className='cursor-pointer'>Kontakt</a>
            <a className='cursor-pointer'>Více</a>
          </div>
          <button className='bg-[#6394A8] rounded-full py-3 px-8'>Objednat</button>
        </div>        
          <button onClick={toggleNav} className='xl:hidden block'><svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>              
      </div>
    </nav>
    <div className={`lg:hidden fixed w-full right-0 top-0 mt-16 transition duration-300  ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
    {showNav && (
      <div className={`text-white flex gap-3 flex-col bg-primary text-xl  text-center p-5`}>
        <a onClick={toOnas} className='cursor-pointer'>O nás</a>
        <a onClick={toGalerie} className='cursor-pointer'>Galerie</a>
        <a onClick={toProdukty} className='cursor-pointer'>Služby</a>
        <a onClick={toKontakty} className='cursor-pointer'>Kontakt</a>
      </div>)}
    </div>
    </>
  );
}

function Footer(){
  return(
    <footer className='bg-primary text-white flex justify-center'>
      <div className='w-10/12 m-16 mb-0'>
        <div className='text-sm flex flex-col xl:flex-row items-center xl:items-start xl:gap-0 gap-10 justify-between'>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>SimpleStart</h3>
            <p>Úvod</p>
            <p>Produkty/Služby</p>
            <p>O nás</p>
            <p>Naše vize</p>
          </div>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>Další</h3>
            <p>Galerie</p>
            <p>Dotazník</p>
            <p>Kontakty</p>
          </div>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>Sociální sítě</h3>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>Odebírat</h3>
            <p>Odebírejte náš newsletter aby vám nic neuniklo.<br/><span className='flex items-center'>Odebírejte Simple<img className='w-[20px]' src={whiteLogoImg} alt='logo'/>Start.</span></p>
            <div className='flex gap-4'>
              <input type='email' placeholder='Vaše e-mailová adresa' className='rounded-xl px-3 text-black' />
              <input type='submit' value={"Odebírat"} className='text-black bg-white py-4 px-6 rounded-xl font-bold' />
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='font-light text-xs my-6'>© 2023 SimpleStart - Všechna práva vyhrazena.</p>
          <div className='flex gap-4'>
            <img src={fbImg} alt='facebook'/>
            <img src={igImg} alt='instagram'/>
          </div>
        </div>
      </div>
    </footer>
  );
}