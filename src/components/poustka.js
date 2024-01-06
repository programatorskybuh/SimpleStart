import poustkaImg from '../img/ms-poustka.svg';
import igImg from '../img/ms-ig.svg';
import fbImg from '../img/ms-fb.svg';
import designerImg from '../img/ms-designer.svg';
import underlineImg from '../img/ms-underline.svg';

export default function Poustka(){
    return(
        <section className="text-white bg-text h-full xl:h-screen w-full flex justify-center items-center">
            <div className='flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-32'>
                <div className='xl:w-5/12 w-8/12 flex mt-24 xl:mt-0 flex-col gap-10 text-center items-center'>
                    <h1 className="text-3xl xl:text-7xl font-semibold flex gap-2 xl:gap-5">Lukáš <div className='flex flex-col'>Poustka<img className='hidden xl:block' src={underlineImg} alt='underline'/></div></h1>
                    <p className='xl:text-3xl text-xl'>Čau, moje jméno je Lukáš a jsem hlavním grafickým designerem společnosti <span className="font-bold">SimpleStart</span>, mojí předností je design webových stránek a tvorba instagramových postů.</p>
                    <div className='flex items-center'>
                        <h2 className="text-3xl">Designer</h2>
                        <img src={designerImg} alt='designer' />
                    </div>
                </div>
                <img className='w-8/12 xl:w-auto' src={poustkaImg} alt='Poustka'/>
                <div className='flex xl:flex-col mb-10 xl:mb-0 gap-10'>
                    <img src={igImg} alt='ig'/>
                    <img src={fbImg} alt='fb'/>
                </div>
            </div>
        </section>
    );
}