-- CreateTable
CREATE TABLE "Persons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Persons_name_key" ON "Persons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Persons_email_key" ON "Persons"("email");
