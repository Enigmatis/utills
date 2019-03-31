export class QueryIrrelevantResult {
    result: any[];
    irrelevantEntities: string[];

    constructor(result: any[], irrelevantEntities: string[]) {
        this.result = result;
        this.irrelevantEntities = irrelevantEntities;
    }
}
