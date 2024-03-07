import React, {useState} from 'react';
import axios from 'axios';

const Upload = () => {
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('');

    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file_path', video);
    formData.append('title', title);

    try {
        const response = await axios.post('http://localhost:8000/api/upload/', formData);
        console.log(response.data);
    }   catch (error) {
        console.error(error);
    }
};

return (
    <div className="container mx-auto py-24 border-2 border-black my-10">
        <div>
    <form onSubmit={handleSubmit} className="font-bold">
        <div className="flex justify-center">
            <input type="file" className="border-2 border-black" onChange={handleVideoChange} />
        </div>
        <div className="flex justify-center">
            <input type="text" placeholder="Titel des Videos" className="border-2 border-black my-2 p-2" onChange={handleTitleChange} />
        </div>
        <br/>
        <div className="flex justify-center">
            <button type="submit" className="border-2 border-black my-2 p-2">Upload Video</button>
        </div>
    </form>
        </div>
    </div>
);
}
export default Upload;