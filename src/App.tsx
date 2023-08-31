import { useState, useEffect } from "react";
import { Post as PostModel } from "./models/post";
import Post from "./components/post";
import { Container, Row } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    const postList = [
      new PostModel(
        "1",
        "First  Post",
        "This is the first post",
        "siki",
        "31/08/2023"
      ),
      new PostModel(
        "2",
        "Second Post",
        "This is the second post",
        "siki",
        "31/08/2023"
      ),
    ];
    setPosts(postList);
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
