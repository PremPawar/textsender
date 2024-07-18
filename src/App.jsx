import { useState } from 'react'
import backgroundImage from './assets/iphone.jpg';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from 'primereact/api';

function App() {
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [text, setText] = useState('');
  const maxTextLength = 250;


  const handlePhone1Change = (e) => {
    setPhone1(e.target.value);
  };

  const handlePhone2Change = (e) => {
    setPhone2(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Phone 1:', phone1);
    console.log('Phone 2:', phone2);
    console.log('Message:', text);
  };

  return (
    <PrimeReactProvider>
      <>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <div className="w-1/2 flex flex-col justify-center bg-zinc-900 items-center h-screen">
            {/* <h2 className="text-2xl font-extrabold mb-4"></h2> */}
            <div className="text-start text-white p-5">
              <h1 className="text-4xl font-bold font-mono mb-2">Intelligent Text Sender: Revolutionize Your Communication</h1>
              <h3 className="text-xl font-semibold font-thin mb-2">Our Enterprise Platform allows you to effortlessly send text messages to your customers, enhancing your engagement and customer service.</h3>
              <p className="text-red-500 font-medium font-extralight text-xs">
                Only for Offcial Use.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-1/2 flex flex-col h-auto bg-white justify-center items-center bg-cover bg-center bg-no-repeat p-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div >
              <div className="mb-4 w-fit"> 
                <label htmlFor="fromPhone" className="font-bold block mb-2">From Phone</label>
                <InputMask id="phone1" mask="(999) 999-9999" onChange={handlePhone1Change} placeholder="(999) 999-9999"></InputMask>
              </div>

              <div className="mb-4 w-fit">
                <label htmlFor="fromPhone" className="font-bold block mb-2">To Phone</label>
                <InputMask id="phone2" mask="(999) 999-9999" onChange={handlePhone2Change} placeholder="(999) 999-9999"></InputMask>
              </div>

              <div className="mb-4 w-fit">
                <label htmlFor="textBody" className="font-bold block mb-2">Text Body</label>
                <InputTextarea id="message" autoResize value={text} maxLength={maxTextLength} onChange={handleTextChange} rows={5} cols={30} />

                <p className="text-left text-gray-500 text-sm">{text.length}/{maxTextLength}</p>
              </div>

              <div className="flex w-fit items-center justify-between">
                <Button label="Success" onClick={handleSubmit} severity="success" outlined />
              </div>
            </div>
          </div>

        </div>
      </>
    </PrimeReactProvider>
  )
}

export default App
