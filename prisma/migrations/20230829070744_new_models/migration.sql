-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "providerType" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "accessTokenExpires" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tontine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "reglementInterieur" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    CONSTRAINT "Tontine_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Membre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "tontineId" INTEGER NOT NULL,
    "function" TEXT NOT NULL DEFAULT 'membre',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Membre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Membre_tontineId_fkey" FOREIGN KEY ("tontineId") REFERENCES "Tontine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invitation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "tontineId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Invitation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invitation_tontineId_fkey" FOREIGN KEY ("tontineId") REFERENCES "Tontine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Election" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "creatorId" TEXT NOT NULL,
    "tontineId" INTEGER NOT NULL,
    "terme" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dateFinCandature" DATETIME NOT NULL,
    "dateDebutVote" DATETIME NOT NULL,
    "dateFinVote" DATETIME NOT NULL,
    CONSTRAINT "Election_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Election_tontineId_fkey" FOREIGN KEY ("tontineId") REFERENCES "Tontine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Candidat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "electionId" INTEGER NOT NULL,
    "nombreVoix" INTEGER NOT NULL,
    "posteCandidate" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Candidat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Candidat_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "candidatId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "Candidat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cotisation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idTontine" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "montant" INTEGER NOT NULL,
    "cycle" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cotisation_idTontine_fkey" FOREIGN KEY ("idTontine") REFERENCES "Tontine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cotisation_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CotisationMembre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cotisationId" TEXT NOT NULL,
    "membreId" TEXT NOT NULL,
    "nombrePart" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CotisationMembre_cotisationId_fkey" FOREIGN KEY ("cotisationId") REFERENCES "Cotisation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CotisationMembre_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cotisationId" TEXT NOT NULL,
    "membreId" TEXT NOT NULL,
    "nombrePart" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Contribution_cotisationId_fkey" FOREIGN KEY ("cotisationId") REFERENCES "Cotisation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contribution_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reunion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tontineId" INTEGER NOT NULL,
    "dateReunion" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "creatorId" TEXT NOT NULL,
    CONSTRAINT "Reunion_tontineId_fkey" FOREIGN KEY ("tontineId") REFERENCES "Tontine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reunion_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ParticipantReunion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reunionId" TEXT NOT NULL,
    "membreId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ParticipantReunion_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ParticipantReunion_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rapport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reunionId" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Rapport_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rapport_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_providerId_providerAccountId_key" ON "Account"("providerId", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Session_accessToken_key" ON "Session"("accessToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_token_key" ON "VerificationRequest"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_identifier_token_key" ON "VerificationRequest"("identifier", "token");
