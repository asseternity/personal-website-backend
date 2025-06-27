const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBlogPosts = async (req, res, next) => {
  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: {},
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return res.status(200).json({ blogPosts: blogPosts });
  } catch (err) {
    return next(err);
  }
};

const postNewBlogPost = async (req, res, next) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const adminPassword = req.body.adminPassword;
    if (!title || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (adminPassword !== process.env.ADMIN_PW) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    const newBlogPost = await prisma.blogPost.create({
      data: {
        title: title,
        content: content,
      },
    });
    return res.status(201).json({ blogPost: newBlogPost });
  } catch (err) {
    return next(err);
  }
};

const postNewComment = async (req, res, next) => {
  try {
    const postId = parseInt(req.body.postId);
    const author = req.body.author;
    const email = req.body.email;
    const content = req.body.content;
    if (!postId || !author || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const blogPost = await prisma.blogPost.findUnique({
      where: { id: postId },
    });
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    const newComment = await prisma.comment.create({
      data: {
        author: author,
        content: content,
        blogPostId: postId,
        email: email,
      },
    });
    return res.status(201).json({ comment: newComment });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getAllBlogPosts, postNewBlogPost, postNewComment };
