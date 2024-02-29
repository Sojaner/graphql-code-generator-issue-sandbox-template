import { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";
import { addTypenameSelectionDocumentTransform as fixedAddTypenameSelectionDocumentTransform } from "./add-typename-selection-document-transform";

const addTypenames = process.argv.includes("--add-typenames");

const addFixedTypenames = process.argv.includes("--add-fixed-typenames");

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations"], documentTransforms: [...(addTypenames ? [addTypenameSelectionDocumentTransform] : []), ...(addFixedTypenames ? [fixedAddTypenameSelectionDocumentTransform] : [])] },
  },
};

export default config;
