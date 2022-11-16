import './App.css';

function App() {
  return (
    <div className="App flex h-screen bg-gray-200 p-24 select-none">
      <div className='flex flex-1 rounded-lg bg-white shadow-md overflow-hidden'>
        <div className='flex flex-col flex-none w-1/3 bg-black text-gray-200'>
          <img src="/photos.jpg" alt="yourphoto" className='flex flex-1 h-2/3 object-cover object-top' />
          <p className='flex flex-1 p-8'>"lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet lorem ipsum dolor si amet"</p>
        </div>
        <div className='relative flex flex-col flex-1 text-indigo-300 text-left justify-start p-8 gap-4'>
          <p className='font-bold text-2xl text-indigo-500'>Hire me!</p>
          <div className='flex gap-4'>
            <input type="text" name="name" placeholder='First name' className='p-4 bg-gray-200 text-gray-500 rounded-md'/>
            <input type="text" name="name" placeholder='Last name' className='p-4 bg-gray-200 text-gray-500 rounded-md'/>
          </div>
          <input type="email" name="email" placeholder='Your email' className='p-4 bg-gray-200 text-gray-500 rounded-md'/>
          <textarea rows="4" cols="1" placeholder='Describe your project here...' className='p-4 bg-gray-200 text-gray-500 rounded-md'/>
          <input type="submit" name="submit" value='Send' className='p-4 bg-indigo-700 text-blue-300 font-bold rounded-md'/>
        </div>
      </div>
    </div>
  );
}

export default App;
