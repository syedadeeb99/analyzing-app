const fs = require('fs');
const csv = require('csv-parser');

// Variables to store analysis results
let totalLogEntries = 0;
const uniqueErrorCodes = new Set();
const logSeverityCounts = {};
const logLevelCounts = {};
const logTypeCounts = {};
const userActivityCounts = {};
let totalWords = 0;
let totalDigits = 0;
let positiveSentimentCount = 0;
let negativeSentimentCount = 0;

// Function to extract digits from text
function extractDigits(text) {
    if (!text) {
        return 0;
    }
    const digits = text.match(/\d/g);
    return digits ? digits.length : 0;
}

// Function to extract words from text
function extractWords(text) {
    if (!text) {
        return 0;
    }
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
}

// Function to perform sentiment analysis on log messages
function performSentimentAnalysis(logMessage) {
    // Dummy function for demonstration purposes
    // This function could be replaced with a real sentiment analysis algorithm
    return Math.random() > 0.5 ? 'Positive' : 'Negative';
}

// Read log data from CSV file and perform analyses
fs.createReadStream('log_data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Increment total log entries count
    totalLogEntries++;

    // Extract error code and add to unique error codes set
    const errorCode = row['Error Code'];
    uniqueErrorCodes.add(errorCode);

    // Count occurrences of log severity
    const logSeverity = row['Log Severity'];
    logSeverityCounts[logSeverity] = (logSeverityCounts[logSeverity] || 0) + 1;

    // Count occurrences of log level
    const logLevel = row['Log Level'];
    logLevelCounts[logLevel] = (logLevelCounts[logLevel] || 0) + 1;

    // Count occurrences of log type
    const logType = row['Log Type'];
    logTypeCounts[logType] = (logTypeCounts[logType] || 0) + 1;

    // Count occurrences of user activity
    const userActivity = row['User Activity'];
    userActivityCounts[userActivity] = (userActivityCounts[userActivity] || 0) + 1;

    // Calculate total words and digits
    totalWords += extractWords(row['Log Message']);
    totalDigits += extractDigits(row['Log Message']);

    // Perform sentiment analysis
    const sentiment = performSentimentAnalysis(row['Log Message']);
    if (sentiment === 'Positive') {
        positiveSentimentCount++;
    } else {
        negativeSentimentCount++;
    }
  })
  .on('end', () => {
    // Display analysis results
    console.log('Total number of log entries:', totalLogEntries);
    console.log('Unique error codes:', [...uniqueErrorCodes].join(','));
    console.log('Log severity counts:', logSeverityCounts);
    console.log('Log level counts:', logLevelCounts);
    console.log('Log type counts:', logTypeCounts);
    console.log('User activity counts:', userActivityCounts);
    console.log('Average number of words per log entry:', totalWords / totalLogEntries);
    console.log('Average number of digits per log entry:', totalDigits / totalLogEntries);
    console.log('Positive sentiment count:', positiveSentimentCount);
    console.log('Negative sentiment count:', negativeSentimentCount);
  });
