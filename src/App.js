import './App.css';
import FirstList from './components/FirstList';
import SecondList from './components/SecondList';
import Time from './components/Time';

function App() {
  return (
    <div className='ml-12 mt-16'>
      <h1 className='text-center text-2xl text-indigo-600 font-bold uppercase pb-5'>schedule app</h1>
      <div className='flex'>
        <div>
          <h3 className='text-xl font-semibold uppercase'>Wed</h3>
          <p className='text-xl text-gray-400 pl-5'>Jul</p>
        </div>

        <div className='bg-green-600 h-10 w-10 rounded-md ml-7'>
          <p className='text-white ml-[10px] mt-[8px]'>30</p>
        </div>
      </div>

      <div className='flex gap-6 h-[800px]'>
        <Time/>

        <ul className='border-l-[1px] '>
          <FirstList/>
          <hr />

          <div className='flex ml-[-90px] mt-10'>
            <div>
              <h3 className='text-xl font-semibold uppercase'>Thu</h3>
              <p className='text-xl text-gray-400 pl-4'>Jul</p>
            </div>

            <div className='bg-[#AEAFB2] h-10 w-10 rounded-md ml-7'>
              <p className='text-white ml-[10px] mt-[8px]'>29</p>
            </div>

          </div>

          <SecondList/>
        </ul>
      </div>

    </div>
  );
}

export default App;
