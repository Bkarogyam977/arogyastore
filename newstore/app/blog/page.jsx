// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Layout, Card, Row, Col, Spin, Button, Input } from 'antd';
// import Link from 'next/link';
// import Image from 'next/image';

// const { Content } = Layout;

// const Blog = () => {
//     const [loading, setLoading] = useState(true);
//     const [blogPost, setBlogPost] = useState([]);
//     const [featuredBlogs, setFeaturedBlogs] = useState([]);

//     useEffect(() => {
//         loadAllBlog();
//     }, []);

//     useEffect(() => {
//         if (blogPost.results) {
//             setFeaturedBlogs(getRandomBlogs(blogPost.results, 1));
//         }
//     }, [blogPost]);

//     const getRandomBlogs = (blogs, n) => {
//         const shuffled = [...blogs].sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, n);
//     };

//     const loadAllBlog = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get("https://healdiway.bkarogyam.com/erp-api/post/");
//             setBlogPost(response.data);
//         } catch (error) {
//             console.error("Failed to fetch blogs:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const interpolate = (baseUrl, imagePath) => imagePath ? `${baseUrl}${imagePath}` : '';

//     const TopBlogs = blogPost?.results ? blogPost.results.slice(0, 9) : [];

//     if (loading) {
//         return <Spin size="large" tip="Loading blogs..." />;
//     }

//     return (
//         <Layout className='overflow-hidden'>
//             <div className="relative bg-cover bg-center md:h-32 h-40 md:mt-40 mt-10" style={{ backgroundImage: "url('/feed-banner-bg.jpg')" }}>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
//                     <h2 className="text-black md:text-4xl text-2xl font-bold">Ayurveda & Health Blog</h2>
//                     <p className="text-gray-600 px-5 md:px-0">Explore the latest health tips, ayurvedic practices, and wellness articles.</p>
//                 </div>
//             </div>

//             <div className="py-4 md:mx-10 mx-2">
//                 <h2 className="text-2xl mx-0 text-black">Featured Blogs</h2>
//                 {featuredBlogs.map((blog) => (
//                     <Card key={blog.id} className="my-2 p-0 rounded-lg shadow-lg border border-lime-300 bg-cyan-50">
//                         <Row gutter={[16, 16]} className='p-0'>
//                             <Col xs={24} md={8}>
//                                 <Image
//                                     src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
//                                     alt={blog.title}
//                                     className="rounded-md"
//                                     layout="fill"
//                                     objectFit="cover"
//                                 />
//                             </Col>
//                             <Col xs={24} md={16}>
//                                 <div className="flex flex-col justify-between h-full">
//                                     <div>
//                                         <h3 className="font-semibold text-2xl mt-8">{blog.title}</h3>

//                                         <p className="text-gray-500 text-lg line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
//                                     </div>
//                                     <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
//                                         <Button type="link" className="text-cyan-600 mt-4 border-cyan-500 bg-sky-100 shadow-orange-500">
//                                             Continue Reading
//                                         </Button>
//                                     </Link>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Card>
//                 ))}
//             </div>

//             <Content style={{ padding: '10 100px', marginTop: '10px' }}>
//                 <Row gutter={[16, 16]} className='md:px-8 px-2 rounded'>
//                     {TopBlogs.map((blog) => (
//                         <Col xs={24} sm={12} md={8} key={blog.id}>
//                             <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
//                                 <Card
//                                     className='p-5 rounded shadow-lg hover:shadow-2xl transition-shadow'
//                                     hoverable
//                                     cover={
//                                         <Image
//                                             src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
//                                             alt={blog.title}
//                                             width={300}
//                                             height={200}
//                                             style={{ borderRadius: '10px' }}
//                                         />}
//                                 >
//                                     <Card.Meta
//                                         title={<h3 className="font-semibold">{blog.title}</h3>}
//                                         description={<p className="text-gray-500 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.content }}></p>}
//                                     />

//                                     <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
//                                         <Button type="link" className="text-cyan-600 mt-4 text-xl shadow-orange-500">
//                                             Read More
//                                         </Button>
//                                     </Link>
//                                 </Card>
//                             </Link>
//                         </Col>
//                     ))}
//                 </Row>


//                 <div className="flex justify-center mt-8">
//                     <Link href="/blog/allBlog" passHref>
//                         <Button
//                             type="primary"
//                             size="large"
//                             style={{ backgroundColor: '#4CAF50', borderRadius: '25px', padding: '0 40px' }}
//                         >
//                             View All
//                         </Button>
//                     </Link>
//                 </div>

