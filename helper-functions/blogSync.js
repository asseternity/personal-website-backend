const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const blogDirectory = path.join(__dirname, "blog");

const getBlogPostFiles = () => {
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".md"));
};

const getBlogPostData = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const parsed = matter(content);
  return {
    title: parsed.data.title,
    content: parsed.content,
  };
};

const syncBlogPosts = async () => {
  const files = getBlogPostFiles();

  for (const file of files) {
    const blogData = getBlogPostData(path.join(blogDirectory, file));
    const exists = await prisma.blogPost.findUnique({
      where: { title: blogData.title },
    });
    if (!exists) {
      await prisma.blogPost.create({
        data: {
          title: blogData.title,
          content: blogData.content,
        },
      });
      console.log(`Added new blog post: ${blogData.title}`);
    } else {
      console.log(`⚠️ Already exists: ${blogData.title}`);
    }
  }
};

module.exports = { syncBlogPosts, getBlogPostFiles, getBlogPostData };
