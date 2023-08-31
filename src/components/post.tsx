import { Card } from "react-bootstrap";
import { Post as PostModel } from "../models/post";
import styles from "../styles/Post.module.css";

interface PostProps {
  post: PostModel;
}

const Post = ({ post }: PostProps) => {
  const { _id, title, description, author, createdAt } = post;
  return (
    <Card className={styles.postCard}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
