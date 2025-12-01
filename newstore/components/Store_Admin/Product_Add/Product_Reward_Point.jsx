import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { displayMessage, getAPI } from "@/dataarrange/utils/common";
import { Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";


 const Product_Reward_Point = ({productdata}) => {
    const [customerData, setCustomerData] = useState();

    const fetchCustomerGroup = ()=>{
        const sucessFn = (data)=>{

            let udata = data.map(e =>({
              label : e.customer_description.name,
              value : e.id
            }))
      
            setCustomerData(()=> udata)
             
          }
          const errorFn = (error)=>{
            displayMessage(ERROR_MSG_TYPE,error.detail)
          }
          getAPI(`customer_group/`, sucessFn, errorFn)
    }


    useEffect(()=>{
        fetchCustomerGroup();
    },[])


    return (
      <section>
        <div className='font-bold text-xl text-gray-400 bg-gray-200 py-2 pl-1'>
            Buy Points
        </div>
        <hr className='h-[2px] bg-gray-300 w-full my-4' />

        <div className='grid grid-cols-7'>
            <div className='justify-self-end pr-2 '>
                Points
            </div>
            <div className='flex flex-col col-span-6'>
                <Form.Item name={'point'} initialValue={productdata !== null && productdata !== undefined && productdata.point != null ?  productdata.point : 0}  >
                    <Input className='py-1 my-auto' placeholder="Points to used it" variant="filled" />
                </Form.Item>
                <div className='text-sm text-gray-400 '>
                    Number of points needed to buy this them. if you don&apos;t want this product to be purchased with point leave as 0 
                </div>

            </div>


            

            

        </div>

        {/* reward point */}

        <div className='font-bold text-2xl my-2 mt-4'>
                Reward Points
            </div>
            <hr className='bg-gray-300 h-[2px]' />

            <div className='grid grid-cols-3'>
                <div className='text-xl font-bold text-gray-400 justify-self-start'>
                    Customer Group
                </div>
                <div className='col-span-2 text-xl font-bold text-gray-400 justify-self-end'>

                    Reward Point

                </div>

            </div>
            {/* data */}
            <div className='grid grid-cols-3 items-centerplace-items-stretch border hover:bg-gray-300 '>
                <div className='  text-gray-400 self-center  w-full '>
                  <span className='my-4 pl-2'>
                    <Form.Item name={'customer_group_id'} initialValue={productdata !== null && productdata !== undefined ?  productdata.product_reward[0]?.customer_group_id : null} >

                 <Select placeholder={'Select Group Customer'} options={customerData} />
                    </Form.Item>
                    </span>  
                </div>
                <div className='col-span-2 text-xl font-bold text-gray-400 border place-self-stretch  '>

                    <Form.Item className='my-4 mx-2' name={'reward_point'} initialValue={productdata !== null && productdata !== undefined ?  productdata.product_reward[0]?.point : null} >
                          <Input className='py-1 my-auto' placeholder="Price" variant="filled" />
                    </Form.Item>

                </div>

            </div>

      </section>
    )
  }
export default Product_Reward_Point