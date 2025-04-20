const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getIncrimentCV = async (req, res, next) => {
  try {
    const metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { CVdownloads: metricsData.CVdownloads + 1 },
    });
  } catch (error) {
    return next(error);
  }
};

const getIncrimentGH = async (req, res, next) => {
  try {
    const metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { gitHubClicks: metricsData.gitHubClicks + 1 },
    });
  } catch (error) {
    return next(error);
  }
};

const getIncrimentLI = async (req, res, next) => {
  try {
    const metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { linkedInClicks: metricsData.linkedInClicks + 1 },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getIncrimentCV, getIncrimentGH, getIncrimentLI };
