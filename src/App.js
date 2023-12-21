import uvodImg from './img/uvod.svg';
import figmaImg from './img/figma.svg';
import htmlImg from './img/html.svg';
import psImg from './img/ps.svg';
import vscodeImg from './img/vscode.svg';
import produktyImg from './img/produktybg.svg';

export default function Main() {
    return(
      <div className='font-poppins'>
        <Uvod />
        <Produkty />
      </div>
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