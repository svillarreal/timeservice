import { Router } from "express";
import { StatusCodes } from "http-status-codes";
export class Routes {
    router = Router();
    timeService;
    constructor(timeService) {
        this.timeService = timeService;
        this.router.get("/time", (req, res) => { this.doGetTime(req, res); });
    }
    doGetTime = async (req, res) => {
        const body = {
            timestamp: this.timeService.getTime(),
            ip: req.ip
        };
        res.status(StatusCodes.OK).json(body);
    };
}
//# sourceMappingURL=routes.js.map