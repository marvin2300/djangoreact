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
        <div>
            <h2 className="my-10 font-bold">Video Liste</h2>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        <div className="border-2 flex flex-col justify-center items-center">
                        <h3>{video.title}</h3>
                        <video width="320" height="240" controls className="border-2 p-2">
                            <source src={video.file_path} type="video/mp4" />
                            Dein Browser unterstützt das Video-Tag nicht.
                        </video>
                        <p>{video.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;
