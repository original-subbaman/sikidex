export class Post {
  _id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  constructor(
    id: string,
    title: string,
    description: string,
    author: string,
    createdAt: string
  ) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.createdAt = createdAt;
  }
}
