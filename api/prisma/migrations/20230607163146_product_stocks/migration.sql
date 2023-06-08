/*
  Warnings:

  - Added the required column `updateAt` to the `OrganizationRoles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('USADO', 'NUEVO');

-- DropForeignKey
ALTER TABLE "OrganizationRoles" DROP CONSTRAINT "OrganizationRoles_user_id_fkey";

-- AlterTable
ALTER TABLE "OrganizationRoles" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Inventories" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "organization_id" TEXT NOT NULL,
    "name" VARCHAR(400) NOT NULL,

    CONSTRAINT "Inventories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stocks" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "product_id" TEXT NOT NULL,
    "condition" "Condition" NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(400) NOT NULL,
    "barcode" VARCHAR(255) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "organization_id" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InventoriesToOrganizationRoles" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_product_id_condition_key" ON "Stocks"("product_id", "condition");

-- CreateIndex
CREATE UNIQUE INDEX "_InventoriesToOrganizationRoles_AB_unique" ON "_InventoriesToOrganizationRoles"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoriesToOrganizationRoles_B_index" ON "_InventoriesToOrganizationRoles"("B");

-- AddForeignKey
ALTER TABLE "OrganizationRoles" ADD CONSTRAINT "OrganizationRoles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventories" ADD CONSTRAINT "Inventories_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "Stocks_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoriesToOrganizationRoles" ADD CONSTRAINT "_InventoriesToOrganizationRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "Inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoriesToOrganizationRoles" ADD CONSTRAINT "_InventoriesToOrganizationRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "OrganizationRoles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
