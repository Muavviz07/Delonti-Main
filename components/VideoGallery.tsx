"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
    id: string;
    title: string;
    thumbnail: string;
}

const videos: Video[] = [
    { id: "1153765212", title: "Utilities - 1", thumbnail: "https://i.vimeocdn.com/video/2105842220-2de14a5c364b840c17195e6fa9b452f5fc88181a6a3b1fe76ecb839571127d6f-d_640?region=us" },
    { id: "1153764948", title: "Utilities - 2", thumbnail: "https://i.vimeocdn.com/video/2105841877-c12bab9c65a9e841998751e47bb020bcd55f19bb45c09c2934e929d1a5e792b2-d_640?region=us" },
    { id: "1153764659", title: "Transportation", thumbnail: "https://i.vimeocdn.com/video/2105841557-bc2bed09b942179c15f9f129eaef02e504ae4acf40332226f624097b0099add6-d_640?region=us" },
    { id: "1153764350", title: "Schools and Universities", thumbnail: "https://i.vimeocdn.com/video/2105841165-9f06a569b023176aa8d65df6dc541ae7f3ef67786de895e41548745b0e3a4afe-d_640?region=us" },
    { id: "1153764043", title: "Resource Augmentation", thumbnail: "https://i.vimeocdn.com/video/2105840727-ebb14a9ea32d889d13ba0a31e803ca99c3acd96b35264852ad543257bc85600a-d_640?region=us" },
    { id: "1153763709", title: "Port", thumbnail: "https://i.vimeocdn.com/video/2105840279-11bc80efe1def8c2724568b86ff50bcbf6257d81eab9fd5d785ec2449361b1b9-d_640?region=us" },
    { id: "1153763472", title: "Indoor Navigation", thumbnail: "https://i.vimeocdn.com/video/2105839861-dd3d695869f375ff2594e607bfbd5c0f0f9858818d5623ea60c1f04c71ba9bda-d_640?region=us" },
    { id: "1153763159", title: "Healthcare", thumbnail: "https://i.vimeocdn.com/video/2105839519-9df9b78a160b97fcd5a65375d192d39a9831e0caba841d52fd6f1cd40fb84d8f-d_640?region=us" },
    { id: "1153762836", title: "Events and Festivals", thumbnail: "https://i.vimeocdn.com/video/2105839021-3887f94b3227251ed8b57c320bbdd6e194293701909390f3a9c15b609e0d6336-d_640?region=us" },
    { id: "1153762480", title: "Cybersecurity", thumbnail: "https://i.vimeocdn.com/video/2105838579-4c5e71da9342b1b1c17f56646eec04ab4039d59bdbb879812ae26801f173704c-d_640?region=us" },
    { id: "1153761741", title: "Homeless Kiosks Combined", thumbnail: "https://i.vimeocdn.com/video/2105837587-a22a2b7030b8f6b1a5edc6cfa5a7bc6ddb5023fbf2589521d4ca6ca85d533278-d_640?region=us" },
    { id: "1153761078", title: "Cities and Counties", thumbnail: "https://i.vimeocdn.com/video/2105836651-a15983c4c61296154db174b66b8133acedfbe34fa9e69e66c5ecd8e09bea135a-d_640?region=us" },
];

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-[#FAFAFA] dark:bg-background-dark">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary dark:text-blue-400 mb-3 block">Video Library</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">
                        Solution Demos
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {videos.map((video) => (
                        <div 
                            key={video.id}
                            className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                            onClick={() => setActiveVideo(video.id)}
                        >
                            <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                                <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-sm lg:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-tight">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
