import Reports from "../models/reports.js";

export const filteredReports = async(req, res) => {
    try {
        const reports = await Reports.find({ status: req.params.status });

        return res.status(200).json({
            message: `List of Reports with status ${req.params.status}`,
            reports: reports
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};