import { expect } from "chai";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import sinon, { SinonStubbedInstance } from "sinon";
import { mockReq, mockRes } from 'sinon-express-mock';
import { Routes } from "../src/routes.js";
import { TimeService } from "../src/time-service.js";
import { TimeResponse } from "../src/types/time-response.js";

describe('Routes', (): void => {

    const routes = new Routes(new TimeService());
    const req: Request = mockReq({
        ip: "127.0.0.1"
    });

    const res: SinonStubbedInstance<Response> = mockRes();

    it('When get time request happens then time and client IP is returned', async (): Promise<void> => {
        routes.doGetTime(req, res);
        expect(res.status.withArgs(StatusCodes.OK).calledOnce).to.equal(true);
        expect(res.json.calledOnce).to.equal(true);
        expect(res.json.calledWithMatch(sinon.match.has("timestamp", sinon.match.string)
            .and(sinon.match.has("ip", "127.0.0.1")))).to.equal(true);

    })
})