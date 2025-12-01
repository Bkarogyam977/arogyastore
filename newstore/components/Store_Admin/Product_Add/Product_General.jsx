
'use client'
import { Form, Input, Tooltip } from "antd";
import dynamic from "next/dynamic";
import React from "react";

const CustomEditor = dynamic( () => {
    return import( '@/components/CkeditorComponent' );
  }, { ssr: false } );
const { TextArea } = Input;


 const  Product_General = ({forming,productdata}) => {

   
    
  return (
    <section className='flex flex-col p-2'>

        <Tooltip title={'Please click all TAB before submit for no give error'} defaultOpen />

        <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Product Name  <span className="text-red-400">*</span> :  
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'name'} initialValue={productdata !== null && productdata !== undefined ? productdata.name : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Product Name" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2  '>
                            Description  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'description'} getValueFromEvent={(value) => value} >
                            
                        <CustomEditor key={2} onChange={(e)=> e} initdata = {  productdata !== null && productdata !== undefined? productdata.description : 'Product Description'} />
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Meta Tag Title  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'meta_title'} initialValue={productdata !== null && productdata !== undefined ? productdata.meta_title : null}  >
                            
                        <Input className='py-2 my-auto' placeholder="Mega Tag Title" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2  '>
                            Meta Tag Description  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item  name={'meta_description'} getValueFromEvent={(value) => (  value )}  >
                            
                        {/* <TextArea className='py-2 my-auto' placeholder="Meta Tag Description" variant="filled" rows={6} /> */}
                        <CustomEditor key={1} onChange={(e)=>e} initdata = {productdata?.meta_description  ??'Meta Tag Description'} />
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Product Tag  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'product_tag'} initialValue={productdata !== null && productdata !== undefined ? productdata.product_tag : null }  >
                            
                        <Input className='py-2 my-auto' placeholder="Product Tags" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

        




    </section>
  )
}

export default Product_General;