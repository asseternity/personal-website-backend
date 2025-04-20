-- CreateTable
CREATE TABLE "Metrics" (
    "id" SERIAL NOT NULL,
    "CVdownloads" INTEGER NOT NULL,
    "gitHubClicks" INTEGER NOT NULL,
    "linkedInClicks" INTEGER NOT NULL,

    CONSTRAINT "Metrics_pkey" PRIMARY KEY ("id")
);
