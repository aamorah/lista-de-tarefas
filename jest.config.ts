import type { Config } from "jest";
import nextJest from "next/jest.js";

// Integra o Jest com o Next.js
const createJestConfig = nextJest({
  dir: "./",
});

// Configurações personalizadas
const config: Config = {
  coverageProvider: "v8",

  // Simula o ambiente do navegador
  testEnvironment: "jsdom",

  // Carrega configurações antes dos testes
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Reconhece nosso alias de importação
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
