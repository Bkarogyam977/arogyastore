'use client'
import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { displayMessage, getAPI } from "@/dataarrange/utils/common";
import { CloseOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/button";
import { Form, Input, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoAddOutline } from "react-icons/io5";


 const Product_Option = ({productdata}) => {
    const subOptRef = useRef();
    const [optiondata, setOptionData] = useState()
    const fetchOptiondata = ()=>{
      const sucessFn = (data)=>{

        let udata = data.map(e =>({
          label : e.name,
          value : e.id
        }))
  
        setOptionData(()=> udata)
         
      }
      const errorFn = (error)=>{
        displayMessage(ERROR_MSG_TYPE,error.detail)
      }
      getAPI(`option/`, sucessFn, errorFn)
    }

    useEffect(()=>{
      fetchOptiondata();
    },[])


    return (
      <section>

                    <Form.List name={'product_option'} initialValue={productdata !== null && productdata !== undefined ? productdata.product_option?.map(e=>({
                      id : e.id,
                      option : e.option_id,
                      list_option_value : e.product_option_value
                    })) : [] } >

                    { (fields, { add, remove }) => { 
                      
                     let select_data_id = 1
                      
                      
                     return (
                    <>
                        <div className='grid grid-cols-3'  >
                        <div>
                            Option Add
                            </div>
                            <div>
                                
                            </div>

                        <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                        </Button>
                    </Form.Item>
                        </div>

                    {fields.map(({ key, name, ...restField }) => (
                       <Product_Option_Select_1 key={key} name ={name} select_data_id={select_data_id} restField={restField} optiondata={optiondata} remove={remove}  />
                    ))}
                    
                    </>
                    ) }
                    
                    
                    }



                    </Form.List>

        

      </section>
    )
  }
export default Product_Option;










export const Product_Option_Select_2 = ({name, select_data_id,optionvaluedata  }) => {


  
  return (
    <Form.Item className='col-span-11'>
              {select_data_id}
                  <Form.List name={[name, 'list_option_value']}>
                    {(subFields, subOpt) =>{ 
                        
                        
                        return(

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        <div className='grid grid-cols-12 gap-2 items-center'>
                            <div className='col-span-2' >
                                Option Value
                            </div>
                            <div className='col-span-2'>
                                Quantity
                            </div>
                            <div>
                                Substract Stock
                            </div>
                            <div className='col-span-2'>
                                Price
                            </div>
                            <div className='col-span-2'>
                                Points
                            </div>
                            <div className='col-span-2'>
                                Weight
                            </div>
                            <div>
                            <Button onClick={()=>subOpt.add()}>

                            <IoAddOutline  />
                            </Button>

                            </div>

                        </div>


                        {subFields.map((subField) => (
                          <div className='grid grid-cols-12 gap-1' key={subField.key}>
                            <Form.Item className='col-span-2'  name={[subField.name, 'option_value_id'] } shouldUpdate  >
                              <Select placeholder={'Option Value'} options={optionvaluedata}  >
                                
                              </Select>
                            </Form.Item>
                            <Form.Item className='col-span-2'  name={[subField.name, 'quantity']}>
                              <Input placeholder="Quantity" />
                            </Form.Item>
                            <Form.Item  name={[subField.name, 'subtact']}>
                              <Select placeholder={'substract'} options={[
                                        {
                                            label : 'Yes',
                                            value : true
                                        },
                                        {
                                            label : 'No',
                                            value : false
                                        },
                                    ]} >
                                
                              </Select>
                            </Form.Item>
                            <div className=' col-span-2 grid grid-cols-2 '>

                                <Form.Item className=''  name={[subField.name, 'price_prefix']}>
                                <Select placeholder={'Price Prefix'} options={[
                                        {
                                            label : '+',
                                            value : '+'
                                        },
                                        {
                                            label : '-',
                                            value : '-'
                                        },
                                    ]} >
                                    
                                </Select>

                                </Form.Item>

                                <Form.Item  name={[subField.name, 'price']}>
                                <Input placeholder="Price" />
                                </Form.Item>
                            </div>
                            
                            <div className=' col-span-2 grid grid-cols-2 '>

                                    <Form.Item className=''  name={[subField.name, 'point_prefix']}>
                                    <Select placeholder={'Point Prefix'} options={[
                                        {
                                            label : '+',
                                            value : '+'
                                        },
                                        {
                                            label : '-',
                                            value : '-'
                                        },
                                    ]} >
                                        
                                    </Select>

                                    </Form.Item>

                                    <Form.Item  name={[subField.name, 'point']}>
                                    <Input placeholder="Point" />
                                    </Form.Item>
                                    </div>
                                    <div className=' col-span-2 grid grid-cols-2 '>

                                    <Form.Item className=''  name={[subField.name, 'weigth_prefix']}>
                                    <Select placeholder={'Weigth_prefix'} options={[
                                        {
                                            label : '+',
                                            value : '+'
                                        },
                                        {
                                            label : '-',
                                            value : '-'
                                        },
                                    ]}>
                                       
                                    </Select>

                                    </Form.Item>

                                    <Form.Item  name={[subField.name, 'weight']}>
                                    <Input placeholder="Weight" />
                                    </Form.Item>
                                    </div>
                            <div className=''>
                           
                            

                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                            </div>
                          </div>
                        ))}
                        {/* <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button> */}
                      </div>
                    )} }
                  </Form.List>
                </Form.Item>
  )
}








export const Product_Option_Select_1 = ({ restField, name, select_data_id , optiondata, remove}) => {
  const [optionid, setOptionid] = useState()
  const [optionvaluedata, setOptionValueData] = useState()
    const fetchOptionValuedata = (id)=>{
      const sucessFn = (data)=>{

        let udata = data.optionvalue.map(e =>({
          label : e.name,
          value : e.id
        }))
  
        setOptionValueData(()=> udata)
         
      }
      const errorFn = (error)=>{
        displayMessage(ERROR_MSG_TYPE,error.detail)
      }
      getAPI(`option/${id}/`, sucessFn, errorFn)
    }

    useEffect(()=>{
      if(optionid){

        fetchOptionValuedata(optionid);
      }
    },[optionid])




  return (
    <div className='grid grid-cols-12 gap-2 '  >

                        
    <Form.Item className='col-span-11' 
        {...restField}
        name={[name, 'option']}
        rules={[
        {
            required: true,
            message: 'Missing Option',
        },
       
        ]} 

        shouldUpdate={(prevValues, curValues) =>{ fetchOptionValuedata(curValues.product_option[name].option);  return prevValues.additional !== curValues.additional}}
       
    >
      {(value) => console.log(value)}
    <Select placeholder={'Option'}   options={optiondata}  onChange={e => setOptionid(() => e)}  />
       

    
    </Form.Item>
   
    <div className='flex items-center'>

    <MinusCircleOutlined onClick={() => remove(name)} />
    </div>

            {/* Nested Form.List */}
      <Product_Option_Select_2 name= {name} select_data_id = { select_data_id} optionvaluedata={optionvaluedata}  optionid={optionid} />



    </div>
  )
}
