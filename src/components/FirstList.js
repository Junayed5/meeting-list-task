import React from 'react';

const FirstList = () => {
    return (
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
    );
};

export default FirstList;