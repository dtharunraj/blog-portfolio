
import React from "react";
import { useNavigate } from "react-router-dom";

import BlogProfileImage from "../assets/zodiac.png";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogimage.png";

function Home() {
    const navigate = useNavigate();

    const skills = [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "JavaScript", image: JS },
        { name: "React", image: REACTICON },
        { name: "Database", image: DB },
        { name: "Node.js", image: NODE },
    ];

    const projects = [
        { name: "Project One", image: P1 },
        { name: "Project Two", image: P2 },
        { name: "Project Three", image: P3 },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="grid min-h-[75vh] items-center gap-12 py-16 md:grid-cols-2 md:py-24">
                <div className="animate-[fadeIn_0.7s_ease-out]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-300">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Welcome to my Space...😉
                    </span>

                    <p className="mt-8 text-xl font-medium text-gray-300 sm:text-2xl">
                        Hiiiiii! im
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
                        Tharun

                    </h1>

                    <h2 className="mt-5 text-lg font-semibold text-gray-300 sm:text-xl">
                        🧩 Problem Solver · 💻 Developer · 🚀 Innovator
                    </h2>

                    <p className="mt-5 max-w-xl leading-8 text-gray-400">
                        Passionate about coding, creating modern web experiences,
                        and sharing knowledge through technology blogs.
                        Turning ideas into reality, one project at a time. 💻⚡
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            type="button"
                            className="button-style"
                            onClick={() => navigate("/blogs")}
                        >
                            🚀 Discover Articles →
                        </button>

                        <button
                            type="button"
                            className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-gray-200 transition duration-200 hover:border-purple-400/50 hover:bg-white/5"
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            🕷️ Enter My Universe →
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute inset-8 rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-orange-400/10 p-3 shadow-2xl shadow-purple-950/30 transition duration-300 hover:-translate-y-1">
                        <img
                            src={BlogProfileImage}
                            alt="Developer profile"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#191925] px-5 py-3 shadow-xl">
                        <p className="text-sm text-gray-400">- What I Do</p>
                        <p className="font-bold text-white">Code & Innovation</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="border-y border-white/10 py-10">
                <p className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Technologies I work with
                </p>

                <div className="grid grid-cols-3 gap-5 sm:grid-cols-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition duration-200 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-400/5"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="h-10 w-10 object-contain"
                                loading="lazy"
                            />
                            <span className="text-center text-xs font-medium text-gray-300 sm:text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* About / Services */}
            <section className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                        What I do
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
                        My Awesome
                        <span className="block text-orange-400">Services</span>
                    </h2>
                    <p className="mt-5 max-w-lg leading-8 text-gray-400">
                       I build modern, responsive websites and interactive web applications. 
                       From crafting clean user interfaces to developing powerful backend systems,
                    I turn ideas into digital experiences. I also explore emerging technologies and share 
                    my knowledge through tech blogs. 💻🚀
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-purple-400/20 bg-purple-400/5 p-5">
                            <p className="text-3xl font-extrabold text-purple-300">7</p>
                            <p className="mt-1 text-sm text-gray-400">Projects completed</p>
                        </div>
                        <div className="rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5">
                            <p className="text-3xl font-extrabold text-orange-300">5</p>
                            <p className="mt-1 text-sm text-gray-400">
                                Months of experience
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm text-gray-500">
                       My Development Journey
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#13131d] p-7 sm:p-9">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brown-900 to-orange-400 text-2xl">
                        ⟡
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                       Have an Idea? Let's Build It. 💻
                    </h3>
                    <p className="mt-4 leading-7 text-gray-400">
                        Explore my work, discover my ideas, and see how I turn code into 
                        meaningful digital experiences. ⚡
                    </p>
                    <button
                        type="button"
                        className="button-style mt-7"
                        onClick={() => navigate("/blogs")}
                    >
                       🚀 Discover Articles →
                    </button>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="scroll-mt-24 py-12">
                <div className="mb-10 text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
                        My portfolio
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
                        🚀 Explore My{" "}
                        <span className="text-blue-400">Projects</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-gray-400">
                        Turning ideas into reality, one project at a time.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#13131d] transition duration-300 hover:-translate-y-1 hover:border-purple-400/40"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-white">{project.name}</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Explore my development work and projects.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog CTA */}
            <section className="my-16 grid items-center gap-8 overflow-hidden rounded-3xl border border-purple-400/15 bg-gradient-to-br from-purple-500/10 via-[#13131d] to-orange-400/5 p-7 sm:p-10 md:grid-cols-2 md:p-14">
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src={BlogImage}
                        alt="Technology blogging"
                        className="mx-auto max-h-80 w-full object-contain"
                        loading="lazy"
                    />
                </div>

                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                        Beyond the Code
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                        Words Behind the Code
                        <span className="mt-1 block text-purple-400">Tech Blogs.</span>
                    </h2>
                    <p className="mt-5 leading-8 text-gray-400">
                      Sharing knowledge, exploring technology, and documenting my journey as a developer. 💻🚀
                    </p>
                    <button
                        type="button"
                        className="button-style mt-7"
                        onClick={() => navigate("/blogs")}
                    >
                      🚀 Discover Articles →
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
