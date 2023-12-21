import { Post } from "@/interfaces";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get("http://localhost:3000/api/posts");

  return {
    props: { posts },
  };
};

interface Props {
  posts: Post[];
  test: number;
}

const HomePage = ({ posts, test }: Props) => {
  console.log(test);

  return (
    <div>
      Home
      <ul>
        {posts.map((post) => (
          <Link
            href="/posts/{id}"
            as={`/posts/${post.id}`}
            key={post.id}
            passHref
            legacyBehavior
          >
            <a>
              <li>{post.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
