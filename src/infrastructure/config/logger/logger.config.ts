import { format, transports } from "winston";

export const winstonCofig = {
    transports: [
        new transports.File({
            filename: "src/logs/all.log",
            format: format.combine(
                format.timestamp(),
                format.simple(),
                format.printf(info => `${info.timestamp} | ${info.level} | ${info.message}`),
            ),
        }),
        new transports.File({
            filename: "src/logs/errors.log",
            format: format.errors({
                format: format.combine(
                    format.timestamp(),
                    format.simple(),
                    format.printf(err => `${err.timestamp} | ${err.level} | ${err.message}`),
                )
            }),
        })
    ]
}