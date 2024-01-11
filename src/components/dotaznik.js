import React, { forwardRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import arrowImg from '../img/arrow.svg';
import doneImg from '../img/done.svg';

const Dotaznik = forwardRef((props, ref) =>{
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      design: "",
      lag: "",
      missing: "",
      change: "",
      hodnoceni: ""
    });
  
    function handleSubmit(){
      console.log("sending:", formData);
      axios.post('/projekt/mail/mail-dotaznik.php', {to: formData.email, data: formData})
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error sending email:', error);
        });
      setPage(page + 1);
    }
  
    function handleChange(newData){
      setFormData((prevData) => ({ ...prevData, ...newData }));
    }
  
    return(
      <section ref={ref} className='h-screen bg-secondary text-text flex flex-col items-center'>
        <h2 className='font-medium text-5xl p-20'>Dotazník</h2>
        <div className='bg-white w-11/12 xl:w-8/12 p-8'>
        <header className='hidden p-5 xl:flex justify-between border-b-2'>
          <div className='flex text-xl items-center gap-2'>
            <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page === 1 && 'bg-primary'} ${page >= 2 && 'bg-done'}`}>{page === 1 && ("1")}{page >= 2 && (<img src={doneImg} alt='done'/>)}</div>
            <p className='font-bold '>Kontakt</p>
          </div>
          <img src={arrowImg} alt='šipkos' />
          <div className='flex text-xl items-center gap-2'>
            <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page === 1 && 'bg-gray-300'} ${page === 2 && 'bg-primary'} ${page >= 3 && 'bg-done'}`}>{page <= 2 && ("2")}{page >= 3 && (<img src={doneImg} alt='done'/>)}</div>
            <p className='font-bold '>Funkčnost</p>
          </div>
          <img src={arrowImg} alt='šipkos' />
          <div className='flex text-xl items-center gap-2'>
            <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white ${page <= 2 && 'bg-gray-300'} ${page === 3 && 'bg-primary'} ${page >= 4 && 'bg-done'}`}>{page <= 3 && ("3")}{page >= 4 && (<img src={doneImg} alt='done'/>)}</div>
            <p className='font-bold '>hodnocení</p>
          </div>
        </header>
        {page === 1 &&(
          <FirstPage nextPage={() => setPage(page + 1)} onChange={handleChange} formData={formData}/>
        )}
        {page === 2 &&(
          <SecondPage nextPage={() => setPage(page + 1)} prevPage={() => setPage(page - 1)} onChange={handleChange} formData={formData}/>
        )}
        {page === 3 &&(
          <ThirdPage onSubmit={handleSubmit} prevPage={() => setPage(page - 1)} onChange={handleChange} formData={formData}/>
        )}
        {page === 4 &&(
          <Finished />
        )}
        </div>
      </section>
    );
  });
  
  function FirstPage({nextPage, onChange, formData}){
    const notify = () => toast.error('Prosím vyplň všechny položky.');
    const emailError = () => toast.warning('Tvůj email je zadaný ve špatném tvaru.');
  
    function handleNextPage(){
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(formData.firstName === "" || formData.lastName === "" || formData.email === ""){
        notify();
        return;
      }
      else if(!emailRegex.test(formData.email)){
        emailError();
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
            <input onChange={handleChange} value={formData.firstName} name='firstName' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte jméno'/>
          </label>
          <label className='text-xl font-bold flex flex-col'> Příjmení*
            <input onChange={handleChange} value={formData.lastName} name='lastName' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte příjmení'/>
          </label>
          <label className='text-xl font-bold flex flex-col'> E-mail*
            <input onChange={handleChange} value={formData.email} name='email' className='font-normal border border-gray-300 p-5' type='text' placeholder='Zadejte emailovou adresu'/>
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
    const notify = () => toast.error('Prosím vyplň všechny položky.');

    function handleNextPage(){
      if(formData.design === "" || formData.lag === "" || formData.missing === ""){
        notify();
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
          <label className='text-xl font-bold flex flex-col'> Co si myslíte o designu našeho webu?*
            <input onChange={handleChange} value={formData.design} name='design' className='font-normal border border-gray-300 p-5' type='text' placeholder='Napište co si myslíte o našem designu'/>
          </label>
          <label className='text-xl font-bold flex flex-col'> Byla někdy stránka pomalá nebo jste zažili zpoždění?*
            <input onChange={handleChange} value={formData.lag} name='lag' className='font-normal border border-gray-300 p-5' type='text' placeholder='Napište jestli jste měli problém s načítáním našeho webu'/>
          </label>
          <label className='text-xl font-bold flex flex-col'> Chybí vám nějaké důležité informace?*
            <input onChange={handleChange} value={formData.missing} name='missing' className='font-normal border border-gray-300 p-5' type='text' placeholder='Řekněte nám co byste chtěli přidat na náš web'/>
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
    const notify = () => toast.error('Prosím vyplň všechny položky.');

    function handleSend(){
      if(formData.change === "" || formData.hodnoceni === ""){
        notify();
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
        <label className='text-xl font-bold flex flex-col'> Co bychom měli na našem webu změnit?*
              <input onChange={handleChange} value={formData.change} name='change'  className='font-normal border border-gray-300 p-5 pb-20' type='text' placeholder='Popište co by mělo být změněno na našem webu'/>
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

  function Finished(){
    return(
      <div className='flex flex-row-reverse justify-center items-center h-96 gap-3'>
        <h1 className='font-bold text-3xl'>Děkujeme za zpětnou vazbu.</h1>
        <div className={`rounded-full w-10 h-10 flex justify-center items-center text-white bg-done`}><img src={doneImg} alt='done'/></div>
      </div>
    );
  }

  export default Dotaznik;