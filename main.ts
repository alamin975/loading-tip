import * as fs from "node:fs";
import * as path from "node:path";

// The tip below must stay byte-for-byte: one line, no trailing newline.
const LINE = "Tip: press any key to continue waiting. The bar is not stuck — it is thinking about your life choices.";

function writeEntry(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), LINE, { encoding: "utf8" });
}

writeEntry();
