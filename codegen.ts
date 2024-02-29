import { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const addTypenames = process.argv.includes("--add-typenames");

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations"], documentTransforms: [ ...(addTypenames ? [addTypenameSelectionDocumentTransform] : [])] },
  },
};

export default config;
