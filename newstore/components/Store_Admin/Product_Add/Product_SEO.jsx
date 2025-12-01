import { Form, Input } from "antd";
import React from "react";



 const Product_SEO = () => {
    return (

        <section>

        <div className='font-bold text-2xl'>
                Product SEO Keyword 
            </div>
            <hr className='bg-gray-300 h-[2px]' />

            <div className='grid grid-cols-3'>
                <div className='text-xl font-bold text-gray-400 justify-self-start'>
                    Store
                </div>
                <div className='col-span-2 text-xl font-bold text-gray-400 '>

                    Keyword

                </div>

            </div>
            {/* data */}
            <div className='grid grid-cols-3 items-centerplace-items-stretch border hover:bg-gray-300 '>
                <div className='  text-gray-400 self-center  w-full '>
                  <span className='my-4 pl-2'>
                  Default
                    </span>  
                </div>
                <div className='col-span-2 text-xl font-bold text-gray-400 border place-self-stretch  '>

                    <Form.Item className='my-4 mx-2' name={'keyword'}>
                          <Input className='py-1 my-auto' placeholder="Keyword" variant="filled" />
                    </Form.Item>

                </div>

            </div>
        </section>
    )
  }


export default Product_SEO