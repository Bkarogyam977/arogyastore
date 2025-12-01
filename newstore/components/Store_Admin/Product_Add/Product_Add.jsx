'use client'
import {  Form, Spin, Tabs, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Product_General from "./Product_General";
import Product_Link from "./Product_Link";
import Product_Attribute from "./Product_Attribute";
import Product_Option from "./Product_Option";

import Product_Discount from "./Product_Discount";
import Product_Special from "./Product_Special";
import Product_Image from "./Product_Image";
import Product_Reward_Point from "./Product_Reward_Point";
import Product_SEO from "./Product_SEO";
import { FileAddOutlined } from "@ant-design/icons";
import Product_Data from "./Product_Data";
import { Button } from "@nextui-org/react";
import { displayMessage, getAPI, postAPI, putAPI } from "@/dataarrange/utils/common";
import { ERROR_MSG_TYPE, SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { useSearchParams } from "next/navigation";





const Product_Add = () => {

    const route = useSearchParams()
    const id = route.get('id')
    const [productdata, setProductData] = useState(null)
    const [isloading, setIsLoading] = useState(false)


    const [form] = Form.useForm();

    const fetchProductId = (id)=>{
        setIsLoading(true)
        const sucessFn = (data)=>{

            setProductData(()=> data)
           
                setIsLoading(false);
                
          
            // displayMessage(SUCCESS_MSG_TYPE,'Product Created Successfully');
              
           }
           const errorFn = (error)=>{
             displayMessage(ERROR_MSG_TYPE,error.detail)
           }
          getAPI(`product/${id}`, sucessFn, errorFn) 
    }


    const onFinish = (data) =>{
        const sucessFn = (data)=>{

            
      
           displayMessage(SUCCESS_MSG_TYPE,'Product Created Successfully');
             
          }
          const sucessFn2 = (data)=>{

            
      
            displayMessage(SUCCESS_MSG_TYPE,'Product Update Successfully');
              
           }
          const errorFn = (error)=>{
            displayMessage(ERROR_MSG_TYPE,error.detail)
          }
          console.log(id)
        id !== null && id !== undefined ? putAPI(`product/${id}/product_update/`,data, sucessFn2, errorFn) : postAPI(`product/product_create/`,data, sucessFn, errorFn) 
        
    }

    useEffect(()=>{

        if(id){
            
            fetchProductId(id);
        }

    }, [id])

    useEffect(() => {
        if (form) {
            form.resetFields();
        }
    }, [productdata, form]); 

  


  return (
    <>

    { isloading ? <div className="flex w-full h-screen justify-center items-center">
        <Spin  />
    </div> : <section>

    <div className='flex justify-between h-14 bg-gradient-to-tl items-center from-orange-600 via-orange-300 to-orange-500'>
         <div className='flex font-bold text-xl text-gray-500 pl-2'>

            Product Add
         </div>

         <div className='p-2 '>
            <Button >
               <FileAddOutlined  />  Add
            </Button>
         </div>

    </div>

    <Form  form={form}  onFinish={onFinish}>


    <Tabs className='m-2'
    // onChange={onChange}
    type="card"
    items={[
        {
            label : 'General',
            key : 1,
            children : 
           
        
          <Product_General productdata={  productdata ?? null} formimg = {form} />
    
        },

        {
            label : 'Data',
            key : 2,
            children : <Product_Data productdata={  productdata ?? null} />
        },
        {
            label : 'Link',
            key : 3,
            children : <Product_Link productdata={  productdata ?? null} />
        },
        {
            label : 'Attribute',
            key : 4,
            children : <Product_Attribute productdata={  productdata ?? null} />
        },
        {
            label : 'Option',
            key : 11,
            children : <Product_Option productdata={  productdata ?? null} />
        },
       
        {
            label : 'Discount',
            key : 6,
            children : <Product_Discount productdata={  productdata ?? null} />
        },
        {
            label : 'Special',
            key : 7,
            children : <Product_Special productdata={  productdata ?? null} />
        },
        {
            label : 'Image',
            key : 8,
            children : <Product_Image productdata={  productdata ?? null} />
        },
        {
            label : 'Reward_Point',
            key : 9,
            children : <Product_Reward_Point productdata={  productdata ?? null} />
        },
       


    ]}

    
  />

  <Button type='submit' >
    Submit
  </Button>
    </Form>
    </section>

    }
    </>
  )
}

export default  Product_Add



export const Product_Subscription = () => {
    return (
      <div>page</div>
    )
  }
