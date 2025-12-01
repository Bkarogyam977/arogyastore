'use client'
import { Checkbox, Layout, Dropdown, Input, Space } from 'antd';
import React from 'react'
import { useRouter } from 'next/navigation';
import { CiSearch } from "react-icons/ci";
import { AudioOutlined } from '@ant-design/icons';
import { IoIosShareAlt } from "react-icons/io";
import Image from 'next/image';



const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);



const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};


function Brands_And_Products() {



  const items = [
    {
      key: '1',
      label: (
        <div className='h-[50vh] w-[50vw] bg-white'>
          <p className='text-2xl p-5'>Featured Brands</p>
          <div class="grid grid-cols-5 gap-4 p-4">

            <div class="p-2 rounded space-y-2">
              <h1 className='text-xl'>Featured</h1>
              <hr class="border-t-[2px] border-orange-800 w-24" />
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
            </div>

            <div class="p-2 rounded space-y-2">
              <h1 className='text-xl'>Featured</h1>
              <hr class="border-t-[2px] border-orange-800 w-24" />
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
            </div>


            <div class="p-2 rounded space-y-2">
              <h1 className='text-xl'>Featured</h1>
              <hr class="border-t-[2px] border-orange-800 w-24" />
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
            </div>

            <div class="p-2 rounded space-y-2">
              <h1 className='text-xl'>Featured</h1>
              <hr class="border-t-[2px] border-orange-800 w-24" />
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
            </div>

            <div class="p-2 rounded space-y-2">
              <h1 className='text-xl'>Featured</h1>
              <hr class="border-t-[2px] border-orange-800 w-24" />
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
              <p>Featured Brands</p>
            </div>
          </div>
        </div>
      ),
    },

  ];


  const router = useRouter()
  return (
    <Layout>

      <div class="flex flex-col md:flex-row gap-4 p-4 md:px-[10em] md:pt-28">
        <div class="hidden md:block md:bg-gray-100 p-4 rounded-lg shadow w-full md:flex-1 md:max-w-[22%]">
          <div class="flex justify-between p-1">
            <h2 class="font-bold text-lg">Filter</h2>
            <h2 class="font-bold text-lg text-red-800">Clear All</h2>
          </div>

          <div className="flex justify-between w-full px-1">
            <h2 className="font-bold text-lg mb-5">Brand</h2>
            <h2 className="flex items-center font-bold text-lg mb-5 text-red-800">Filter A-Z <CiSearch className='ml-2' /></h2>
          </div>

          <div className='flex flex-col space-y-2'>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </div>

          <Dropdown menu={{
            items,
          }} placement="bottomRight">
            <h2 className="font-bold text-lg mb-5 text-right text-orange-900"><a>+ 50 more</a></h2>
          </Dropdown>
          <hr class="border-t-[2px] border-orange-800 w-[82vw] md:w-[16vw]" />
          {/* Brand filter section end */}



          {/* Classical filter section start */}
          <div className="flex justify-between w-full px-1">
            <h2 className="font-bold text-lg mb-5 mt-10">Classical</h2>
            <h2 className="flex items-center font-bold text-lg mb-5 text-red-800 mt-10"><CiSearch className='ml-2' /></h2>
          </div>

          <div className='flex flex-col space-y-2'>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </div>


          <Dropdown menu={{
            items,
          }} placement="bottomRight">
            <h2 className="font-bold text-lg mb-5 text-right text-orange-900"><a>+ 50 more</a></h2>
          </Dropdown>
          {/* Classical filter section end */}


          {/* Patented filter section start */}
          <hr class="border-t-[2px] border-orange-800 w-[82vw] md:w-[16vw]" />
          <div className="flex justify-between w-full px-1">
            <h2 className="font-bold text-lg mb-5 mt-10">Patented</h2>
            <h2 className="flex items-center font-bold text-lg mb-5 text-red-800 mt-10"><CiSearch className='ml-2' /></h2>
          </div>

          <div className='flex flex-col space-y-2'>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </div>

          <Dropdown menu={{
            items,
          }} placement="bottomRight">
            <h2 className="font-bold text-lg mb-5 text-right text-orange-900"><a>+ 50 more</a></h2>
          </Dropdown>

        </div>

        {/* Brand filter section on mobile view start */}
        <div className='md:hidden text-center'>
          <Space direction="vertical">
            <Search
              placeholder="search"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space >
        </div>
        {/* Brand filter section on mobile view end */}




        <div class="flex-1 bg-gray-100 p-4 rounded-lg shadow">
          <h2 class="font-bold text-lg mb-2"><a className='text-orange-800'>Home</a> / <a className='text-orange-800'>Category</a> / Product</h2>
          <p>Best Sellers 1000 + items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex">
                  <IoIosShareAlt className="ml-auto text-2xl" />
                </div>
                <Image
                  src="https://bkarogyam.com/media/E_Store/Basic_Package-750x750.png"
                  alt="Descriptive alternative text"
                  className="w-full h-auto rounded-t-lg mb-2"
                  width={750}
                  height={750}
                  layout="responsive"
                />
              </div>

              <div className='p-3 space-y-2'>
                <p>Brand Name</p>
                <p>Kidney Basic Package</p>
                <p>Start From</p>
                <p>Rs <s>10000</s> 5999</p>
                <p radius="full" className="rounded-full text-center p-1 mt-3 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Button</p>
              </div>
            </div>



            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex">
                  <IoIosShareAlt className="ml-auto text-2xl" />
                </div>
                <Image
                  src="https://bkarogyam.com/media/E_Store/Basic_Package-750x750.png"
                  alt="Descriptive alternative text"
                  className="rounded-t-lg mb-2"
                  width={750}
                  height={750}
                  layout="responsive"
                />
              </div>

              <div className='p-3 space-y-2'>
                <p>Brand Name</p>
                <p>Kidney Basic Package</p>
                <p>Start From</p>
                <p>Rs <s>10000</s> 5999</p>
                <p radius="full" className="rounded-full text-center p-1 mt-3 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Button</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex">
                  <IoIosShareAlt className="ml-auto text-2xl" />
                </div>
                <Image
                  src="https://bkarogyam.com/media/E_Store/Basic_Package-750x750.png"
                  alt="Descriptive alternative text"
                  className="rounded-t-lg mb-2"
                  width={750}
                  height={750}
                  layout="responsive"
                />              </div>

              <div className='p-3 space-y-2'>
                <p>Brand Name</p>
                <p>Kidney Basic Package</p>
                <p>Start From</p>
                <p>Rs <s>10000</s> 5999</p>
                <p radius="full" className="rounded-full text-center p-1 mt-3 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Button</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Brands_And_Products;