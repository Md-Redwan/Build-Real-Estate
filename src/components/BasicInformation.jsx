import React from 'react'
import smsImg from "../assets/sms.png"
import messages from "../assets/messages.png"
import edit from "../assets/edit.png"

const BasicInformation = () => {
  return (
    <div className='font-poppins'>
        <div className='container'>
            <h4 className='text-center text-lg'>Three steps. Three minutes.</h4>
            <h2 className='text-center text-[40px] lg:text-[50px] font-semibold leading-[120%] mt-4'>Everything should be this easy.</h2>
            <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row md:items-center lg:justify-around mt-11.25'>
                <div className='w-full md:w-[50%] lg:w-82.25 flex flex-col md:items-center lg:items-start'>
                    <img src={messages} alt="messages image" className='w-15 md:w-18 lg:w-auto'/>
                    <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-semibold leading-[120%] my-5'>Answer questions</h3>
                    <p className='md:text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </div>
                <div className='w-full md:w-[50%] lg:w-82.25 flex flex-col md:items-center lg:items-start'>
                    <img src={smsImg} alt="smsImg image" className='w-15 md:w-18 lg:w-auto'/>
                    <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-semibold leading-[120%] my-5'>Select a quote</h3>
                    <p className='md:text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </div>
                <div className='w-full md:w-[50%] lg:w-82.25 flex flex-col md:items-center lg:items-start'>
                    <img src={edit} alt="edit image" className='w-15 md:w-18 lg:w-auto'/>
                    <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-semibold leading-[120%] my-5'>Get registered</h3>
                    <p className='md:text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasicInformation
