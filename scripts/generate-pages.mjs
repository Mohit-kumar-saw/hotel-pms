import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { flattenNavItems } from "../lib/navigation.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const appDir = path.join(root, "app", "(dashboard)");

const routes = flattenNavItems().filter((r) => r.href !== "/dashboard");

const pageTemplate = (href) => `import { createPage } from "@/lib/create-page";

export default createPage("${href}");
`;

let created = 0;
for (const { href } of routes) {
  const relativePath = href.replace(/^\//, "");
  const dir = path.join(appDir, relativePath);
  const file = path.join(dir, "page.js");

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, pageTemplate(href));
  created++;
}

console.log(`Generated ${created} page files.`);
