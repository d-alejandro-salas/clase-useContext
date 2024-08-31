import { useState } from "react";
import { Comments } from "./molecules/Comments";
import { CommentForm } from "./molecules/CommentForm";

export const Aside = () => {
    const [comments, setComments] = useState([]);

    const addComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <aside className="flex flex-col m-8 mx-auto gap-y-4 p-4 dark:bg-gray-800 sm:w-full">
            <CommentForm onAddComment={addComment} />
            <Comments comments={comments} />
        </aside>
    );
};
