import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/button";
import { Form, Input, Select } from "antd";
import {MEDICAL_HISTORY, PATIENT_PROFILE } from "@/dataarrange/constants/api";
import { getAPI, interpolate, makeFileURL  } from "@/dataarrange/utils/common";
import useUserStore from "@/app/doctor/justand";
import { useEffect, useState } from "react";


 const Product_Attribute = ({productdata}) => {
  // const userdata = useUserStore((state)=> state.currentPatient);
  const [attributeData, setAttributeData] = useState()

  const loadAttribute = () => {
   
    const sucessFn = (data)=>{

      let udata = data.map(e =>({
        label :`${e.attribute_a_description.name}/ Attrigroup: ${e.attribute_description.name}`,
        value : e.id
      }))

      setAttributeData(()=> udata)
       
    }
    const errorFn = (error)=>{
      displayMessage(ERROR_MSG_TYPE,error.detail)
    }
    getAPI(`attribute/`, sucessFn, errorFn)
      
    };

    useEffect(()=>{
      loadAttribute();
    }, [])

    return (
      <section>
        <Form.List name={'product_attribute'} initialValue={productdata !== null && productdata !== undefined ? productdata.product_attribute : [] } >

        {(fields, { add, remove }) => (
        <>
            <div className='grid grid-cols-3'  >
              <div>
                Attribute
                </div>
                <div>
                    Text
                </div>

            <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
            </div>

          {fields.map(({ key, name, ...restField }) => (
            <div className='grid grid-cols-3 gap-2' key={key} >

            
              <Form.Item
                {...restField}
                name={[name, 'attribute_id']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Attribute',
                  },
                ]}
              >
                <Select placeholder={'Attribute'} options={attributeData} />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'text']}
                
                rules={[
                  {
                    required: true,
                    message: 'Missing last name',
                  },
                ]}
              >
                <Input placeholder="Text Value" />
              </Form.Item>

              <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
          ))}
          
        </>
      )}

       

        </Form.List>
      </section>
    )
  }
export default Product_Attribute;