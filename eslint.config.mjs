import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// @ts-expect-error FlatCompat has incomplete types
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off" // Allow usage of 'any' type
    }
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
