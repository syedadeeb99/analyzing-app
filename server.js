const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Define route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define route to handle CSV file and perform analysis
app.get('/analyze', (req, res) => {
  const results = [];

  fs.createReadStream('log_data.csv')
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      // Perform analysis on the data
      const analysisResult = performAnalysis(results);

      // Send analysis result as JSON response
      res.json({ analysisResult });
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      res.status(500).send('Internal Server Error');
    });
});

// Perform analysis on the data
function performAnalysis(data) {
  return {
    timestampAnalysis: analyzeTimestamp(data),
    logLevelAnalysis: analyzeLogLevel(data),
    logSourceAnalysis: analyzeLogSource(data),
    logTypeAnalysis: analyzeLogType(data),
    logSeverityAnalysis: analyzeLogSeverity(data),
    sourceIPAnalysis: analyzeSourceIP(data),
    destinationIPAnalysis: analyzeDestinationIP(data),
    errorCodeAnalysis: analyzeErrorCode(data),
    sessionIDAnalysis: analyzeSessionID(data),
    labelAnalysis: analyzeLabel(data),
    logSourceTypeAnalysis: analyzeLogSourceType(data),
    logActionAnalysis: analyzeLogAction(data),
    userRoleAnalysis: analyzeUserRole(data),
    logDurationAnalysis: analyzeLogDuration(data),
    logProcessAnalysis: analyzeLogProcess(data),
    logEventAnalysis: analyzeLogEvent(data),
    errorTypeAnalysis: analyzeErrorType(data),
    sessionDurationAnalysis: analyzeSessionDuration(data),
    userActivityAnalysis: analyzeUserActivity(data),
    // Add more analysis functions here
  };
}

// Function to analyze timestamps
function analyzeTimestamp(data) {
  const timestampCounts = {};
  data.forEach(entry => {
    const timestamp = new Date(entry.Timestamp);
    const hour = timestamp.getHours();
    timestampCounts[hour] = (timestampCounts[hour] || 0) + 1;
  });
  return timestampCounts;
}

// Function to analyze log levels
function analyzeLogLevel(data) {
  const logLevelCounts = {};
  data.forEach(entry => {
    const level = entry['Log Level'];
    logLevelCounts[level] = (logLevelCounts[level] || 0) + 1;
  });
  return logLevelCounts;
}

// Function to analyze log sources
function analyzeLogSource(data) {
  const logSourceCounts = {};
  data.forEach(entry => {
    const source = entry['Log Source'];
    logSourceCounts[source] = (logSourceCounts[source] || 0) + 1;
  });
  return logSourceCounts;
}

// Function to analyze log types
function analyzeLogType(data) {
  const logTypeCounts = {};
  data.forEach(entry => {
    const type = entry['Log Type'];
    logTypeCounts[type] = (logTypeCounts[type] || 0) + 1;
  });
  return logTypeCounts;
}

// Function to analyze log severities
function analyzeLogSeverity(data) {
  const logSeverityCounts = {};
  data.forEach(entry => {
    const severity = entry['Log Severity'];
    logSeverityCounts[severity] = (logSeverityCounts[severity] || 0) + 1;
  });
  return logSeverityCounts;
}

// Function to analyze source IPs
function analyzeSourceIP(data) {
  const sourceIPCounts = {};
  data.forEach(entry => {
    const sourceIP = entry['Source IP'];
    sourceIPCounts[sourceIP] = (sourceIPCounts[sourceIP] || 0) + 1;
  });
  return sourceIPCounts;
}

// Function to analyze destination IPs
function analyzeDestinationIP(data) {
  const destinationIPCounts = {};
  data.forEach(entry => {
    const destinationIP = entry['Destination IP'];
    destinationIPCounts[destinationIP] = (destinationIPCounts[destinationIP] || 0) + 1;
  });
  return destinationIPCounts;
}

// Function to analyze error codes
function analyzeErrorCode(data) {
  const errorCodeCounts = {};
  data.forEach(entry => {
    const errorCode = entry['Error Code'];
    errorCodeCounts[errorCode] = (errorCodeCounts[errorCode] || 0) + 1;
  });
  return errorCodeCounts;
}

// Function to analyze session IDs
function analyzeSessionID(data) {
  const sessionIDCounts = {};
  data.forEach(entry => {
    const sessionID = entry['Session ID'];
    sessionIDCounts[sessionID] = (sessionIDCounts[sessionID] || 0) + 1;
  });
  return sessionIDCounts;
}

// Function to analyze labels
function analyzeLabel(data) {
  const labelCounts = {};
  data.forEach(entry => {
    const label = entry['Label'];
    labelCounts[label] = (labelCounts[label] || 0) + 1;
  });
  return labelCounts;
}

// Function to analyze log source types
function analyzeLogSourceType(data) {
  const logSourceTypeCounts = {};
  data.forEach(entry => {
    const logSourceType = entry['Log Source Type'];
    logSourceTypeCounts[logSourceType] = (logSourceTypeCounts[logSourceType] || 0) + 1;
  });
  return logSourceTypeCounts;
}

// Function to analyze log actions
function analyzeLogAction(data) {
  const logActionCounts = {};
  data.forEach(entry => {
    const logAction = entry['Log Action'];
    logActionCounts[logAction] = (logActionCounts[logAction] || 0) + 1;
  });
  return logActionCounts;
}

// Function to analyze user roles
function analyzeUserRole(data) {
  const userRoleCounts = {};
  data.forEach(entry => {
    const userRole = entry['User Role'];
    userRoleCounts[userRole] = (userRoleCounts[userRole] || 0) + 1;
  });
  return userRoleCounts;
}

// Function to analyze log durations
function analyzeLogDuration(data) {
  const logDurationCounts = {};
  data.forEach(entry => {
    const logDuration = entry['Log Duration'];
    logDurationCounts[logDuration] = (logDurationCounts[logDuration] || 0) + 1;
  });
  return logDurationCounts;
}

// Function to analyze log processes
function analyzeLogProcess(data) {
  const logProcessCounts = {};
  data.forEach(entry => {
    const logProcess = entry['Log Process'];
    logProcessCounts[logProcess] = (logProcessCounts[logProcess] || 0) + 1;
  });
  return logProcessCounts;
}

// Function to analyze log events
function analyzeLogEvent(data) {
  const logEventCounts = {};
  data.forEach(entry => {
    const logEvent = entry['Log Event'];
    logEventCounts[logEvent] = (logEventCounts[logEvent] || 0) + 1;
  });
  return logEventCounts;
}

// Function to analyze error types
function analyzeErrorType(data) {
  const errorTypeCounts = {};
  data.forEach(entry => {
    const errorType = entry['Error Type'];
    errorTypeCounts[errorType] = (errorTypeCounts[errorType] || 0) + 1;
  });
  return errorTypeCounts;
}

// Function to analyze session durations
function analyzeSessionDuration(data) {
  const sessionDurationCounts = {};
  data.forEach(entry => {
    const sessionDuration = entry['Session Duration'];
    sessionDurationCounts[sessionDuration] = (sessionDurationCounts[sessionDuration] || 0) + 1;
  });
  return sessionDurationCounts;
}

// Function to analyze user activities
function analyzeUserActivity(data) {
  const userActivityCounts = {};
  data.forEach(entry => {
    const userActivity = entry['User Activity'];
    userActivityCounts[userActivity] = (userActivityCounts[userActivity] || 0) + 1;
  });
  return userActivityCounts;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
