const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getScores = async (req, res, next) => {
  try {
    const scores = await prisma.score.findMany({
      orderBy: {
        score: "desc",
      },
      take: 5,
    });
    return res.status(200).json({ scores });
  } catch (error) {
    return next(error);
  }
};

const postCheckScore = async (req, res, next) => {
  const { score } = req.body;
  try {
    const topFive = await prisma.score.findMany({
      orderBy: { score: "desc" },
      take: 5,
    });
    if (score > topFive[4].score || topFive.length < 5) {
      return res.status(200).json({ topFive: true });
    } else {
      return res.status(200).json({ topFive: false });
    }
  } catch (err) {
    return next(error);
  }
};

const postNewScore = async (req, res, next) => {
  // for this middleware we assume that the new score is top 5
  const { username, score } = req.body;
  try {
    // 1) Fetch current top 5
    const topFive = await prisma.score.findMany({
      orderBy: { score: "desc" },
      take: 5,
    });

    // 2) Create the new score
    const created = await prisma.score.create({
      data: { username, score },
    });

    // 3) If there are already 5, delete the worst one
    if (topFive.length === 5) {
      await prisma.score.delete({
        where: { id: topFive[topFive.length - 1].id },
      });
    }

    // 4) Fetch new top 5
    const newTopFive = await prisma.score.findMany({
      orderBy: { score: "desc" },
      take: 5,
    });
    return res.status(200).json({ scores: newTopFive });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getScores, postCheckScore, postNewScore };
