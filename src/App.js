import React, { useEffect, useState } from 'react';

import uvodImg from './img/uvod.svg';
import figmaImg from './img/figma.svg';
import htmlImg from './img/html.svg';
import psImg from './img/ps.svg';
import vscodeImg from './img/vscode.svg';
import produktyImg from './img/produktybg.svg';
import onasImg from './img/onas.svg';
import calekImg from './img/calek.svg';
import jelinekImg from './img/jelinek.svg';
import poustkaImg from './img/poustka.svg';
import vizeImg from './img/vize.svg';
import logovizeImg from './img/logovize.svg';
import arrowImg from './img/arrow.svg';
import doneImg from './img/done.svg';
import mailImg from './img/mail.svg';
import phoneImg from './img/phone.svg';
import mapImg from './img/map.svg';
import whiteLogoImg from './img/white_logo.svg';
import fbImg from './img/facebook.svg';
import igImg from './img/instagram.svg';

export default function Main() {
  return(
    <div className='font-poppins'>
      <Navbar />
      <Uvod />
      <Produkty />
      <Onas />
      <Vize />
      {/* <Galerie /> */}
      <Dotaznik />
      <Kontakty />
      <Footer />
    </div>
  );
}

function Navbar(){
  const [scrolling, setScrolling] = useState(false);

  console.log(scrolling);

  useEffect(() => {
    window.addEventListener('scroll', () => {setScrolling(window.scrollY > 0)})
    return () =>{
      window.removeEventListener('scroll', () => {setScrolling(window.scrollY > 0)})
    };
  }, [])

  return(
    <nav className={`w-full ${scrolling ? 'py-5' : 'py-10'} fixed flex justify-center bg-primary`}>
      <div className='w-10/12  flex items-center justify-between'>
        <img src={whiteLogoImg} alt='logo'/>
        <div className='text-white text-xl flex gap-20'>
          <div className='flex items-center gap-5'>
            <a>O nás</a>
            <a>Galerie</a>
            <a>Služby</a>
            <a>Kontakt</a>
            <a>Více</a>
          </div>
          <button className='bg-[#6394A8] rounded-full py-3 px-8'>Objednat</button>
        </div>
      </div>
    </nav>
  );
}
  
function Uvod(){
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly grow-0 bg-primary h-full lg:h-screen">
      <div className='text-white gap-10 flex flex-col text-center lg:items-start lg:text-left items-center p-5' >
          <h1 className="text-6xl leading-normal text-wrap font-bold">Inovace, spolupráce,<br/>dokonalost</h1>
          <p className='text-xl'>To je <span className='font-bold'>SimpleStart</span>! Vaše brána k digitální excelenci,<br/>kde se inovace setkávají se světem!</p>
          <div className='flex gap-5'>
              <img src={vscodeImg} alt='vscode' />
              <img src={figmaImg} alt='figma' />
              <img src={htmlImg} alt='html' />
              <img src={psImg} alt='photoshop'/>
          </div>
          <button className="bg-button rounded-full py-4 px-8 text-xl">Objednat</button>
      </div>
      <div>
          <img src={uvodImg} alt='Uvodni obrazek' className='p-6' />
      </div>
    </div>
  );
}

