import { PolarisLogProperties } from '@enigmatis/polaris-logs';

export interface GraphqlLogger<TContext> {
    fatal(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;

    error(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;

    warn(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;

    info(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;

    trace(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;

    debug(
        message: string,
        options?: {
            context?: TContext;
            polarisLogProperties?: PolarisLogProperties;
        },
    ): void;
}
