import fg from "fast-glob";
import fs from "fs";
import path from "path";

const files = fg.sync("content/experiments/*.json");

const imports = files
  .map((file, i) => {
    const relative = "../../" + file.replace(/\\/g, "/");
    return `import exp${i} from "${relative}";`;
  })
  .join("\n");

const output = `
${imports}

const experiments = [
${files.map((_, i) => `  exp${i},`).join("\n")}
];

export default experiments;
`;

fs.writeFileSync(
  path.join("lib", "experiments", "generated.ts"),
  output
);

console.log(`Generated ${files.length} experiments.`);