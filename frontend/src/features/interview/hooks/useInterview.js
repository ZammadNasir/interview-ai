import { useContext } from "react";
import {
  generateInterviewReport,
  getAllInterviewReports,
  getInterviewReportById,
} from "../services/interview.api";
import InterviewContext from "../interview.context";

export const useInterview = () => {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used within InterviewProvider");
  }

  const { loading, setLoading, report, setReport, reports, setReports } =
    context;

  const generateReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);
    try {
      const data = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      setReport(data.interviewReport);
      setReports((prev) => [data.interviewReport, ...prev]);
      return data.interviewReport;
    } catch (error) {
      console.error("Error generating interview report:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getReportById = async (interviewId) => {
    setLoading(true);
    try {
      const data = await getInterviewReportById(interviewId);
      setReport(data);
      return data;
    } catch (error) {
      console.error("Error fetching interview report:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getReports = async () => {
    setLoading(true);
    try {
      const data = await getAllInterviewReports();
      setReports(data);
      return data;
    } catch (error) {
      console.error("Error fetching interview reports:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    report,
    setReport,
    reports,
    setReports,
    generateReport,
    getReportById,
    getReports,
  };
};
