'use client'
import React, { useEffect, useState } from "react"
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons"
import { Button } from "@nextui-org/react"
import { DatePicker, Form, Input, Select } from "antd"
import { displayMessage, getAPI } from "@/dataarrange/utils/common"
import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys"
import dayjs from 'dayjs';

 const Product_Special = ({productdata}) => {
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
        <section className="flex flex-col">
        <div className='pl-1 font-bold text-xl text-gray-500 bg-gray-300 py-3'>
            Special 
        </div>
       
           
                <Form.List name= 'product_special'  initialValue={productdata !== null && productdata !== undefined ? productdata.product_special?.map(e=>({
                    ...e,
                    date_start : dayjs(e.date_start),
                    date_end : dayjs(e.date_end)
                })) : [] } >
                    {
                        (fields,{add, remove})=> (
                            <>
                         <div className='grid grid-cols-6 my-2'>

                            <div>
                                Customer Group
                            </div>
                           
                            <div>
                                Priority
                            </div>
                            <div>
                                Price
                            </div>
                            <div>
                                Date Start
                            </div>
                            <div>
                                Date End
                            </div>
                            <div>
                            <Button isIconOnly m-1 onClick={()=>add()}>
                                <PlusCircleFilled/>
                            </Button>

                            </div>


                            </div>



                            {
                                fields.map(({key,name, ...restfield})=>(
                                    <div className='grid grid-cols-6 gap-1'  key={key} >

                                        
                                            <Form.Item {...restfield} name={[name,'customer_group_id']}>
                                                <Select placeholder={'Customer Group'} options={customerData} /> 
                                            </Form.Item>
                                           
                                            <Form.Item {...restfield} name={[name,'priority']}>
                                                <Input className='py-1 my-auto' placeholder="Priority Integer" variant="filled" />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'price']}>
                                                <Input className='py-1 my-auto' placeholder="Price" variant="filled" />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'date_start']}>
                                                 <DatePicker placeholder='Start Date'  />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'date_end']}  >
                                                <DatePicker placeholder='End Date' format={'DD/MM/YYYY'}  />
                                            </Form.Item>
                                            <div >
                                                <Button className='p-2' isIconOnly color="warning" variant="faded" aria-label="Remove Field" onClick={()=> remove(name)}>
                                                    <MinusCircleFilled  /> 
                                                </Button>
                                            </div>
                                        

                                    </div>
                                ))
                            }
                            </>
                        )
                    }
                    
                </Form.List>

            

       

     </section>
    )
  }
  export default Product_Special;