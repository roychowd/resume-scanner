import React, { useState } from "react";
import "./report-navigator.css";

import ReportSwitcher from "./ReportSwitcher/ReportSwitcher";

export default function ReportNavigator() {
  const [activeFeedback, updateActiveFeedback] = useState("prechecks");

  return (
    <div className="report-navigator-container">
      <ReportSwitcher
        activeFeedback={activeFeedback}
        updateActiveFeedback={updateActiveFeedback}
      />
      <ReportContent activeFeedback={activeFeedback} />
      <ResumeImage />
    </div>
  );
}

function ReportContent() {
  return (
    <div>
      <h2>Prechecks</h2>
      <div>
        <p>Great attention to naming!</p>
        <p>Great file naming. No errors are currently detected!</p>
      </div>
    </div>
  );
}

function ResumeImage() {
  return (
    <div className="report-resume-img-container">
      <img src="./img/sample-resume.png" className="report-resume-img" />
    </div>
  )
}