import { useState, useEffect } from "react";
import { Post as PostModel } from "./models/post";
import Post from "./components/post";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/PostPage.module.css";
import { formatDate } from "./utils/formatDate";
import CustomNav from "./components/navbar";
import Cover from "./cover.jpeg";

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    const postList = [
      new PostModel(
        "1",
        "First  Post",
        "This is the first post This is the first post This is the first post This is the first post This is the first post This is the first post This is the first post This is the first post",
        "siki",
        "31/08/2023",
        "31/08/2023", 
        Cover
      ),
      new PostModel(
        "2",
        "Second Post",
        "This is the second post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
      new PostModel(
        "3",
        "Third Post",
        "This is the third post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
      new PostModel(
        "4",
        "Fourth Post",
        "This is the fourth post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
      new PostModel(
        "1",
        "First  Post",
        "This is the first post",
        "siki",
        "31/08/2023",
        "31/08/2023", 
        Cover
      ),
      new PostModel(
        "2",
        "Second Post",
        "This is the second post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
      new PostModel(
        "3",
        "Third Post",
        "This is the third post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
      new PostModel(
        "4",
        "Fourth Post",
        "This is the fourth post",
        "siki",
        "31/08/2023",
        "31/08/2023",
        Cover
      ),
    ];
    setPosts(postList);
  }, []);

  

  return (
    <Container>
      <CustomNav />
      <Row xs={1} md={2} lg={4} className="g-4">
        {posts.map((post) => (
          <Col>
            <Post post={post} className={styles.note}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