function Produkty(){
  return(
    <div style={{backgroundImage: `url(${produktyImg})`}} className='h-screen bg-secondary w-full text-center bg-contain bg-center bg-no-repeat text-text'>
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
}

function Onas(){

  return(
    <div className='h-full bg-secondary flex flex-col w-full justify-center items-center text-2xl gap-10 p-5 xl:pt-24'>
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
            <button className='bg-primary text-white rounded-full px-8 py-4 self-end'>Číst více</button>
          </div>
        </div>
        <div className='xl:w-2/3 w-full flex justify-center'><img  src={onasImg} alt='O nás' /></div>
      </div>
      <div className='flex flex-col xl:flex-row items-center w-full'>
        <div className='xl:w-1/3 w-full p-10 flex flex-col justify-between gap-5 self-start xl:pl-24'>
          <h3 className='text-3xl'>Tohle jsme <span className='text-primary'>my</span></h3>
          <p>Podívej se na členy našeho týmu, každý z nás je vymaxovaný v jiném odvětví naší práce a každý ti nabídne to nejlepší!</p>
        </div>
        <div className='flex flex-col items-center w-2/3'>
          <div className='xl:w-[1035px] flex flex-col xl:flex-row justify-between gap-6'>
            <img src={calekImg} alt='Čáleček'/>
            <img src={jelinekImg} alt='Jelíneček'/>
            <img src={poustkaImg} alt='Poustíček'/>
          </div>
          <button className='text-sm text-white bg-primary rounded-full m-5 px-8 py-2'>Zobrazit více</button>
        </div>
      </div>
    </div>
  );
}

function Vize(){
  return(
    <section className='h-screen bg-secondary text-5xl text-text flex flex-col justify-center items-center'>     
      <div className='m-5'>
        <h1 className='flex gap-3 items-center'>Kdo stojí za <span className='font-bold flex items-center'>Simple<img src={logovizeImg} alt='logo' />Start</span></h1>    
      </div>
      <div className='w-11/12 flex justify-center items-center text-2xl'>
        <div className='w-1/2 h-full flex flex-col justify-evenly'>
          <p>Vítejte ve světě, kde se inovace setkávají s dokonalostí - vítejte ve společnosti <span className='text-primary font-medium'>SimpleStart!</span></p>
          <p>Ve společnosti SimpleStart jsme <span className='text-primary'>architekty</span> vašeho digitálního <span className='text-primary'>úspěchu</span>. Jako dynamická startupová společnost se specializujeme na tvorbu webových stránek a optimalizaci strategií sociálních médií, které vaši značku vynesou do nových výšin. Náš specializovaný tým odborníků je poháněn <span className='text-primary'>inovacemi</span>, <span className='text-primary'>spoluprací</span> a <span className='text-primary'>vášní pomáhat</span> firmám prezentovat se ve stále se vyvíjejícím online prostředí.</p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img src={vizeImg} alt='Naše vize' />
        </div>
      </div>
    </section>
  );
}

function Galerie(){
  return(
    <section>
      
    </section>
  );
}

function Dotaznik(){
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    motto: "",
    about: "",
    goal: "",
    hodnoceni: ""
  });

  function handleSubmit(){
    alert("hotovo");
    console.log("sending:", formData);
  }

  function handleChange(newData){
    setFormData((prevData) => ({ ...prevData, ...newData }));
  }

  return(
    <section className='h-screen bg-secondary text-text flex flex-col items-center'>
      <h2 className='font-medium text-5xl p-20'>Dotazník</h2>
      <div className='bg-white w-8/12 p-8'>
      <header className='p-5 flex justify-between border-b-2'>
        <div className='flex text-xl items-center gap-2'>
          <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page === 1 && 'bg-primary'} ${page >= 2 && 'bg-done'}`}>{page === 1 && ("1")}{page >= 2 && (<img src={doneImg} alt='done'/>)}</div>
          <p className='font-bold '>Kontakt</p>
        </div>
        <img src={arrowImg} alt='šipkos' />
        <div className='flex text-xl items-center gap-2'>
          <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page === 1 && 'bg-gray-300'} ${page === 2 && 'bg-primary'} ${page === 3 && 'bg-done'}`}>{page <= 2 && ("2")}{page >= 3 && (<img src={doneImg} alt='done'/>)}</div>
          <p className='font-bold '>společnost</p>
        </div>
        <img src={arrowImg} alt='šipkos' />
        <div className='flex text-xl items-center gap-2'>
          <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page <= 2 && 'bg-gray-300'} ${page === 3 && 'bg-primary'}`}>{page <= 3 && ("3")}{page >= 4 && (<img src={doneImg} alt='done'/>)}</div>
          <p className='font-bold '>Projekt</p>
        </div>
      </header>
      {page == 1 &&(
        <FirstPage nextPage={() => setPage(page + 1)} onChange={handleChange} formData={formData}/>
      )}
      {page == 2 &&(
        <SecondPage nextPage={() => setPage(page + 1)} prevPage={() => setPage(page - 1)} onChange={handleChange} formData={formData}/>
      )}
      {page == 3 &&(
        <ThirdPage onSubmit={handleSubmit} prevPage={() => setPage(page - 1)} onChange={handleChange} formData={formData}/>
      )}
      </div>
   
    </section>
  );
}

function FirstPage({nextPage, onChange, formData}){

  function handleNextPage(){
    console.log(formData)
    if(formData.name == "" || formData.phone == "" || formData.email == ""){
      alert("Prosím vyplň všechny položky");
      return;
    }
    else nextPage();
  }

  function handleChange(e){
    let {name, value} = e.target;
    onChange({[name]: value});
  }

  return(
    <>
      <div className='my-5 flex flex-col gap-5'>
        <label className='text-xl font-bold flex flex-col'> Jméno*
          <input onChange={handleChange} value={formData.name} name='name' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte Jméno a Příjmení'/>
        </label>
        <label className='text-xl font-bold flex flex-col'> Telefon*
          <input onChange={handleChange} value={formData.phone} name='phone' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte číslo'/>
        </label>
        <label className='text-xl font-bold flex flex-col'> E-mail*
          <input onChange={handleChange} value={formData.email} name='email' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte email'/>
        </label>
      </div>
      <div>
        <div className='flex justify-end mt-10'>
          <button className='text-white font-bold bg-primary px-5 p-4 rounded-md' onClick={handleNextPage}>POKRAČOVAT</button>
        </div>
        <p>*Povinný údaj</p>
      </div>
    </>
  );
}

function SecondPage({prevPage, nextPage, onChange, formData}){

  function handleNextPage(){
    console.log(formData)
    if(formData.company == "" || formData.motto == "" || formData.about == ""){
      alert("Prosím vyplň všechny položky");
      return;
    }
    else nextPage();
  }

  function handleChange(e){
    let {name, value} = e.target;
    onChange({[name]: value});
  }

  return(
    <>
      <div className='my-5 flex flex-col gap-5'>
        <label className='text-xl font-bold flex flex-col'> Název Společnosti*
          <input onChange={handleChange} value={formData.company} name='company' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte jméno společnosti'/>
        </label>
        <label className='text-xl font-bold flex flex-col'> Moto společnosti*
          <input onChange={handleChange} value={formData.motto} name='motto' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte moto společnosti'/>
        </label>
        <label className='text-xl font-bold flex flex-col'> O vaší firmě*
          <input onChange={handleChange} value={formData.about} name='about' className='font-normal border border-gray-300 p-5' type='text' placeholder='Řekněte nám něco o Vaší fimě'/>
        </label>
      </div>
      <div>
        <div className='flex justify-between mt-10'>
          <button className='text-primary font-bold border border-primary px-14 p-4 rounded-md' onClick={prevPage}>ZPĚT</button>
          <button className='text-white font-bold bg-primary px-5 p-4 rounded-md' onClick={handleNextPage}>POKRAČOVAT</button>
        </div>
        <p>*Povinný údaj</p>
      </div>
    </>
  );
}

function ThirdPage({prevPage, onSubmit, onChange, formData}){

  function handleSend(){
    console.log(formData)
    if(formData.goal == "" || formData.hodnoceni == ""){
      alert("Prosím vyplň všechny položky");
      return;
    }
    else onSubmit();
  }

  function handleChange(e){
    let {name, value} = e.target;
    onChange({[name]: value});
  }

  return(
    <>
      <div className='my-5 flex flex-col gap-5'>
      <label className='text-xl font-bold flex flex-col'> Cíle projektu*
            <input onChange={handleChange} value={formData.goal} name='goal'  className='font-normal border border-gray-300 p-5 pb-20' type='text' placeholder='Popište cíle projektu'/>
          </label>
          <div>
            <label className='text-xl font-bold flex flex-col'>Jak jste spokojení s navigací na našem webu?*
              <p className='font-normal text-lg'>Ohodnoťte 1 - 5 jako ve škole (1 nejlepší, 5 nejhorší)</p>
            </label>
            <div className='flex gap-5'>
              <label className='text-xl flex flex-col items-center'>1
                <input onChange={handleChange} value={1} className='font-normal border border-gray-300 w-10 h-10' type='radio' name='hodnoceni' />
              </label>
              <label className='text-xl flex flex-col items-center'>2
                <input onChange={handleChange} value={2} className='font-normal border border-gray-300 w-10 h-10' type='radio' name='hodnoceni' />
              </label>
              <label className='text-xl flex flex-col items-center'>3
                <input onChange={handleChange} value={3} className='font-normal border border-gray-300 w-10 h-10' type='radio' name='hodnoceni' />
              </label>
              <label className='text-xl flex flex-col items-center'>4
                <input onChange={handleChange} value={4} className='font-normal border border-gray-300 w-10 h-10' type='radio' name='hodnoceni' />
              </label>
              <label className='text-xl flex flex-col items-center'>5
                <input onChange={handleChange} value={5} className='font-normal border border-gray-300 w-10 h-10' type='radio' name='hodnoceni' />
              </label>
            </div>
          </div>
          <div>
          <div className='flex justify-between mt-10'>
            <button className='text-primary font-bold border border-primary px-14 p-4 rounded-md'  onClick={prevPage}>ZPĚT</button>
            <button className='text-white font-bold bg-primary px-8 p-4 rounded-md'  onClick={handleSend}>ODESLAT</button>
          </div>
          <p className='mt-3'>*Povinný údaj</p>
        </div>
      </div>
    </>
  );
}

function Kontakty(){

  return(
    <section className='h-full bg-secondary text-text flex flex-col items-center'>
      <div className='text-center w-9/12'>
        <h1 className='font-semibold text-5xl m-10'>Kontakty</h1>
        <p className='font-semibold text-xl'>Máme rádi osobní spojení! Navštivte nás na naší adrese a promluvte si s naším týmem o tom, jak můžeme společně posunout váš digitální image vpřed. Alternativně nás můžete kontaktovat telefonicky nebo prostřednictvím e-mailu a rádi vám poskytneme veškeré informace ohledně našich služeb a spolupráce.</p>
        <div className='flex justify-between my-10'>
          <div className='font-semibold text-2xl flex flex-col gap-10 justify-center'>
            <div className='flex gap-6 items-center'>
              <img src={mailImg} alt='mail' />
              <p>simplestartsro@gmail.com</p>
            </div>
            <div className='flex gap-6 items-center'>
              <img src={phoneImg} alt='phone' />
              <p>+420 776 348 106</p>
            </div>
            <div className='flex gap-6 items-center'>
              <img src={mapImg} alt='map' />
              <p>Olonkinbyen<br/>8099, Jan Mayen</p>
            </div>
          </div>
          <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333727.45762882615!2d-9.144107063923613!3d70.92913162642576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f4503c0d48cfe05%3A0x81a5cda944176e23!2sOlonkinbyen%208099%2C%20Jan%20Mayen!5e0!3m2!1scs!2scz!4v1703696721107!5m2!1scs!2scz" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return(
    <footer className='bg-primary text-white flex justify-center'>
      <div className='w-10/12 m-16 mb-0'>
        <div className='text-sm flex justify-between'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-lg pb-5'>SimpleStart</h3>
            <p>Úvod</p>
            <p>Produkty/Služby</p>
            <p>O nás</p>
            <p>Naše vize</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-lg pb-5'>Další</h3>
            <p>Galerie</p>
            <p>Dotazník</p>
            <p>Kontakty</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-lg pb-5'>Sociální sítě</h3>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-lg pb-5'>Odebírat</h3>
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