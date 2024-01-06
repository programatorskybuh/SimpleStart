
import React, { Suspense, useEffect, useRef, useState, forwardRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import whiteLogoImg from './img/white_logo.svg';
import fbImg from './img/facebook.svg';
import igImg from './img/instagram.svg';
import loadingImg from './img/loading.svg';

const Uvod = React.lazy(() => import('./components/uvod'));
const Produkty = React.lazy(() => import('./components/produkty'));
const Onas = React.lazy(() => import('./components/onas'));
const Vize = React.lazy(() => import('./components/vize'));
const Galerie = React.lazy(() => import('./components/galerie'));
const Dotaznik = React.lazy(() => import('./components/dotaznik'));
const Kontakty = React.lazy(() => import('./components/kontakty'));

const Poustka = React.lazy(() => import('./components/poustka'));
const Calek = React.lazy(() => import('./components/calek'));
const Jelinek = React.lazy(() => import('./components/jelinek'));

export default function Main() {
  const uvodRef = useRef(null);
  const produktyRef = useRef(null);
  const onasRef = useRef(null);
  const galerieRef = useRef(null);
  const kontaktyRef = useRef(null);
  const vizeRef = useRef(null);
  const dotaznikRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() =>{
    AOS.init();
  }, [])


  function handleScroll(ref){
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    else console.error("ref error");
  }

  return(
    <div className='font-poppins overflow-x-hidden'>  
      <Router>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loading />}>
              <Navbar toOnas={() => handleScroll(onasRef)} toGalerie={() => handleScroll(galerieRef)} toProdukty={() => handleScroll(produktyRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
              <Uvod ref={uvodRef}/>   
              <Produkty ref={produktyRef}/>
              <Onas ref={onasRef} />
              <Vize ref={vizeRef} />
              <Galerie ref={galerieRef}/>
              <Dotaznik ref={dotaznikRef} />
              <Kontakty ref={kontaktyRef} />
              <Footer ref={footerRef} toUvod={() => handleScroll(uvodRef)} toProdukty={() => handleScroll(produktyRef)} toOnas={() => handleScroll(onasRef)} toVize={() => handleScroll(vizeRef)} toGalerie={() => handleScroll(galerieRef)} toDotaznik={() => handleScroll(dotaznikRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
            </Suspense>  
          }/>
          <Route path='poustka' element={
            <>
              <Suspense fallback={<Loading />}>
                <Navbar toOnas={() => handleScroll(onasRef)} toGalerie={() => handleScroll(galerieRef)} toProdukty={() => handleScroll(produktyRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
                <Poustka />
              </Suspense>
            </>}
          />
          <Route path='calek' element={
            <>
              <Suspense fallback={<Loading />}>
                <Navbar toOnas={() => handleScroll(onasRef)} toGalerie={() => handleScroll(galerieRef)} toProdukty={() => handleScroll(produktyRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
                <Calek />
              </Suspense>
            </>}
          />    
          <Route path='jelinek' element={
            <>
              <Suspense fallback={<Loading />}>
                <Navbar toOnas={() => handleScroll(onasRef)} toGalerie={() => handleScroll(galerieRef)} toProdukty={() => handleScroll(produktyRef)} toKontakty={() => handleScroll(kontaktyRef)}/>
                <Jelinek />
              </Suspense>
            </>}
          />     
          <Route path='*' element={<h1 className='text-5xl text-center p-20'>Stránka nebyla nalezena</h1>} />
        </Routes>
      </Router> 
       
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
        <Link to="/"><img className='cursor-pointer xl:w-auto w-10' src={whiteLogoImg} alt='logo'/></Link>
        <div className='text-white text-xl hidden xl:flex gap-20 items-center'>
          <Link to="/">
            <div className='flex items-center gap-5'>
              <a onClick={toOnas} className='cursor-pointer'>O nás</a>
              <a onClick={toGalerie} className='cursor-pointer'>Galerie</a>
              <a onClick={toProdukty}className='cursor-pointer'>Služby</a>
              <a onClick={toKontakty}className='cursor-pointer'>Kontakt</a>
              <a className='cursor-pointer'>Více</a>
            </div>
          </Link>
          <button className='bg-[#6394A8] rounded-full py-3 px-8'>Objednat</button>
        </div>        
          <button onClick={toggleNav} className='xl:hidden block'><svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>              
      </div>
    </nav>
    <div className={`lg:hidden fixed w-full right-0 top-0 mt-16 transition duration-300  ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
    {showNav && (
      <Link to="/">
        <div className={`text-white flex gap-3 flex-col bg-primary text-xl text-center p-5`}>
          <a onClick={toOnas} className='cursor-pointer'>O nás</a>
          <a onClick={toGalerie} className='cursor-pointer'>Galerie</a>
          <a onClick={toProdukty} className='cursor-pointer'>Služby</a>
          <a onClick={toKontakty} className='cursor-pointer'>Kontakt</a>
        </div>
      </Link>)}
    </div>
    </>
  );
}

const Footer = forwardRef((props, ref) =>{
  return(
    <footer className='bg-primary text-white flex justify-center'>
      <div className='w-9/12 m-16 mb-0'>
        <div className='text-sm flex flex-col xl:flex-row items-center xl:items-start xl:gap-0 gap-10 justify-between'>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>SimpleStart</h3>
            <a className='cursor-pointer' onClick={props.toUvod}>Úvod</a>
            <a className='cursor-pointer' onClick={props.toProdukty}>Produkty/Služby</a>
            <a className='cursor-pointer' onClick={props.toOnas}>O nás</a>
            <a className='cursor-pointer' onClick={props.toVize}>Naše vize</a>
          </div>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>Další</h3>
            <a className='cursor-pointer' onClick={props.toGalerie}>Galerie</a>
            <a className='cursor-pointer' onClick={props.toDotaznik}>Dotazník</a>
            <a className='cursor-pointer' onClick={props.toKontakty}>Kontakty</a>
          </div>
          <div className='flex flex-col gap-3 items-center xl:items-start'>
            <h3 className='font-bold text-lg xl:pb-5'>Sociální sítě</h3>
            <a className='cursor-pointer'>Instagram</a>
            <a className='cursor-pointer'>Facebook</a>
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
});

function Loading(){
  return(
    <div className='h-screen flex justify-center items-center bg-secondary'>
      <img className='animate-loading' src={loadingImg} alt='Loading...'/>
    </div>
  );
}