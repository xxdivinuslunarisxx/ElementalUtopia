import fg from "fast-glob";
import fs from "fs";
import path from "path";

const files = fg.sync("content/experiments/*.json");

// Validate optional photos: every photo needs alt text and an existing file
// in public/ (e.g. "photo": "/experiments/my-shot.jpg" -> public/experiments/my-shot.jpg).
type PhotoFields = { photo?: unknown; photoAlt?: unknown };

function checkPhoto(item: PhotoFields, where: string, errors: string[]) {
  if (item.photo === undefined || item.photo === "") return;
  if (typeof item.photo !== "string" || !item.photo.startsWith("/")) {
    errors.push(`${where}: "photo" must be a path starting with "/", e.g. "/experiments/shot.jpg".`);
    return;
  }
  if (typeof item.photoAlt !== "string" || item.photoAlt.trim() === "") {
    errors.push(`${where}: "photoAlt" (alt text) is required when "photo" is set.`);
  }
  if (!fs.existsSync(path.join("public", item.photo))) {
    errors.push(`${where}: photo file public${item.photo} not found.`);
  }
}

const errors: string[] = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  checkPhoto(data, file, errors);

  if (data.shots !== undefined) {
    if (!Array.isArray(data.shots)) {
      errors.push(`${file}: "shots" must be a list.`);
    } else {
      data.shots.forEach((shot: PhotoFields, i: number) =>
        checkPhoto(shot, `${file} shots[${i}]`, errors)
      );
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

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