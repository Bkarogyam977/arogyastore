import { FILE_UPLOAD_API } from "@/dataarrange/constants/api";
import { makeURL } from "@/dataarrange/utils/common";
import { MinusCircleFilled, PlusCircleFilled, UploadOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import { Form, Input, Upload, Button as AntButton, message } from "antd";
import Image from "next/image";


const Product_Image = ({ productdata }) => {
    const singleUploadprops = {
        name: 'image',
        data: {
            name: 'store_category_image',
        },
        action: makeURL(FILE_UPLOAD_API),
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <section>
            <div className='flex font-bold text-xl text-gray-400'>
                Image
            </div>

            <div>
                <Form.Item className="flex flex-row" name={'image'} getValueFromEvent={(e) => e.file.response?.image_path} >
                    <Upload {...singleUploadprops}>
                        <AntButton >Click to Upload</AntButton>
                    </Upload>

                    {productdata !== null && productdata !== undefined && productdata.thumbnail && <Image height={100} width={100} alt="Product Thumbnail" src={`https://healdiway.bkarogyam.com/media/${productdata !== null && productdata !== undefined && productdata.thumbnail !== null ? productdata.thumbnail : ''}`} />}

                </Form.Item>
            </div>


            <div className='font-bold text-xl text-gray-400'>
                Additional Images

            </div>

            <Form.List name={'product_image'} initialValue={productdata !== null && productdata !== undefined && productdata.product_image !== null && productdata.product_image !== undefined ? productdata.product_image : []} >
                {
                    (fields, { add, remove }) => (
                        <>
                            <div className='grid grid-cols-3 my-2'>
                                <div>
                                    Image
                                </div>
                                <div>
                                    Sort Order
                                </div>
                                <div>
                                    <Button isIconOnly onClick={() => add()}>
                                        <PlusCircleFilled />
                                    </Button> </div>

                            </div>


                            {fields.map(({ key, name, ...restfield }) => (
                                <div className='grid grid-cols-3' key={key}>
                                    <Form.Item  {...restfield} name={[name, 'image']} extra={<div>{productdata !== null && productdata !== undefined && productdata.product_image[name] !== null && productdata.product_image[name] !== undefined ? productdata.product_image[name].image : ''}</div>} getValueFromEvent={(e) => e.file.response?.image_path} >
                                        <Upload {...singleUploadprops}>
                                            <AntButton icon={<UploadOutlined />}>Click to Upload</AntButton>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item {...restfield} name={[name, 'sort_order']}>
                                        <Input className='py-1 my-auto' placeholder="Sort Order" variant="filled" />
                                    </Form.Item>

                                    <div>
                                        <Button isIconOnly onClick={() => remove(name)}>
                                            <MinusCircleFilled />
                                        </Button>
                                    </div>


                                </div>
                            ))}
                        </>
                    )
                }
            </Form.List>


            <div className="flex font-bold text-gray-400 text-xl bg-gray-300 my-3 p-2">
                A + Image
            </div>


            <Form.List name={'product_Aimage'} initialValue={productdata !== null && productdata !== undefined && productdata.product_Aimage !== null && productdata.product_Aimage !== undefined ? productdata.product_Aimage : []} >
                {
                    (fields, { add, remove }) => (
                        <>
                            <div className='grid grid-cols-2 my-1'>
                                <div>
                                    Image A+
                                </div>

                                <div>
                                    <Button isIconOnly onClick={() => add()}>
                                        <PlusCircleFilled />
                                    </Button> </div>

                            </div>


                            {fields.map(({ key, name, ...restfield }) => (
                                <div className='grid grid-cols-2' key={key}>
                                    <Form.Item  {...restfield} name={[name, 'image']} extra={<div>{productdata !== null && productdata !== undefined && productdata.product_Aimage[name] !== null && productdata.product_Aimage[name] !== undefined ? productdata.product_Aimage[name].image : ''}</div>} getValueFromEvent={(e) => e.file.response?.image_path} >
                                        <Upload {...singleUploadprops}>
                                            <AntButton icon={<UploadOutlined />}>Click to Upload</AntButton>
                                        </Upload>
                                    </Form.Item>


                                    <div>
                                        <Button isIconOnly onClick={() => remove(name)}>
                                            <MinusCircleFilled />
                                        </Button>
                                    </div>


                                </div>
                            ))}
                        </>
                    )
                }
            </Form.List>


        </section>
    )
}
export default Product_Image