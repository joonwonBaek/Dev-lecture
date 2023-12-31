import { Post } from "@/interfaces";
import axios from "axios";
import { NextPageContext } from "next";

export const getServerSideProps = async (context: NextPageContext) => {
  const postId = context.query.id;

  try {
    const { data: post } = await axios(
      `http://localhost:3000/api/posts/${postId}`
    );

    return {
      props: { post },
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return {
        notFound: true,
      };
    }
    return { props: {} };
  }
};

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
