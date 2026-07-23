import fs from "node:fs";
import path from "node:path";

export default function Home() {
  const root = process.cwd();
  const source = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
  const body = source.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? "";

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
