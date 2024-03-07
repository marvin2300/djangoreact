import React, {useState} from 'react';
import axios from 'axios';

const Upload = () => {
    const [video, setVideo] = useState(null);

    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    };

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file_path', video);
    formData.append('title', 'Titel des Videos');

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
        <input type="file" className="border-2 border-black" onChange={handleVideoChange} />
        <br/>
        <button type="submit" className="border-2 border-black my-2">Upload Video</button>
    </form>
        </div>
    </div>
);
}
export default Upload;