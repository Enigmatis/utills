export interface MongoConfiguration {
    allowSoftDelete?: boolean;
    softDeleteReturnEntities?: boolean;
}

export interface PolarisBaseContext {
    headers: PolarisRequestHeaders;
    mongoConfiguration?: MongoConfiguration;
}

export interface PolarisRequestHeaders {
    dataVersion?: number;
    isSnapshot?: boolean;
    includeLinkedOperation?: boolean;
    snapshotPageSize?: number;
    requestId?: string;
    upn?: string;
    eventKind?: string;
    realityId?: number;
    requestingSystemId?: string;
    requestingSystemName?: string;
}
