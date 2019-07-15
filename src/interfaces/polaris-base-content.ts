export interface ExecutionMetadata {
    dataVersion?: number | null;
    debugDate?: Date | null;
}

export interface ExecutionResult {
    result: any;
    executionMetadata?: ExecutionMetadata;
}

export interface SoftDeleteConfiguration {
    allowSoftDelete?: boolean;
    softDeleteReturnEntities?: boolean;
}

export interface PolarisBaseContext {
    headers: PolarisRequestHeaders;
    softDeleteConfiguration?: SoftDeleteConfiguration;
    executionMetadata?: ExecutionMetadata;
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
