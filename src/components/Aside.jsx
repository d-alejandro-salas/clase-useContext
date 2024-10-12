//src/components/Aside.jsx

import { useState, useEffect } from "react";
import { Comments } from "./molecules/Comments";
import { CommentForm } from "./molecules/CommentForm";
import axios from "axios"; // Importación corregida

export const Aside = () => {
    const [comments, setComments] = useState([]);

    const getComments = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log("ha ocurrido un error...", error);
        }
    };

    useEffect(() => {
        getComments('http://localhost:3000/api/comments')
            .then(data => {
                console.log("datos obtenidos", data);
                setComments(data);
            })
            .catch(error => {
                console.log("ha ocurrido un error...", error);
            });
    }, []); // Asegúrate de que se ejecute una sola vez al montar el componente

    const addComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <aside
            className={`flex flex-col m-8 mx-auto gap-y-4 p-4 dark:bg-gray-800 sm:w-full lg:w-1/4 lg:fixed lg:top-12 lg:right-0 lg:h-auto`}
        >
            <CommentForm onAddComment={addComment} />
            <Comments comments={comments} /> {/* Aquí pasas los comentarios */}
        </aside>
    );
};
