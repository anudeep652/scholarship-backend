const fs = require("fs");
export const base64ToImage = (base64: string, id: string, index: number) => {
  const buffer = Buffer.from(base64.slice(22), "base64");
  const dir = `images/${id}`;

  if (!fs.existsSync("images")) {
    fs.mkdirSync("images");
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(dir + "/" + index + ".png", buffer);
};
