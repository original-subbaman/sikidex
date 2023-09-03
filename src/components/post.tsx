import { Card } from "react-bootstrap";
import { Post as PostModel } from "../models/post";
import styles from "../styles/Post.module.css";
import { formatDate } from "../utils/formatDate";

interface PostProps {
  post: PostModel;
  className?: string;
}

const Post = ({ post, className}: PostProps) => {
  const { _id, title, description, author, createdAt, updatedAt, cover } = post;
  let createdUpdatedText: string; 

  if(updatedAt > createdAt){
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  }else{
    createdUpdatedText = "Created: " + formatDate(createdAt);
  }
  return (
    <Card className={`${styles.postCard} ${className}`}>
      <Card.Img variant="top" src={cover} />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {createdUpdatedText}
      </Card.Footer>
    </Card>
  );
};

export default Post;
