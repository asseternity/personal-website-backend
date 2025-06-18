const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getIncrementCV = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { CVdownloads: metricsData.CVdownloads + 1 },
    });
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

const getIncrementGH = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { gitHubClicks: metricsData.gitHubClicks + 1 },
    });
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

const getIncrementLI = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({
      where: {},
    });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { linkedInClicks: metricsData.linkedInClicks + 1 },
    });
    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

getIncrementLounge = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({ where: {} });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { loungeClicks: metricsData.loungeClicks + 1 },
    });
  } catch (err) {
    return next(err);
  }
};

getIncrementViva = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({ where: {} });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { loungeClicks: metricsData.vivaClicks + 1 },
    });
  } catch (err) {
    return next(err);
  }
};

getIncrementTextRPG = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({ where: {} });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { loungeClicks: metricsData.textrpgClicks + 1 },
    });
  } catch (err) {
    return next(err);
  }
};

getIncrementMapQuic = async (req, res, next) => {
  try {
    let metricsData = await prisma.metrics.findFirst({ where: {} });
    if (!metricsData) {
      metricsData = await prisma.metrics.create({
        data: {
          CVdownloads: 0,
          gitHubClicks: 0,
          linkedInClicks: 0,
          loungeClicks: 0,
          vivaClicks: 0,
          textrpgClicks: 0,
          mapquizClicks: 0,
        },
      });
    }
    await prisma.metrics.update({
      where: { id: metricsData.id },
      data: { loungeClicks: metricsData.mapquizClicks + 1 },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getIncrementCV,
  getIncrementGH,
  getIncrementLI,
  getIncrementLounge,
  getIncrementViva,
  getIncrementTextRPG,
  getIncrementMapQuic,
};
