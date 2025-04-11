import express from "express";
import archiver from "archiver";

const router = express.Router();

router.post("/download/portfolio", async (req, res) => {
  try {
    const { html, css, js } = req.body;

    const archive = archiver("zip", { zlib: { level: 9 } });

    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=portfolio.zip");

    archive.append(html, { name: "index.html" });
    if (css) archive.append(css, { name: "styles.css" });
    if (js) archive.append(js, { name: "script.js" });

    archive.pipe(res);
    archive.finalize();
  } catch (err) {
    console.error("ZIP error:", err);
    res.status(500).json({ error: "Failed to generate ZIP" });
  }
});

export default router;
