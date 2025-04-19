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
    const { name, score } = req.body;
    await prisma.score.create({
      data: {
        name,
        score,
      },
    });
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
