import uvodImg from './img/uvod.svg'

let swIcons = [
    "./img/vscode.svg"
];

export default function Main() {
    return (
      <div className="flex items-center justify-evenly grow-0 font-poppins bg-primary h-screen">
        <div className='text-white'>
            <h1 className="text-6xl leading-normal text-wrap font-bold">Inovace, spolupráce,<br/>dokonalost</h1>
            <p className='text-xl'>To je <span className='font-bold'>SimpleStart</span>! Vaše brána k digitální excelenci,<br/>kde se inovace setkávají se světem!</p>
            <div className='flex'>
                <img src={swIcons[0]} />
            </div>
        </div>
        <div>
            <img src={uvodImg} />
        </div>
      </div>
    );
  }
  
  