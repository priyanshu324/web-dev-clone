import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost/blog/wp-json/wp/v2/posts");
                setPosts(response.data);
            } catch (err) {
                setError("Error fetching blog posts.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 mb-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Latest Blog Posts</h2>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="grid md:grid-cols-2 gap-6">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                <p className="text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                <Link to={`/post/${post.id}`} className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;
