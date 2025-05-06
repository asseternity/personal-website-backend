const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getScores = async (req, res, next) => {
  try {
    const scores = await prisma.score.findMany({
      orderBy: {
        score: "desc",
      },
      take: 10,
    });
    return res.status(200).json(scores);
  } catch (error) {
    return next(error);
  }
};
const postScore = async (req, res, next) => {
  try {
    const { username, score } = req.body;

    const existing = await prisma.score.findUnique({
      where: { username },
    });

    if (existing) {
      if (score > existing.score) {
        await prisma.score.update({
          where: { username },
          data: { score },
        });
      }
    } else {
      await prisma.score.create({
        data: {
          username,
          score,
        },
      });
    }
    const scores = await prisma.score.findMany({
      orderBy: {
        score: "desc",
      },
      take: 10,
    });
    return res.status(200).json(scores);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getScores, postScore };
