import './App.css';

function App() {
  return (
    <div>

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
                <h4 className='text-xl text-[#3FB883] '>New task assigned to you</h4>
              </div>
              <div className='flex m-[6px]'>
                <img cla src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#DC395F] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/2c4bwzP/Vector-4.png" alt="" />
                </div>
                <h4 className='text-xl'>New feedback recieved for Task Name</h4>
              </div>
              <div className='flex m-[6px]'>
                <img src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#3FB883] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/sQfbwZR/Vector-5.png" alt="" />
                </div>
                <h4 className='text-xl'>Task marked completed by you</h4>
              </div>
              <div className='flex m-[6px]'>
                <img src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#FB8789] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className='mx-auto mt-2' src="https://i.ibb.co/GJB9ZjC/Vector-6.png" alt="" />
                </div>
                <h4 className='text-xl'>Task Name updated for journey Journey Name</h4>
              </div>
              <div className='flex m-[6px]'>
                <img src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>

            <li className='mt-[19px]'>
              <div className='flex'>
                <div className='bg-[#F2BB27] h-7 w-7 rounded-full ml-[-15px] mr-2'>
                  <img className=' mx-auto mt-2' src="https://i.ibb.co/fXPx31d/Vector-7.png" alt="" />
                </div>
                <h4 className='text-xl'>Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ</h4>
              </div>
              <div className='flex m-[6px]'>
                <img src="https://i.ibb.co/98Xsb2W/Photo.png" alt="" />
                <p className='text-sm text-[#0000004D] pl-1'>Sheila O’Riley</p>
              </div>
            </li>
          </div>

          <div className='flex ml-[-90px] mt-8'>
            <div>
              <h3 className='text-xl font-semibold uppercase'>Thu</h3>
              <p className='text-xl text-gray-400 pl-4'>Jul</p>
            </div>

            <div className='bg-[#AEAFB2] h-10 w-10 rounded-md ml-7'>
              <p className='text-white ml-[10px] mt-[8px]'>29</p>
            </div>

          </div>
        </ul>
      </div>

    </div>
  );
}

export default App;
