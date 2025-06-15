import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { TimeService } from "./time-service.js";
import { TimeResponse } from "./types/time-response.js";

export class Routes {

    private router = Router();
    private timeService: TimeService;

    constructor(timeService: TimeService) {
        this.timeService = timeService;
        this.router.get("/time", (req: Request, res: Response) => { this.doGetTime(req, res) });
    }

    doGetTime = async (req: Request, res: Response): Promise<void> => {
        const body: TimeResponse = {
            timestamp: this.timeService.getTime(),
            ip: req.ip ? req.ip.replace("::ffff:", '') : req.ip
        };
        res.status(StatusCodes.OK).json(body);
    }

}