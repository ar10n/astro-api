/*
  Warnings:

  - You are about to drop the column `contacts` on the `User` table. All the data in the column will be lost.
  - Added the required column `orderNumber` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "orderNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contacts",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT;
