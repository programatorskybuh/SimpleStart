import jelinekImg from '../img/ms-jelinek.svg';
import igImg from '../img/ms-ig.svg';
import fbImg from '../img/ms-fb.svg';
import underlineImg from '../img/ms-underline.svg';

export default function Jelinek(){
    return(
        <section className="text-white bg-text h-full xl:h-screen w-full flex justify-center items-center">
            <div className='flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-32'>
                <div className='xl:w-5/12 w-8/12 flex mt-24 xl:mt-0 flex-col gap-10 text-center items-center'>
                    <h1 className="text-3xl xl:text-7xl font-semibold flex gap-2 xl:gap-5">Tomáš <div className='flex flex-col'>Jelínek<img className='hidden xl:block' src={underlineImg} alt='underline'/></div></h1>
                    <p className='xl:text-3xl text-xl'>Ahoj, jsem Tomáš, programátor v týmu <span className="font-bold">SimpleStart</span>. Specializuji se na vývoj softwaru a hledám inovativní řešení. Sleduji trendy a přispívám k úspěchu našich projektů.</p>
                    <div className='flex items-center gap-2'>
                        <h2 className="text-3xl">Coder</h2>
                        <h2 className='text-4xl font-bold'>&lt;/div&gt;</h2>
                    </div>
                </div>
                <img className='w-8/12 xl:w-auto' src={jelinekImg} alt='Poustka'/>
                <div className='flex xl:flex-col mb-10 xl:mb-0 gap-10'>
                    <img src={igImg} alt='ig'/>
                    <img src={fbImg} alt='fb'/>
                </div>
            </div>
        </section>
    );
}