import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../../styles/SinglePost.css"; // Importing the CSS file

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost/blog/wp-json/wp/v2/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                setError("Error fetching the post.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    // Function to copy the code block text
    const handleCopy = (codeText) => {
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2s
    };

    return (
        <div className="single-post-container">
            {/* Loading & Error States */}
            {loading && <p className="text-center text-gray-500 text-lg">Loading...</p>}
            {error && <p className="text-red-500 text-center text-lg">{error}</p>}

            {/* Render Blog Post */}
            {post && (
                <div className="single-post-content">
                    {/* Title */}
                    <h1 className="single-post-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>

                    {/* Extract & Render Code Blocks */}
                    <div
                        className="single-post-content"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    ></div>

                    {/* Find and Display Code Blocks with Copy Button */}
                    {post.content.rendered && (
                        <div>
                            {post.content.rendered
                                .match(/<pre><code>([\s\S]*?)<\/code><\/pre>/g) // Extract all <pre><code> blocks
                                ?.map((codeBlock, index) => {
                                    // Extract only the inner text (remove HTML tags)
                                    const codeText = codeBlock.replace(/<[^>]+>/g, "");
                                    return (
                                        <div key={index} className="relative single-post-content">
                                            <pre>
                                                <code className="block font-mono">{codeText}</code>
                                                <button
                                                    className="copy-button"
                                                    onClick={() => handleCopy(codeText)}
                                                >
                                                    {copied ? "Copied!" : "Copy"}
                                                </button>
                                            </pre>
                                        </div>
                                    );
                                })}
                        </div>
                    )}

                    {/* Back Button */}
                    <div className="mt-10">
                        <Link to="/blog/article-1" className="single-post-back-button">
                            ← Back to Posts
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
