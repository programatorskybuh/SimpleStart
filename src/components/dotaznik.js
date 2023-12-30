import React, { forwardRef, useState } from 'react';

import arrowImg from '../img/arrow.svg';
import doneImg from '../img/done.svg';

const Dotaznik = forwardRef((props, ref) =>{
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
  });
  
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

  export default Dotaznik;