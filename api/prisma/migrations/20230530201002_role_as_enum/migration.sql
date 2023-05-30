/*
  Warnings:

  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_organization_role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `owner_id` to the `Organizations` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERADMIN', 'ADMIN', 'VENDEDOR');

-- DropForeignKey
ALTER TABLE "user_organization_role" DROP CONSTRAINT "user_organization_role_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "user_organization_role" DROP CONSTRAINT "user_organization_role_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_organization_role" DROP CONSTRAINT "user_organization_role_user_id_fkey";

-- AlterTable
ALTER TABLE "Organizations" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "user_organization_role";

-- CreateTable
CREATE TABLE "OrganizationRoles" (
    "id" VARCHAR(36) NOT NULL,
    "organization_id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "OrganizationRoles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationRoles_user_id_organization_id_key" ON "OrganizationRoles"("user_id", "organization_id");

-- AddForeignKey
ALTER TABLE "Organizations" ADD CONSTRAINT "Organizations_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationRoles" ADD CONSTRAINT "OrganizationRoles_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationRoles" ADD CONSTRAINT "OrganizationRoles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
