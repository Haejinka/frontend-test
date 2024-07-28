import { useState } from "react";

const Table = ({ posts, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentPosts.map((post, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={post.image_src} alt={post.title} />
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-900" style={{ color: "#081c74" }}>{post.title}</h3>
                            <p className="text-gray-700">Price: <span style={{ color: "#195d01" }} className="font-bold">${Math.round(post.price)}</span></p>
                            <p className="text-gray-700">Vendor: {post.vendor}</p>
                            <p className="text-gray-700">Subscription: {post.subscription === true ? "Yes" : "No"}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default Table;
