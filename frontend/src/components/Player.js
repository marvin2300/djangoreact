import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/videos/');
                setVideos(response.data);
            } catch (error) {
                console.error("Es gab ein Problem beim Abrufen der Videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="">
            <h2 className="my-10 font-bold flex justify-center">Video Liste</h2>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        <div className="p-4 mt-8 w-full overflow-hidden">
                            <div className="flex flex-col justify-center items-center container mx-auto py-4 bg-white rounded-lg shadow-md border-2 p-2 md:w-1/2 w-full h-auto">
                                <h3 className="pb-2 font-bold">{video.title}</h3>
                                <video controls className="">
                                    <source src={video.file_path} type="video/mp4" />
                                    Dein Browser unterstützt das Video-Tag nicht.
                                </video>
                                <p className="pt-2">{video.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;
