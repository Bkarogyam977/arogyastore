"use client";
import React, { useEffect, useState } from 'react';
import {
    Layout, Carousel, Input, Space, Button,
    Card, Row, Col, Spin, Avatar, Pagination, Select
} from 'antd';
import axios from 'axios'; // Import Axios
import Link from 'next/link'; // Import the Link component
import Image from 'next/image';


const { Content } = Layout;
const { Search } = Input;
const { Option } = Select;


const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [blogPost, setBlogPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);  // State for current page
    const [totalBlogs, setTotalBlogs] = useState(0);    // Total blogs count
    const [selectedCategory, setSelectedCategory] = useState('All');  // State for selected category
    const [searchQuery, setSearchQuery] = useState(''); // New state for search query
    const pageSize = 20;  // Set the number of blogs per page

    const categories = ['All', 'Disease', 'Lifestyle', 'Health'];

    useEffect(() => {
        loadAllBlog(currentPage, selectedCategory, searchQuery);
    }, [currentPage, selectedCategory, searchQuery]);

    const loadAllBlog = async (page, category, query) => {
        setLoading(true);
        try {
            let url = `https://healdiway.bkarogyam.com/erp-api/arogyam_post/?page=${page}`;
            if (query) {
                url += `&search=${query}`;  // Add search query as a parameter
            }
            const response = await axios.get(url);
            setBlogPost(response.data); // Assuming the response data structure
            setTotalBlogs(response.data.count); // Assuming response includes count
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);  // Update page when user clicks on pagination
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);  // Update selected category when dropdown changes
    };

    const interpolate = (baseUrl, imagePath) => {
        if (!imagePath) return '';  // Handle case when imagePath is missing
        return `${baseUrl}${imagePath}`;
    };

    const onSearch = (value) => {
        setSearchQuery(value);  // Set the search query when user searches
    };

    const AllBlogs = blogPost?.results ? blogPost.results.slice(0, 30) : [];

    return (
        <Layout className='overflow-hidden'>
            {/* <NavBar /> */}

            <div className="relative bg-cover bg-center md:h-32 h-20 md:mt-32 mt-7"
                style={{ backgroundImage: "url('https://nirogstreet.com/images/feed-banner-bg.jpg')" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                    <h2 className="text-black text-4xl font-bold">All Blogs</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-5 md:mx-8 mx-3 ">
                {/* Title */}
                <h2 className="text-2xl mx-8 text-cyan-400 w-full md:w-auto text-center md:text-left mb-3 hidden md:block">Blogs</h2>

                {/* Search bar and Category select */}
                <Space direction="horizontal" size="small" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <div className="w-full md:w-auto">
                        <Select
                            placeholder="Select Category"
                            onChange={handleCategoryChange}
                            style={{ width: '100%' }}
                            allowClear
                        >
                            {categories.map((category) => (
                                <Option key={category} value={category}>
                                    {category}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className="w-full md:w-auto">
                        <Search
                            placeholder="Search blogs..."
                            onSearch={onSearch}
                            enterButton={<Button type="primary" style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}>Search</Button>}
                            style={{ width: '100%' }}
                        />
                    </div>
                </Space>
            </div>


            <Content>
                <div className="py-4 md:mx-10 mx-2">
                    {loading ? (
                        <Spin size="large" />
                    ) : (
                        AllBlogs.map((blog) => (
                            <Card key={blog.id} className="my-2 p-0 rounded-lg shadow-lg border border-lime-300">
                                <Row gutter={[16, 16]} className='p-0'>
                                    <Col xs={24} md={8}>
                                        {/* Blog Image */}
                                        <Image
                                            src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
                                            alt={blog.title}
                                            className="rounded-md"
                                            width={500}
                                            height={300}
                                            layout="responsive"
                                        />
                                    </Col>
                                    <Col xs={24} md={16}>
                                        {/* Blog Content */}
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h3 className="font-semibold text-2xl">{blog.title}</h3>

                                                <p className="text-gray-500 text-lg line-clamp-3 md:mt-10" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                                            </div>
                                            <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
                                                <Button type="link" className="text-green-500 mt-4 border-lime-500">Read More</Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        ))
                    )}

                    <div className="flex justify-center mt-6">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalBlogs}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </Content>

            {/* <WebFooter /> */}
        </Layout>
    );
};

export default Blog;
























// "use client";
// import React, { useEffect, useState } from 'react';
// import { Layout, Input, Button, Card, Row, Col, Spin, Pagination, Select, Tag } from 'antd';
// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import { SearchOutlined, CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';

// const { Content } = Layout;
// const { Search } = Input;
// const { Option } = Select;

// const Blog = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogPost, setBlogPost] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalBlogs, setTotalBlogs] = useState(0);
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     const [searchQuery, setSearchQuery] = useState('');
//     const pageSize = 9;

//     const categories = [
//         { name: 'All', color: 'gray' },
//         { name: 'Disease', color: 'red' },
//         { name: 'Lifestyle', color: 'blue' },
//         { name: 'Health', color: 'green' }
//     ];

//     useEffect(() => {
//         loadAllBlog(currentPage, selectedCategory, searchQuery);
//     }, [currentPage, selectedCategory, searchQuery]);

//     const loadAllBlog = async (page, category, query) => {
//         setLoading(true);
//         try {
//             let url = `https://healdiway.bkarogyam.com/erp-api/arogyam_post/?page=${page}`;
//             if (query) url += `&search=${query}`;
//             const response = await axios.get(url);
//             setBlogPost(response.data);
//             setTotalBlogs(response.data.count);
//         } catch (error) {
//             console.error("Error fetching blog posts:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePageChange = (page) => setCurrentPage(page);
//     const handleCategoryChange = (value) => setSelectedCategory(value);
//     const onSearch = (value) => setSearchQuery(value);

//     const AllBlogs = blogPost?.results || [];

//     return (
//         <Layout className="min-h-screen bg-white">
//             {/* Hero Section */}
//             <div className="relative h-96 w-full bg-gradient-to-r from-green-500 to-teal-600">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ayurvedic Wisdom</h1>
//                     <p className="text-xl text-white opacity-90 max-w-2xl">
//                         Discover ancient healing secrets and modern wellness practices
//                     </p>
//                     <div className="mt-8 w-full max-w-2xl">
//                         <Search
//                             placeholder="Search articles..."
//                             enterButton={
//                                 <Button 
//                                     type="primary" 
//                                     icon={<SearchOutlined />}
//                                     className="bg-white text-green-600 hover:bg-gray-100"
//                                     size="large"
//                                 >
//                                     Search
//                                 </Button>
//                             }
//                             size="large"
//                             onSearch={onSearch}
//                             className="rounded-full overflow-hidden"
//                         />
//                     </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom"></div>
//             </div>

//             {/* Main Content */}
//             <Content className="container mx-auto px-4 md:px-6 py-12 -mt-8">
//                 {/* Category Filters */}
//                 <div className="flex flex-wrap gap-3 mb-8 justify-center">
//                     {categories.map((category) => (
//                         <Button
//                             key={category.name}
//                             type={selectedCategory === category.name ? 'primary' : 'default'}
//                             className={`${
//                                 selectedCategory === category.name 
//                                 ? `bg-${category.color}-500 border-${category.color}-500` 
//                                 : 'border-gray-300'
//                             } rounded-full`}
//                             onClick={() => handleCategoryChange(category.name)}
//                         >
//                             {category.name}
//                         </Button>
//                     ))}
//                 </div>

//                 {/* Blog Grid */}
//                 {loading ? (
//                     <div className="flex justify-center items-center h-64">
//                         <Spin size="large" />
//                     </div>
//                 ) : (
//                     <>
//                         <Row gutter={[24, 32]} className="mb-12">
//                             {AllBlogs.map((blog) => (
//                                 <Col xs={24} sm={12} lg={8} key={blog.id}>
//                                     <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
//                                         <Card
//                                             hoverable
//                                             className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
//                                             cover={
//                                                 <div className="relative h-56 w-full">
//                                                     <Image
//                                                         src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
//                                                         alt={blog.title}
//                                                         fill
//                                                         className="object-cover"
//                                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                                     />
//                                                     <Tag className="absolute top-4 right-4 bg-white font-medium">
//                                                         {blog.category || 'Health'}
//                                                     </Tag>
//                                                 </div>
//                                             }
//                                         >
//                                             <div className="flex flex-col h-full">
//                                                 <div className="text-gray-500 mb-2 flex items-center">
//                                                     <CalendarOutlined className="mr-2" />
//                                                     {new Date(blog.created_at).toLocaleDateString()}
//                                                 </div>
//                                                 <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
//                                                 <div 
//                                                     className="text-gray-600 mb-4 line-clamp-3 flex-grow" 
//                                                     dangerouslySetInnerHTML={{ __html: blog.content }} 
//                                                 />
//                                                 <Button 
//                                                     type="text" 
//                                                     className="text-green-600 p-0 font-medium self-start flex items-center"
//                                                 >
//                                                     Read more <ArrowRightOutlined className="ml-1" />
//                                                 </Button>
//                                             </div>
//                                         </Card>
//                                     </Link>
//                                 </Col>
//                             ))}
//                         </Row>

//                         {/* Pagination */}
//                         <div className="flex justify-center mt-8">
//                             <Pagination
//                                 current={currentPage}
//                                 pageSize={pageSize}
//                                 total={totalBlogs}
//                                 onChange={handlePageChange}
//                                 showSizeChanger={false}
//                                 itemRender={(current, type, originalElement) => {
//                                     if (type === 'prev') {
//                                         return <Button className="border border-gray-300 rounded-lg">Previous</Button>;
//                                     }
//                                     if (type === 'next') {
//                                         return <Button className="border border-gray-300 rounded-lg">Next</Button>;
//                                     }
//                                     if (type === 'page') {
//                                         return (
//                                             <Button 
//                                                 className={`border rounded-lg ${
//                                                     currentPage === current 
//                                                     ? 'bg-green-600 text-white border-green-600' 
//                                                     : 'border-gray-300'
//                                                 }`}
//                                             >
//                                                 {current}
//                                             </Button>
//                                         );
//                                     }
//                                     return originalElement;
//                                 }}
//                             />
//                         </div>
//                     </>
//                 )}
//             </Content>

//             {/* Newsletter Section */}
//             <div className="bg-gradient-to-r from-green-50 to-teal-50 py-16 px-4">
//                 <div className="container mx-auto max-w-4xl text-center">
//                     <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
//                         Stay Updated
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                         Join Our Wellness Community
//                     </h3>
//                     <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//                         Get the latest Ayurvedic remedies and health tips delivered to your inbox
//                     </p>
//                     <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto bg-white p-1 rounded-full shadow-sm">
//                         <Input 
//                             placeholder="Your email address" 
//                             size="large" 
//                             className="border-0 flex-grow"
//                         />
//                         <Button 
//                             type="primary" 
//                             size="large"
//                             className="bg-green-600 hover:bg-green-700 rounded-full"
//                         >
//                             Subscribe
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Blog;