import fs from "fs";
import path from "path";

const brainDir = "C:\\Users\\User\\.gemini\\antigravity\\brain";
let results = [];

try {
  const folders = fs.readdirSync(brainDir);
  folders.forEach((folder) => {
    const transcriptPath = path.join(
      brainDir,
      folder,
      ".system_generated",
      "logs",
      "transcript.jsonl",
    );
    if (fs.existsSync(transcriptPath)) {
      const content = fs.readFileSync(transcriptPath, "utf8");
      const lines = content.split("\n");
      lines.forEach((line) => {
        if (!line.trim()) return;
        try {
          const obj = JSON.parse(line);
          if (obj.type === "USER_INPUT" && obj.content) {
            const lowerContent = obj.content.toLowerCase();
            if (
              lowerContent.includes("login") ||
              lowerContent.includes("register") ||
              lowerContent.includes("signup") ||
              lowerContent.includes("google")
            ) {
              results.push(`[Folder: ${folder}] [Step: ${obj.step_index}]`);
              results.push(obj.content);
              results.push("==================================================");
            }
          }
        } catch (e) {}
      });
    }
  });

  fs.writeFileSync("scratch_search_auth_requests.txt", results.join("\n"));
  console.log(
    `Found ${results.length / 3} matching requests and saved to scratch_search_auth_requests.txt`,
  );
} catch (e) {
  console.error(e);
}
