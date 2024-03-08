import React, {useState} from 'react';
import axios from 'axios';

const Upload = () => {
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
        setUploadSuccess(false);
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
        await axios.post('http://localhost:8000/api/upload/', formData);
        setUploadSuccess(true);
        setVideo(null);
        setTitle('')
    }   catch (error) {
        console.error(error);
        setUploadSuccess(false)
    }
};

return (
    <div className="container mx-auto py-12 px-4 sm:px-4 border-4 border-gray-200 my-10 rounded-lg shadow-xl max-w-2xl">
        {uploadSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                 role="alert">
                <strong className="font-bold">Erfolg!</strong>
                <span className="block sm:inline"> Das Video wurde erfolgreich hochgeladen.</span>
            </div>
        )}
        <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center">
                    <input
                        type="file"
                        className="form-input border-2 border-gray-300 rounded-lg text-sm leading-6 p-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        onChange={handleVideoChange}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Titel des Videos"
                        className="form-input w-full border-2 border-gray-300 rounded-lg text-sm leading-6 p-2"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                    >
                        Upload Video
                    </button>
                </div>
            </form>
        </div>
    </div>

);
}
export default Upload;