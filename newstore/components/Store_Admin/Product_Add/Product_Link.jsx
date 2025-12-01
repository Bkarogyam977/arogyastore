import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { displayMessage, getAPI } from "@/dataarrange/utils/common";
import { Form, Select } from "antd";
import React, { useEffect, useState } from "react";


 const Product_Link = ({productdata}) => {
    const [manufacturerData, setManufacturerData] = useState();
    const [category, setCategory] = useState()
    const [filter, setFilter] = useState()
    const [products, setProducts] = useState()



    const fetchmanufacturerData = () =>{
        const  sucessFn = (data) =>{
           let udata =  data.map((e)=> ({
                label : e.name,
                value : e.id
            }))

            setManufacturerData(()=> udata);

            // setData(()=>data)
            // displayMessage(SUCCESS_MSG_TYPE,' Created Successfull.');
         }
       const  errorFn = (error) => {
             displayMessage(ERROR_MSG_TYPE,error.detail)
         }

         getAPI(`manufacturer/`, sucessFn, errorFn)
    }

    const fetchCategory =()=>{
   
        const sucessFn = (data)=>{
    
            let udata = data.map((e)=> ({
                label : e.name,
                value : e.category_id
            }) )
            setCategory(()=> udata)
            
            // displayMessage(SUCCESS_MSG_TYPE,'Category Description Created Successfull.');
          }
      
          const errorFn = (error) => {
              console.log(` hellow ${error.detail}`)
              displayMessage(ERROR_MSG_TYPE,error.detail)
          }
          getAPI(`category_description/`, sucessFn, errorFn);
      }


      const fetchFilter =()=>{
     
        const sucessFn = (data)=>{
    
            let udata = data.flatMap(value =>
                value.filter.map(v => ({
                
                  label: `${value.name} > ${v.name}`,
                  value: v.id,
                  key: `${value.name}-${v.id}`,
                }))
              ) 
            setFilter(()=> udata)
             
          }
      
          const errorFn = (error) => {
              console.log(` hellow ${error.detail}`)
              displayMessage(ERROR_MSG_TYPE,error.detail)
          }
          getAPI(`filter_group/`, sucessFn, errorFn);
      }

      const fetchProduct =()=>{
     
        const sucessFn = (data)=>{
    
            let udata = data.map(e => ({
                label : e.name,
                value : e.id
            }))
            setProducts(()=> udata)
             
          }
      
          const errorFn = (error) => {
              console.log(` hellow ${error.detail}`)
              displayMessage(ERROR_MSG_TYPE,error.detail)
          }
          getAPI(`product/`, sucessFn, errorFn);
      }

useEffect(()=>{
    fetchmanufacturerData();
    fetchCategory();
    fetchFilter();
    fetchProduct();
},[])



    return (
      <section>
         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Manufacturer  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'manufacturer_id'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.manufacturer_id : null } >
                            
                        <Select defaultValue={'Manufacturer'}   options={manufacturerData}   / >
                            

                      
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Category  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'category_id'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata?.product_category?.map(e => e.category_id) : [] } >
                            
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select category"
                           
                            // onChange={handleChange}
                            options={category}
                            />
                            
                        </Form.Item>   

                        </div>
         </div>


         {/* filters */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Filter :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'filter_id'} initialValue={productdata !== null && productdata !== undefined ? productdata.product_filter?.map(e=> e.filter_id) : [] } >
                            
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select filter"
                            
                            // onChange={handleChange}
                            options={filter}
                            />
                            
                        </Form.Item>   

                        </div>
         </div>


         {/* related product */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Related Product :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'related_id'} initialValue={productdata !== null && productdata !== undefined ? productdata.product_related?.map(e=>e.related_id) : [] } >
                            
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select related Product"
                           
                            // onChange={handleChange}
                            options={products}
                            />
                            
                        </Form.Item>   

                        </div>
         </div>
      </section>
    )
  }

  export default Product_Link;