
export class TimeService {

    getTime(): string {
        return new Date().toISOString();
    }

}