//                 <div className="bg-gray-100 md:py-10 py-5 px-8 rounded-lg text-center md:mt-10 shadow-md">
//                     <h2 className="md:text-3xl text-xl font-semibold mb-4">Sign Up for Our Newsletter</h2>
//                     <p className="md:text-lg text-gray-600 mb-6">Get the latest Ayurveda tips, health guides, and blog updates straight to your inbox.</p>
//                     <div className="flex justify-center items-center">
//                         <Input size="large" placeholder="Enter your email address" className="mr-4 rounded-lg w-1/2" />
//                         <Button type="primary" size="large" className="bg-lime-400 text-white">Subscribe</Button>
//                     </div>
//                 </div>
//             </Content>
//         </Layout>
//     );
// };

// export default Blog;



'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Card, Row, Col, Spin, Button, Input } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Content } = Layout;

const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [blogPost, setBlogPost] = useState([]);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);

    useEffect(() => {
        loadAllBlog();
    }, []);

    useEffect(() => {
        if (blogPost.results) {
            setFeaturedBlogs(getRandomBlogs(blogPost.results, 1));
        }
    }, [blogPost]);

    const getRandomBlogs = (blogs, n) => {
        const shuffled = [...blogs].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    const loadAllBlog = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://healdiway.bkarogyam.com/erp-api/arogyam_post/");
            setBlogPost(response.data);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spin size="large" tip="Loading blogs..." />;
    }

    const TopBlogs = blogPost?.results ? blogPost.results.slice(0, 9) : [];

    return (
        <Layout className='overflow-hidden'>
            <div className="relative bg-cover bg-center md:h-32 h-40 md:mt-40 mt-10" style={{ backgroundImage: "url('/feed-banner-bg.jpg')" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                    <h2 className="text-black md:text-4xl text-2xl font-bold">Ayurveda & Health Blog</h2>
                    <p className="text-gray-600 px-5 md:px-0">Explore the latest health tips, ayurvedic practices, and wellness articles.</p>
                </div>
            </div>

            <div className="py-4 md:mx-10 mx-2">
                <h2 className="text-2xl mx-0 text-black">Featured Blogs</h2>
                {featuredBlogs.map((blog) => (
                    <Card key={blog.id} className="my-2 p-0 rounded-lg shadow-lg border border-lime-300 bg-cyan-50">
                        <Row gutter={[16, 16]} className='p-0'>
                            <Col xs={24} md={8} className="relative h-64">
                                <Image
                                    src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
                                    alt={blog.title}
                                    fill
                                    className="rounded-l-lg object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </Col>
                            <Col xs={24} md={16}>
                                <div className="flex flex-col justify-between h-full p-4">
                                    <div>
                                        <h3 className="font-semibold text-2xl mt-2 md:mt-0">{blog.title}</h3>
                                        <p className="text-gray-500 text-lg line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                                    </div>
                                    <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
                                        <Button type="link" className="text-cyan-600 mt-4 border-cyan-500 bg-sky-100 shadow-orange-500">
                                            Continue Reading
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>

            <Content style={{ padding: '10 100px', marginTop: '10px' }}>
                <Row gutter={[16, 16]} className='md:px-8 px-2 rounded'>
                    {TopBlogs.map((blog) => (
                        <Col xs={24} sm={12} md={8} key={blog.id}>
                            <Card
                                className='h-full rounded shadow-lg hover:shadow-2xl transition-shadow flex flex-col'
                                hoverable
                                cover={
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
                                            alt={blog.title}
                                            fill
                                            className="rounded-t-lg object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                }
                            >
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                                    <p className="text-gray-500 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                                </div>
                                <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} passHref>
                                    <Button type="link" className="text-cyan-600 mt-4 text-lg p-0">
                                        Read More
                                    </Button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="flex justify-center mt-8">
                    <Link href="/blog/allBlog" passHref>
                        <Button
                            type="primary"
                            size="large"
                            style={{ backgroundColor: '#4CAF50', borderRadius: '25px', padding: '0 40px' }}
                        >
                            View All
                        </Button>
                    </Link>
                </div>

                <div className="bg-gray-100 md:py-10 py-5 px-8 rounded-lg text-center md:mt-10 shadow-md">
                    <h2 className="md:text-3xl text-xl font-semibold mb-4">Sign Up for Our Newsletter</h2>
                    <p className="md:text-lg text-gray-600 mb-6">Get the latest Ayurveda tips, health guides, and blog updates straight to your inbox.</p>
                    <div className="flex justify-center items-center">
                        <Input size="large" placeholder="Enter your email address" className="mr-4 rounded-lg w-1/2" />
                        <Button type="primary" size="large" className="bg-lime-400 text-white">Subscribe</Button>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default Blog;