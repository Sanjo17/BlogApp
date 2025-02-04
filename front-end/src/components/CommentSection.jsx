import { useEffect, useRef, useState } from "react";
import { Comment } from "./Comment";


const comments = [
  {
    id: 1,
    user: "John Doe",
    comment: "This is a great post! I really enjoyed reading it.",
  },
  {
    id: 2,
    user: "Jane Smith",
    comment: "Very insightful. Thanks for sharing this information!",
  },
  {
    id: 3,
    user: "Alice Johnson",
    comment:
      "I have a different perspective on this topic, but I appreciate your views.",
  },
  {
    id: 4,
    user: "Bob Williams",
    comment: "Amazing work! Looking forward to more posts like this.",
  },
  {
    id: 5,
    user: "Emily Davis",
    comment:
      "Can you elaborate more on the last point? It was very interesting!",
  },
  {
    id: 6,
    user: "Michael Brown",
    comment: "This really helped me understand the topic better. Thanks!",
  },
  {
    id: 7,
    user: "Sarah Wilson",
    comment: "I totally agree with your points. Keep up the great writing!",
  },
  {
    id: 8,
    user: "David Miller",
    comment: "I had a similar experience. Thanks for sharing your thoughts!",
  },
  {
    id: 9,
    user: "Sophia Martinez",
    comment:
      "Interesting take on this subject. Do you have any references for further reading?",
  },
  {
    id: 10,
    user: "James Anderson",
    comment:
      "This was a very informative post. Looking forward to your next article!",
  },
];
export const CommentSection = () => {
  const [commentData, setCommentData] = useState([]);
  const comment = useRef("");
  useEffect(() => {
    setCommentData(comments);
  }, []);
  const handleAddComment = (e) => {
    e.preventDefault();
    const nextId = commentData[commentData.length - 1].id + 1;
    console.log(nextId);
    setCommentData([
      ...commentData,
      {
        id: nextId,
        user: "dd",
        comment: comment.current.value,
      },
    ]);
    comment.current.value = "";
  };
  return (
    <div className="comment-box px-2  sm:px-10 pt-5">
      <div className="comment-header">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {commentData.length} Comments
        </h1>
        <form onSubmit={(e) => handleAddComment(e)}>
          <input
            type="text"
            placeholder="Add a comment"
            className="sm:w-sm md:w-md lg:w-lg"
            ref={comment}
          />
          <input type="submit" value={"Add"} />
        </form>
      </div>
      <div className="comments flex flex-col gap-1.5">
        {commentData.length > 0
          ? commentData.map((comment) => {
              return <Comment data={comment} key={comment.id} />;
            })
          : "No Comments"}
      </div>
    </div>
  );
};
