import React, { useEffect, useState } from "react"
import { DatePicker, Form, Input, Select, Switch } from "antd"
import { displayMessage, getAPI } from "@/dataarrange/utils/common"
import { ERROR_MSG_TYPE } from "@/dataarrange/constants/dataKeys"
import dayjs from 'dayjs'



 const Product_Data = ({productdata}) => {

    const [taxData, setTaxData] = useState();
    const [stockStatusData, setStockStatusData] = useState();
    const [weigthData, setWeigthData] = useState();

    const [lengthData, setLengthData] = useState();




    const tax_classData = () =>{
        const  sucessFn = (data) =>{
           let udata =  data.map((e)=> ({
                label : e.title,
                value : e.id
            }))

            setTaxData(()=> udata);

            // setData(()=>data)
            // displayMessage(SUCCESS_MSG_TYPE,' Created Successfull.');
         }
       const  errorFn = (error) => {
             displayMessage(ERROR_MSG_TYPE,error.detail)
         }

         getAPI(`tax_class/`, sucessFn, errorFn)
    }


    const stockStatus = () =>{
        const  sucessFn = (data) =>{
           let udata =  data.map((e)=> ({
                label : e.name,
                value : e.id
            }));

            setStockStatusData(()=> udata);

            // setData(()=>data)
            // displayMessage(SUCCESS_MSG_TYPE,' Created Successfull.');
         }
       const  errorFn = (error) => {
             displayMessage(ERROR_MSG_TYPE,error.detail)
         }

         getAPI(`stock_status/`, sucessFn, errorFn)
    }

    const weight_classData = () =>{
        const  sucessFn = (data) =>{
           let udata =  data.map((e)=> ({
                label : e.name,
                value : e.id
            }))

            setWeigthData(()=> udata);

            // setData(()=>data)
            // displayMessage(SUCCESS_MSG_TYPE,' Created Successfull.');
         }
       const  errorFn = (error) => {
             displayMessage(ERROR_MSG_TYPE,error.detail)
         }

         getAPI(`weigth_class/`, sucessFn, errorFn)
    }

    const length_classData = () =>{
        const  sucessFn = (data) =>{
           let udata =  data.map((e)=> ({
                label : e.name,
                value : e.id
            }))

            setLengthData(()=> udata);

            // setData(()=>data)
            // displayMessage(SUCCESS_MSG_TYPE,' Created Successfull.');
         }
       const  errorFn = (error) => {
             displayMessage(ERROR_MSG_TYPE,error.detail)
         }

         getAPI(`length_class/`, sucessFn, errorFn)
    }

    useEffect(()=> {

        tax_classData();
        stockStatus()
        weight_classData();
        length_classData();

    }, [])

    return (
      <section>
        {/* product data */}
        <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Model  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'model'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.model : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Model" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* sku */}
         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            SKU <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'sku'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.sku : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Product SKU" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>
         {/* loaction */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Price  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'price'} rules={[{required : true}]}  initialValue={productdata !== null && productdata !== undefined ? productdata.price : '' }>
                            
                        <Input className='py-2 my-auto' placeholder="Price" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>
         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Cost <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'cost'} rules={[{required : true}]}  initialValue={productdata !== null && productdata !== undefined ? productdata.cost : '' }>
                            
                        <Input className='py-2 my-auto' placeholder="cost" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* tax class */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Tax Class  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'tax_class_id'} rules={[{required : true}]}  initialValue={productdata !== null && productdata !== undefined ? productdata.tax_class_id : null } >

                            <Select placeholder={'Tax class'} options={taxData}  />
                            
                        {/* <Input className='py-2 my-auto' placeholder="Tax Class" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* Stock */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Quantity  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'quantity'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.quantity : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Quantity" variant="filled" inputMode="numeric" />
                            
                        </Form.Item>   

                        </div>
         </div>

          {/* minimum quantity */}

          <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Minimum Quantity  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'minimum'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.minimum : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Minimum quantity" variant="filled"  inputMode="numeric"/>
                            
                        </Form.Item>   

                        </div>
         </div>

        

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Substract Stock  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'substract'} initialValue={productdata !== null && productdata !== undefined ? productdata.subtract : false } >

                            <Switch />
                            
                        {/* <Input className='py-2 my-auto' placeholder="substract" variant="filled" inputMode="numeric" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

        

         {/* Out of Stock Status */}

         {/* minimum quantity */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Out Of Stock Status  <span className="text-red-400">*</span> :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'stock_status_id'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.stock_status_id : null } >

                        <Select placeholder={'Out of Stock'} options={stockStatusData} />
                            
                        {/* <Input className='py-2 my-auto' placeholder="Out of Stock" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

          {/* minimum quantity */}

          <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Date Available:
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'date_available'}  initialValue={productdata !== null && productdata !== undefined ?dayjs( productdata.date_available) : null } >
                            
                        <DatePicker  needConfirm />
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* specificaition */}


         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Require Shipping :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'shipping'}  initialValue={productdata !== null && productdata !== undefined ? productdata.shipping : false }>

                            <Switch />
                            
                        {/* <Input className='py-2 my-auto' placeholder="Switch" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* dimension */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Dimensions(L * W * H)  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-2'>
                        <Form.Item name={'length'}  initialValue={productdata !== null && productdata !== undefined ? productdata.length : null } >
                            
                        <Input className='py-2 my-auto' placeholder="Length" variant="filled" />
                            
                        </Form.Item>   

                        </div>
                        <div className='col-span-2'>
                        <Form.Item name={'width'} initialValue={productdata !== null && productdata !== undefined ? productdata.width : null } >
                            
                        <Input className='py-2 my-auto' placeholder="Width" variant="filled" />
                            
                        </Form.Item>   

                        </div>
                        <div className=''>
                        <Form.Item name={'height'} initialValue={productdata !== null && productdata !== undefined ? productdata.height : null } >
                            
                        <Input className='py-2 my-auto' placeholder="Height" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Length Class  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'length_class_id'} initialValue={productdata !== null && productdata !== undefined ? productdata.length_class_id : null } >


                        <Select placeholder={'Length Class'} options={lengthData} />
                            
                        {/* <Input className='py-2 my-auto' placeholder="length_class" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* Weight */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Weight  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'weight'} initialValue={productdata !== null && productdata !== undefined ? productdata.weight : null } >
                            
                        <Input className='py-2 my-auto' placeholder="weight" variant="filled" />
                            
                        </Form.Item>   

                        </div>
         </div>

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                        Weight Class  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'weight_class_id'} initialValue={productdata !== null && productdata !== undefined ? productdata.weight_class_id : null }  >


                        <Select placeholder={'weight class'} options={weigthData} />
                            
                        {/* <Input className='py-2 my-auto' placeholder="length_class" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>

         {/* Status */}

         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Status  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'status'} initialValue={productdata !== null && productdata !== undefined ? productdata.status : false }>
                            
                            <Switch />
                        {/* <Input className='py-2 my-auto' placeholder="substract" variant="filled" /> */}
                            
                        </Form.Item>   

                        </div>
         </div>
         {/* sort order */}
         <div className='grid  grid-cols-6  '>
                        <div className=' py-2'>
                            Sort Order  <span className="text-red-400">*</span>  :
                        </div>
                        <div className='col-span-5 '>
                        <Form.Item name={'sort_order'} rules={[{required : true}]} initialValue={productdata !== null && productdata !== undefined ? productdata.sort_order : '' } >
                            
                        <Input className='py-2 my-auto' placeholder="Sort Order" variant="filled" inputMode="numeric" />
                            
                        </Form.Item>   

                        </div>
         </div>





      </section>
    )
  }

  export default Product_Data