import { expect } from "chai";
import { StatusCodes } from "http-status-codes";
import sinon from "sinon";
import { mockReq, mockRes } from 'sinon-express-mock';
import { Routes } from "../src/routes.js";
import { TimeService } from "../src/time-service.js";

describe('Routes', () => {
    const routes = new Routes(new TimeService());
    const req = mockReq({
        ip: "127.0.0.1"
    });
    const res = mockRes();
    it('When get time request happens then time and client IP is returned', async () => {
        routes.doGetTime(req, res);
        expect(res.status.withArgs(StatusCodes.OK).calledOnce).to.equal(true);
        expect(res.json.calledOnce).to.equal(true);
        expect(res.json.calledWithMatch(sinon.match.has("timestamp", sinon.match.string)
            .and(sinon.match.has("ip", "127.0.0.1")))).to.equal(true);
    });
});
//# sourceMappingURL=routes.spec.js.map