export class Post {
  _id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  cover: string;
  constructor(
    id: string,
    title: string,
    description: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    cover: string,
  ) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.cover = cover;
  }
}
