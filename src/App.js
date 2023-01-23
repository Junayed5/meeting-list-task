import './App.css';

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
        <ul className='mt-9'>
          <li className='pb-12 text-[#0000004D] font-semibold'>11:30 AM</li>
          <li className='pb-12 text-[#0000004D] font-semibold'>11:30 AM</li>
          <li className='pb-12 text-[#0000004D] font-semibold'>11:30 AM</li>
          <li className='pb-12 text-[#0000004D] font-semibold'>11:30 AM</li>
          <li className='pb-12 text-[#0000004D] font-semibold'>11:30 AM</li>
        </ul>

        <ul className='border-l-[1px] '>
          <div className='mt-9'>
            <li>
              <div className='flex'>
                <div className='bg-[#5390EB] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2  border-l-[1px] border-b-[1px] border-white' src="https://i.ibb.co/p3jCdtB/Vector-3.png" alt="" />
                </div>
                <h4 className='text-xl text-[#3FB883] font-semibold'>New task assigned to you</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#DC395F] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/2c4bwzP/Vector-4.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>New feedback recieved for Task Name</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#3FB883] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/sQfbwZR/Vector-5.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Task marked completed by you</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#FB8789] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/GJB9ZjC/Vector-6.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Task Name updated for journey Journey Name</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#F2BB27] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className=' mx-auto mt-2' src="https://i.ibb.co/fXPx31d/Vector-7.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>
          </div>
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

          <div className='mt-9'>
            <li className='mt-[19px]'>
              <div className='flex'>
                <p className='text-[#0000004D] font-semibold ml-[-105px] px-5'>11:30 AM</p>
                <div className='bg-white h-7 w-7 rounded-full ml-[-15px] mr-2 border'>
                  <img className='mx-auto mt-1' src="https://www.logo.wine/a/logo/Google_Meet/Google_Meet-Logo.wine.svg" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Meeting with Bobby Charlie</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
              <p className='text-[#0000004D] font-semibold ml-[-105px] px-5'>11:30 AM</p>
                <div className='bg-gray-400 h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2 h-3 w-3' src="https://i.ibb.co/yfJ1G4J/message-removebg-preview.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Chat about Design Mentorship</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='h-7 w-7 rounded-full ml-[-15px] mr-2'>
                <p className='text-[#0000004D] font-semibold ml-[-105px] pl-8'>11:30 AM</p>
                  <img className='mx-auto mt-[-23px]' src="https://i.ibb.co/NtfMTsg/exclemetory.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Critical delay observed in time line adherence</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
              <p className='text-[#0000004D] font-semibold ml-[-105px] px-5'>11:30 AM</p>
                <div className='bg-[#F2BB27] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className=' mx-auto mt-2' src="https://i.ibb.co/Gdx6v46/Vector-8.png" alt="" />
                </div>
                <h4 className='text-xl font-semibold'>Finish project documentation for review (1-1 checkin)</h4>
              </div>
              <div className='flex m-[6px]'>
                <img className='pl-3' src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>
          </div>
        </ul>
      </div>

    </div>
  );
}

export default App;
