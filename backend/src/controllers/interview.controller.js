import { createRequire } from "module";
import { PDFParse } from "pdf-parse";

import { generateInterviewReport } from "../services/ai.service.js";
import interviewReportModel from "../models/interviewRepoert.model.js";

const generateInterViewReportController = async (req, res) => {
  const resumeFile = req.file;

  try {
    // const resumeContent = await pdfParse(resumeFile.buffer);
    const resumeContent = new PDFParse({ data: resumeFile.buffer });

    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi,
    });

    res.status(201).json({
      message: "Interview report generated successfully",
      interviewReport,
    });
  } catch (error) {
    console.error("Error generating interview report:", error);
    res.status(500).json({ error: "Failed to generate interview report" });
  }
};

export { generateInterViewReportController };
