-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_protocolos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "descricao_curta" TEXT NOT NULL DEFAULT '',
    "conteudo" TEXT NOT NULL DEFAULT '',
    "resultado_esperado" TEXT NOT NULL DEFAULT '',
    "tipo" TEXT NOT NULL DEFAULT 'IV',
    "icone" TEXT NOT NULL DEFAULT '✨',
    "keywords" TEXT NOT NULL DEFAULT '[]',
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
INSERT INTO "new_protocolos" ("ativo", "categoria", "clientes_atendidos", "conteudo", "createdAt", "descricao", "destaque", "duracao", "frequencia", "icone", "id", "imagemUrl", "keywords", "nome", "preco_max", "preco_min", "resultado_esperado", "slug", "status", "tipo", "updatedAt") SELECT "ativo", "categoria", "clientes_atendidos", "conteudo", "createdAt", "descricao", "destaque", "duracao", "frequencia", "icone", "id", "imagemUrl", "keywords", "nome", "preco_max", "preco_min", "resultado_esperado", "slug", "status", "tipo", "updatedAt" FROM "protocolos";
DROP TABLE "protocolos";
ALTER TABLE "new_protocolos" RENAME TO "protocolos";
CREATE UNIQUE INDEX "protocolos_slug_key" ON "protocolos"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
