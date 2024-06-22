"use client"

import React, { useState } from 'react';
import { useFormik } from 'formik';
// import { toFormikValidationSchema } from 'zod-formik-adapter';
// import { formSchema } from '@/utils';


const CheckoutForm = () => {
    const [selectedCountry] = useState("bangladesh")
    const [selectedDistrict] = useState("dakha")

    // const formik = useFormik({
    //     initialValues: {
    //         selectField: '',
    //     },
    //     validationSchema: toFormikValidationSchema(formSchema),
    //     onSubmit: (values) => {
    //         console.log('Form data', values);
    //     },
    // });

    return (
        <form className='w-full mt-5'>
            <div className='flex items-start gap-6 min-w-full justify-between'>
                <div className='flex flex-col gap-y-2 w-[50%]'>
                    <label htmlFor="frist-name">Frist name <span>*</span></label>
                    <input type="text" id='frist-name' name='fristname' className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                    <span className='text-red-800 my-1'>Frist name is must be requered</span>
                </div>
                <div className='flex flex-col gap-y-2 w-[50%] '>
                    <label htmlFor="last-name">Last name <span>*</span></label>
                    <input type="text" id='last-name' name='lastname' className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                    <span className='text-red-800 my-1'>Last name is must be requered</span>

                </div>
            </div>

            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="country">Country / Region *</label>
                <div className='w-full p-2 bg-transparent border outline-none rounded-md  flex items-center justify-between cursor-pointer select-none border-neutral-800  focus:border-blue-700 text-neutral-500'>
                    <span className='capitalize'>{selectedCountry}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>

            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="street-address">Street address  <span>*</span></label>
                <input type="text" name='street-address' id='street-address' className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                <span className='text-red-800 my-1'>PLease Provide Your Address!</span>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="city">Town / City  <span>*</span></label>
                <input type="text" id='city' name='city' className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                <span className='text-red-800 my-1'>PLease Provide Your City!</span>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="district">District  <span>*</span></label>
                <div className='w-full p-2 bg-transparent border outline-none rounded-md  flex items-center justify-between cursor-pointer select-none border-neutral-800  focus:border-blue-700 text-neutral-500'>
                    <span className='capitalize'>{selectedDistrict}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-neutral-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="phone-number">Phone <span>*</span></label>
                <input type="number" id='phone-number' name="phone" className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                <span className='text-red-800 my-1'>Phone number must be required</span>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" id='email' name='email' className='bg-transparent border outline-none rounded-md border-neutral-800 p-2 focus:border-blue-700' />
                <span className='text-red-800 my-1'>Email must be required</span>
            </div>
            <div className='flex flex-col gap-y-2 mt-5'>
                <label htmlFor="Ordernote">Order notes (optional) <span>*</span></label>
                <textarea id='Ordernote' placeholder='Notes about your order, e.g. special notes for delivery.' name='order_comment' className='bg-transparent border outline-none rounded-md  h-[200px] border-neutral-800 p-2 focus:border-blue-700' />

            </div>

            <div className='mt-10 p-4 bg-neutral-900 rounded-md'>
                <h1 className='text-xl'>Payment Information</h1>
                <div className='flex items-center gap-4 mt-5 cursor-pointer'>
                    <input type="radio" checked name="cod" id="payment-option" />
                    <label htmlFor="cod">Cash On Delivery</label>
                </div>

            </div>

            <div className='mt-5'>
                <p>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
            </div>

            <button type="submit" className='mt-5 text-center w-full bg-blue-600 cursor-pointer p-2 text-white rounded-md'>Place Order</button>

        </form>
    );
};

export default CheckoutForm;
