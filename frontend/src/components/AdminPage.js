import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [videos, setVideos] = useState([]);
    const [editStates, setEditStates] = useState({});
    const [titles, setTitles] = useState({});
    const [selectedVideos, setSelectedVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('http://localhost:8000/api/videos/');
            setVideos(response.data);
            let initialEditStates = {};
            let initialTitles = {};
            response.data.forEach(video => {
                initialEditStates[video.id] = false;
                initialTitles[video.id] = video.title;
            });
            setEditStates(initialEditStates);
            setTitles(initialTitles);
        };

        fetchVideos();
    }, []);

    const toggleEdit = (videoId) => {
        setEditStates(prev => ({ ...prev, [videoId]: !prev[videoId] }));
    };

    const handleChange = (videoId, title) => {
        setTitles(prev => ({ ...prev, [videoId]: title }));
    };

    const saveTitle = async (videoId) => {
        const title = titles[videoId];
        try {
            const response = await axios.patch(`http://localhost:8000/api/videos/${videoId}/`, { title });

            setVideos(videos.map(video => {
                if (video.id === videoId) {
                    return { ...video, title: title };
                }
                return video;
            }));

            toggleEdit(videoId);
        } catch (error) {
            console.error("Es gab ein Problem beim Speichern des Titels:", error);
        }
    };

    const toggleVideoSelection = (videoId) => {
        const newSelection = selectedVideos.includes(videoId)
            ? selectedVideos.filter(id => id !== videoId)
            : [...selectedVideos, videoId];
        setSelectedVideos(newSelection);
    };

    const deleteSelectedVideos = async () => {
        await Promise.all(selectedVideos.map(videoId =>
            axios.delete(`http://localhost:8000/api/videos/${videoId}/`)
        ));

        // Reload the video list after deletion
        setVideos(videos.filter(video => !selectedVideos.includes(video.id)));
        setSelectedVideos([]);
    };

    return (
        <div>
            <h1 className="text-xl font-bold text-center mb-4">Video Admin</h1>
            <div className="space-y-4">
                {videos.map(video => (
                    <div key={video.id} className="flex items-center space-x-4 p-2 bg-white shadow rounded">
                        <input
                            type="checkbox"
                            checked={selectedVideos.includes(video.id)}
                            onChange={() => toggleVideoSelection(video.id)}
                            className="flex-shrink-0"
                        />
                        {editStates[video.id] ? (
                            <input
                                value={titles[video.id]}
                                onChange={(e) => handleChange(video.id, e.target.value)}
                                className="flex-grow border-gray-300 border-2 p-1 rounded"
                            />
                        ) : (
                            <span className="flex-grow">{video.title}</span>
                        )}
                        <button
                            onClick={() => editStates[video.id] ? saveTitle(video.id) : toggleEdit(video.id)}
                            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {editStates[video.id] ? 'Speichern' : 'Bearbeiten'}
                        </button>
                    </div>
                ))}
            </div>
            <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={deleteSelectedVideos}
            >
                Delete Selected
            </button>
        </div>
    );
}

export default AdminPage;