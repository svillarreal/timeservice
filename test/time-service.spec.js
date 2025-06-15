import { expect } from "chai";
import { TimeService } from "../src/time-service.js";
describe('TimeService', () => {
    const timeService = new TimeService();
    it('When time is requested then formatted time is properly returned with hours, mins and seconds in ISO format', async () => {
        const retVal = timeService.getTime();
        expect(retVal.length).eq(24);
    });
});
//# sourceMappingURL=time-service.spec.js.map