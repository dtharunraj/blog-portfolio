
import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../config/firebase";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [search, setSearch] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [liking, setLiking] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);

        const unsubscribe = auth.onAuthStateChanged((user) => {
            setAdmin(!!user && user.uid === "Xz0IkzKtTFc5jAxDkfgtRveikU33");
        });

        return unsubscribe;
    }, []);

    async function fetchBlogs() {
        try {
            setError("");
            const response = await axios.get(`${API_URL}/api/blogs`);
            setBlogs(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Unable to load blogs. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    async function handleLike(blogId) {
        if (liking) return;

        setLiking(blogId);
        setError("");

        try {
            await axios.patch(`${API_URL}/api/blogs/like/${blogId}`);
            await fetchBlogs();
        } catch (err) {
            console.error("Error liking blog:", err);
            setError("Could not update the like. Please try again.");
        } finally {
            setLiking("");
        }
    }

    async function handleNewBlogSubmit(event) {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!newTitle.trim() || !newContent.trim()) {
            setError("Please enter both a title and blog content.");
            return;
        }

        setSubmitting(true);

        const today = new Date();
        const date = today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        try {
            await axios.post(`${API_URL}/api/blogs`, {
                newTitle: newTitle.trim(),
                date,
                newContent: newContent.trim(),
                likes: 0,
            });

            await fetchBlogs();
            setNewTitle("");
            setNewContent("");
            setSuccess("Your blog was submitted successfully.");
        } catch (err) {
            console.error("Error creating blog:", err);
            setError("Unable to create the blog. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    const filteredBlogs = blogs.filter((blog) => {
        const title = blog.newTitle || "";
        const content = blog.newContent || "";
        const query = search.toLowerCase();

        return (
            title.toLowerCase().includes(query) ||
            content.toLowerCase().includes(query)
        );
    });

    return (
        <section className="min-h-[70vh] py-12 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <span className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-300">
                        Stories · Ideas · Technology
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold text-white sm:text-6xl">
                        Latest <span className="text-orange-400">Blogs.</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
                        Explore articles, discover ideas, and learn something new.
                    </p>
                </div>

                {admin && (
                    <div className="mb-12 rounded-3xl border border-purple-400/20 bg-[#13131d] p-5 shadow-xl shadow-black/10 sm:p-8">
                        <div className="mb-6">
                            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                                Admin dashboard
                            </p>
                            <h2 className="mt-2 text-2xl font-bold text-white">
                                Create your blog(only admins😄)
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                Share your latest thoughts and ideas.
                            </p>
                        </div>

                        <form onSubmit={handleNewBlogSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="blog-title"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Blog title
                                </label>
                                <input
                                    id="blog-title"
                                    type="text"
                                    placeholder="Enter an engaging title..."
                                    value={newTitle}
                                    onChange={(event) => setNewTitle(event.target.value)}
                                    maxLength={150}
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#0b0b12] px-4 py-3 text-white placeholder:text-gray-600"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="blog-content"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Blog content
                                </label>
                                <textarea
                                    id="blog-content"
                                    placeholder="Start writing your blog..."
                                    value={newContent}
                                    onChange={(event) => setNewContent(event.target.value)}
                                    rows={6}
                                    required
                                    className="w-full resize-y rounded-xl border border-white/10 bg-[#0b0b12] px-4 py-3 text-white placeholder:text-gray-600"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="button-style disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? "Publishing..." : "Publish Blog →"}
                            </button>
                        </form>
                    </div>
                )}

                <div className="mb-8">
                    <label htmlFor="blog-search" className="sr-only">
                        Search blogs
                    </label>
                    <input
                        id="blog-search"
                        type="search"
                        placeholder="Search articles by title or content..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-[#13131d] px-5 py-4 text-white placeholder:text-gray-500"
                    />
                </div>

                {error && (
                    <div
                        role="alert"
                        className="mb-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                    >
                        {error}
                        <button
                            type="button"
                            onClick={fetchBlogs}
                            className="ml-3 font-semibold underline"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {success && (
                    <p
                        role="status"
                        className="mb-6 rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-300"
                    >
                        {success}
                    </p>
                )}

                {loading ? (
                    <div className="py-16 text-center text-gray-400">
                        Loading articles...
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="rounded-3xl border border-white/10 bg-[#13131d] px-5 py-16 text-center">
                        <p className="text-4xl">📚</p>
                        <h3 className="mt-4 text-xl font-bold text-white">
                            {search ? "No matching blogs found" : "No blogs yet"}
                        </h3>
                        <p className="mt-2 text-gray-400">
                            {search
                                ? "Try another search term."
                                : "New articles will appear here when they are published."}
                        </p>
                    </div>
                ) : (
                    <>
                        <p className="mb-5 text-sm text-gray-500">
                            {filteredBlogs.length}{" "}
                            {filteredBlogs.length === 1 ? "article" : "articles"}
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            {filteredBlogs.map((blog) => (
                                <article
                                    key={blog._id}
                                    className="group flex flex-col rounded-2xl border border-white/10 bg-[#13131d] p-6 transition duration-200 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-[#171722]"
                                >
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                                            ARTICLE
                                        </span>
                                        <time className="text-xs text-gray-500">
                                            {blog.date || ""}
                                        </time>
                                    </div>

                                    <h2 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-purple-300">
                                        {blog.newTitle}
                                    </h2>

                                    <p className="mt-4 flex-1 whitespace-pre-wrap break-words leading-7 text-gray-400">
                                        {blog.newContent}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="text-sm text-gray-400">
                                            ♥ {Number(blog.likes) || 0} likes
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => handleLike(blog._id)}
                                            disabled={liking === blog._id || !blog._id}
                                            aria-label={`Like ${blog.newTitle || "blog"}`}
                                            className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-pink-400/30 hover:bg-pink-400/10 hover:text-pink-300 disabled:opacity-50"
                                        >
                                            {liking === blog._id ? "Liking..." : "♥ Like"}
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Blogs;
