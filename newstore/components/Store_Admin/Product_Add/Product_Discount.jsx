import React, { useDebugValue, useEffect, useState } from "react"
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons"
import { Button } from "@nextui-org/react"
import { DatePicker, Form, Input, Select } from "antd"
import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys"
import { displayMessage, getAPI } from "@/dataarrange/utils/common"
import dayjs from 'dayjs'
const Product_Discount = ({productdata}) => {
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
        <div className='font-bold text-xl text-gray-500 bg-gray-300 py-3'>
            Discount 
        </div>
       
           
                <Form.List name= 'product_discount' initialValue={productdata !== null && productdata !== undefined ? productdata.product_discount?.map(e=>({
                    ...e,
                    date_start : dayjs(e.date_start),
                    date_end : dayjs(e.date_end)
                })) : [] } >
                    {
                        (fields,{add, remove})=> (
                            <>
                         <div className='grid grid-cols-7 my-2'>

                            <div>
                                Customer Group
                            </div>
                            <div>
                                Quantity
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
                                    <div className='grid grid-cols-7 gap-1'  key={key} >

                                        
                                            <Form.Item {...restfield} name={[name,'customer_group_id']}>
                                                <Select placeholder={'Customer Group'} options={customerData} /> 
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'quantity']}>
                                                <Input className='py-1 my-auto' placeholder="Quantity" variant="filled" />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'priority']}>
                                                <Input className='py-1 my-auto' placeholder="Priority" variant="filled" />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'price']}>
                                                <Input className='py-1 my-auto' placeholder="Price" variant="filled" />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'date_start']}>
                                                 <DatePicker placeholder='Start Date' />
                                            </Form.Item>
                                            <Form.Item {...restfield} name={[name,'date_end']}>
                                                <DatePicker placeholder='End Date' />
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

  export default Product_Discount;