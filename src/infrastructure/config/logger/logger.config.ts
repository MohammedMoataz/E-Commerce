import { format, transports } from "winston";

export const winstonConfig = {
    transports: [
        // Transport for all logs
        new transports.File({
            filename: "src/logs/all.log",
            format: format.combine(
                format.timestamp(), // Add timestamp
                format.printf((info) => `${info.timestamp} | ${info.level} | ${info.message}`), // Custom format
            ),
        }),
        // Transport for error logs
        new transports.File({
            filename: "src/logs/error.log",
            level: "error", // Only log errors
            format: format.combine(
                format.timestamp(), // Add timestamp
                format.errors({ stack: true }), // Include stack traces for errors
                format.printf((err) => {
                    if (err.stack) {
                        return `${err.timestamp} | ${err.level} | ${err.message}\n${err.stack}`; // Include stack trace
                    }
                    return `${err.timestamp} | ${err.level} | ${err.message}`; // Default format
                }),
            ),
        }),
    ],
};