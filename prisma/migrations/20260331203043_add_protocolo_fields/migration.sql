/*
  Warnings:

  - You are about to drop the column `preco` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `protocolos` table. All the data in the column will be lost.
  - Added the required column `nome` to the `protocolos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_protocolos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "resultado_esperado" TEXT NOT NULL DEFAULT '',
    "clientes_atendidos" INTEGER NOT NULL DEFAULT 0,
    "preco_min" REAL NOT NULL DEFAULT 0,
    "preco_max" REAL NOT NULL DEFAULT 0,
    "frequencia" TEXT NOT NULL DEFAULT '',
    "categoria" TEXT NOT NULL DEFAULT 'OUTRO',
    "status" TEXT NOT NULL DEFAULT 'RASCUNHO',
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "duracao" INTEGER,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "imagemUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_protocolos" ("categoria", "conteudo", "createdAt", "descricao", "destaque", "duracao", "id", "imagemUrl", "slug", "status", "updatedAt") SELECT "categoria", "conteudo", "createdAt", "descricao", "destaque", "duracao", "id", "imagemUrl", "slug", "status", "updatedAt" FROM "protocolos";
DROP TABLE "protocolos";
ALTER TABLE "new_protocolos" RENAME TO "protocolos";
CREATE UNIQUE INDEX "protocolos_slug_key" ON "protocolos"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
