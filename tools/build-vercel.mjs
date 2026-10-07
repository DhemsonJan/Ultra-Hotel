import { cpSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

rmSync(dist, { recursive: true, force: true });
cpSync(path.join(root, "public"), dist, { recursive: true });
cpSync(path.join(root, "shared"), path.join(dist, "shared"), { recursive: true });

console.log("[build] dist/ ready (public/ + shared/)");
