'use client'
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Button, Card, Divider, Tag, Avatar } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CalendarOutlined, 
  ShareAltOutlined, 
  ArrowRightOutlined,
  TagOutlined 
} from '@ant-design/icons';
import moment from 'moment';

const { Content } = Layout;

const BlogDetail = ({ params }) => {
    const { blogId } = React.use(params);
    const [loading, setLoading] = useState(true);
    const [blogDetail, setBlogDetail] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        if (blogId) {
            loadBlogDetail();
            loadRecentPosts();
            loadRelatedProducts();
        }
    }, [blogId]);

    const loadBlogDetail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://healdiway.bkarogyam.com/erp-api/arogyam_post/${blogId}`);
            const data = await response.json();
            setBlogDetail(data);
        } catch (error) {
            console.error('Failed to fetch blog details', error);
        } finally {
            setLoading(false);
        }
    };

    const loadRecentPosts = async () => {
        try {
            const response = await fetch('https://healdiway.bkarogyam.com/erp-api/arogyam_post/');
            const data = await response.json();
            setRecentPosts(data.results.slice(0, 4));
        } catch (error) {
            console.error('Error fetching recent posts', error);
        }
    };

    const loadRelatedProducts = async () => {
        try {
            const response = await fetch(`https://healdiway.bkarogyam.com/erp-api/arogyam_post/${blogId}/get_product/`);
            const data = await response.json();
            setRelatedProducts(data.product_data);
        } catch (error) {
            console.error('Error fetching related products', error);
        }
    };

    const handleShare = async () => {
        try {
            await navigator.share({
                title: blogDetail.title,
                url: window.location.href,
            });
        } catch (err) {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (loading || !blogDetail) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }


    return (
        <Layout className="bg-white">
            {/* Hero Section with top margin */}
            <div className="relative h-64 w-full bg-gradient-to-r from-green-600 to-teal-700 md:mt-10">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{blogDetail.title}</h1>
                    <div className="flex items-center text-white opacity-90">
                        <CalendarOutlined className="mr-2" />
                        <span>{moment(blogDetail.created_at).format('MMMM D, YYYY')}</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white transform skew-y-1 origin-bottom"></div>
            </div>


            {/* <div className="relative h-20 w-full bg-gradient-to-r md:mt-10">
                <div className="absolute bottom-5 left-6 right-6 h-12 bg-blue-600 transform skew-y-2 origin-bottom"> hello friends</div>
            </div> */}


            {/* Main Content with proper margins */}
            <Content className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 -mt-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Featured Image with title below */}
                        {blogDetail.featured_image && (
                            <div className="mb-8">
                                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                                    <Image
                                        src={`https://healdiway.bkarogyam.com/media/${blogDetail.featured_image}`}
                                        alt={blogDetail.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Title below image in bold */}
                                <h2 className="text-2xl font-bold mt-6 mb-4 text-center md:text-left">
                                    {blogDetail.title}
                                </h2>
                            </div>
                        )}

                        {/* Blog Content with max-width for better readability */}
                        <div className="max-w-3xl mx-auto">
                            <article className="prose max-w-none">
                                {/* <div>{blogDetail.content}</div> */}
                                <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
                            </article>

                            {/* Share Button */}
                            <div className="mt-12 flex justify-center">
                                <Button 
                                    type="primary" 
                                    icon={<ShareAltOutlined />}
                                    size="large"
                                    className="bg-green-600 hover:bg-green-700 rounded-full px-8"
                                    onClick={handleShare}
                                >
                                    Share This Article
                                </Button>
                            </div>

                            {/* Related Products */}
                            {relatedProducts.length > 0 && (
                                <div className="mt-16">
                                    <Divider orientation="left">
                                        <h3 className="text-xl font-bold text-gray-800">Related Products</h3>
                                    </Divider>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
                                        {relatedProducts.map(product => (
                                            <Link key={product.id} href={`/e-store/productdetails/${product.id}`} passHref>
                                                <Card 
                                                    hoverable
                                                    className="border-0 shadow-sm hover:shadow-md transition-all rounded-lg overflow-hidden"
                                                    cover={
                                                        <div className="relative h-48">
                                                            <Image
                                                                src={`https://healdiway.bkarogyam.com/media/${product.thumbnail}`}
                                                                alt={product.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    }
                                                >
                                                    <h4 className="font-medium text-center line-clamp-2">{product.name}</h4>
                                                    <p className="text-green-600 font-bold text-center mt-2">
                                                        ₹{product.retail_with_tax}
                                                    </p>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar with proper spacing */}
                    <div className="lg:w-1/3 lg:pl-8">
                        <Card className="sticky top-8 border-0 shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Recent Articles</h3>
                            <div className="space-y-4">
                                {recentPosts.map(post => (
                                    <Link key={post.id} href={`/blog/${post.id}`} passHref>
                                        <div className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all cursor-pointer">
                                            {post.featured_image && (
                                                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                                    <Image
                                                        src={`https://healdiway.bkarogyam.com/media/${post.featured_image}`}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-medium line-clamp-2">{post.title}</h4>
                                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                                    <CalendarOutlined className="mr-1" />
                                                    <span>{moment(post.created_at).format('MMM D, YYYY')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Divider />
                            <Link href="/blog" passHref>
                                <Button type="link" className="flex items-center text-green-600 p-0">
                                    View All Articles <ArrowRightOutlined className="ml-1" />
                                </Button>
                            </Link>
                        </Card>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default BlogDetail;






// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Layout, Spin, Button, Divider, Card } from 'antd';
// import Link from 'next/link';
// import Image from 'next/image';


// const { Content } = Layout;

// const BlogDetail = ({ params }) => {
//     const { blogId } = React.use(params);
//     const [loading, setLoading] = useState(true);
//     const [blogDetail, setBlogDetail] = useState(null);
//     const [recentPosts, setRecentPosts] = useState([]);
//     const [relatedProducts, setRelatedProducts] = useState([]);

//     useEffect(() => {
//         if (blogId) {
//             loadBlogDetail();
//             loadRecentPosts();
//             loadRelatedProducts();
//         }
//     }, [blogId]);

//     const loadBlogDetail = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(`https://healdiway.bkarogyam.com/erp-api/arogyam_post/${blogId}`);
//             const data = await response.json();
//             setBlogDetail(data);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//             console.error('Failed to fetch blog details', error);
//         }
//     };

//     const loadRecentPosts = async () => {
//         try {
//             const response = await fetch('https://healdiway.bkarogyam.com/erp-api/arogyam_post/');
//             const data = await response.json();
//             setRecentPosts(data.results.slice(0, 30));
//         } catch (error) {
//             console.error('Error fetching recent posts', error);
//         }
//     };

//     const loadRelatedProducts = async () => {
//         try {
//             const response = await fetch(`https://healdiway.bkarogyam.com/erp-api/arogyam_post/${blogId}/get_product/`);
//             const data = await response.json();
//             setRelatedProducts(data.product_data);
//         } catch (error) {
//             console.error('Error fetching related products', error);
//         }
//     };

//     const interpolate = (baseUrl, imagePath) => imagePath ? `${baseUrl}${imagePath}` : 'https://healdiway.bkarogyam.com/path/to/default-image.jpg';

//     if (loading || !blogDetail) {
//         return <Spin size="small" />;
//     }

//     const currentUrl = window.location.href;

//     const handleShare = () => {
//         if (navigator.share) {
//             navigator.share({
//                 title: blogDetail.title,
//                 url: currentUrl,
//             }).catch((error) => console.log('Error sharing:', error));
//         } else {
//             alert('Your browser does not support the share API.');
//         }
//     };

//     return (
//         <Layout>
//             <div className="relative bg-cover bg-center h-40 md:mt-20 mt-10" style={{ backgroundImage: "url('https://nirogstreet.com/images/feed-banner-bg.jpg')" }}>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
//                     <h2 className="text-black md:text-4xl text-3xl font-bold">{blogDetail.title}</h2>
//                 </div>
//             </div>

//             <Content>
//                 <div className="flex flex-col md:flex-row justify-between py-6">
//                     <div className="md:px-20 px-4">
//                         <h3 className="text-xl font-semibold hidden md:block">{blogDetail.title}</h3>
//                         <div className="md:mt-4">
//                             {blogDetail.featured_image ? (
//                                 <Image
//                                     src={`https://healdiway.bkarogyam.com/media/${blogDetail.featured_image}`}
//                                     alt={blogDetail.title}
//                                     className="w-full h-auto rounded-lg"
//                                     width={800}
//                                     height={450}
//                                     layout="responsive"
//                                 />
//                             ) : (
//                                 <div>No Image Available</div>
//                             )}
//                         </div>
//                         <div className="mt-4" dangerouslySetInnerHTML={{ __html: blogDetail.content }}></div>
//                     </div>
//                     <div className="md:w-4/12 mt-10 md:mt-0 md:block hidden">
//                         <h4 className="text-xl font-semibold">Recent Posts</h4>
//                         {recentPosts.map(post => (
//                             <div key={post.id} className="flex items-center mb-4">
//                                 <Link href={`/blog/${post.id}`} passHref>
//                                     <Button type="link">{post.title}</Button>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <Divider />


//                 {/* Related Products Section */}
//                 <div className="px-4 md:px-10">
//                     <h3 className="text-xl font-semibold mb-4">Related Products</h3>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                         {relatedProducts.length > 0 ? (
//                             relatedProducts.map(product => (
//                                 <Link key={product.id} href={`/e-store/productdetails/${product.id}`} passHref>
//                                     <Card hoverable className="p-2 border rounded-lg shadow-md cursor-pointer transform transition-transform duration-200 hover:scale-105">
//                                         <Image
//                                             src={`https://healdiway.bkarogyam.com/media/${product.thumbnail}`}
//                                             alt={product.name}
//                                             className="rounded-md object-cover"
//                                             width={224} 
//                                             height={224}
//                                         />
//                                         <h4 className="mt-2 text-sm font-semibold text-center">{product.name}</h4>
//                                         <p className="text-green-600 text-center font-bold">₹{product.retail_with_tax}</p>
//                                     </Card>
//                                 </Link>
//                             ))
//                         ) : (
//                             <p>No related products found.</p>
//                         )}
//                     </div>
//                 </div>

//                 <Divider />

//                 <div className="text-center mb-5">
//                     <Button onClick={handleShare} type="primary" className="bg-green-500 hover:bg-green-600 text-xl w-[10em]">
//                         Share Blog
//                     </Button>
//                 </div>
//             </Content>
//         </Layout>
//     );
// };

// export default BlogDetail;