export class QueryIrrelevantResult {
    relevantEntities: any[];
    irrelevantEntities: string[];

    constructor(relevantEntities: any[], irrelevantEntities: string[]) {
        this.relevantEntities = relevantEntities;
        this.irrelevantEntities = irrelevantEntities;
    }
}
