/**
 * Sofia Pegasus ai-api
 * Api do sistema Pegasus com endpoints para interação com os modelos de AI usados no sistema.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData } from './EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData';
import type { EmailForwardingIntegrationBestSuggestedActionEntityLinkData } from './EmailForwardingIntegrationBestSuggestedActionEntityLinkData';
import type { EmailForwardingIntegrationBestSuggestedActionEntityCreateData } from './EmailForwardingIntegrationBestSuggestedActionEntityCreateData';
import type { EmailForwardingIntegrationBestSuggestedActionEntityUpdateData } from './EmailForwardingIntegrationBestSuggestedActionEntityUpdateData';
/**
 *
 * @export
 * @interface EmailForwardingIntegrationBestSuggestedActionEntity
 */
export interface EmailForwardingIntegrationBestSuggestedActionEntity {
    /**
     *
     * @type {string}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntity
     */
    operation?: EmailForwardingIntegrationBestSuggestedActionEntityOperationEnum | null;
    /**
     *
     * @type {EmailForwardingIntegrationBestSuggestedActionEntityCreateData}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntity
     */
    createData?: EmailForwardingIntegrationBestSuggestedActionEntityCreateData | null;
    /**
     *
     * @type {EmailForwardingIntegrationBestSuggestedActionEntityUpdateData}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntity
     */
    updateData?: EmailForwardingIntegrationBestSuggestedActionEntityUpdateData | null;
    /**
     *
     * @type {EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntity
     */
    createManyData?: EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData | null;
    /**
     *
     * @type {EmailForwardingIntegrationBestSuggestedActionEntityLinkData}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntity
     */
    linkData?: EmailForwardingIntegrationBestSuggestedActionEntityLinkData | null;
}
/**
 * @export
 */
export declare const EmailForwardingIntegrationBestSuggestedActionEntityOperationEnum: {
    readonly Create: "CREATE";
    readonly Update: "UPDATE";
    readonly CreateMany: "CREATE_MANY";
    readonly Link: "LINK";
};
export type EmailForwardingIntegrationBestSuggestedActionEntityOperationEnum = typeof EmailForwardingIntegrationBestSuggestedActionEntityOperationEnum[keyof typeof EmailForwardingIntegrationBestSuggestedActionEntityOperationEnum];
/**
 * Check if a given object implements the EmailForwardingIntegrationBestSuggestedActionEntity interface.
 */
export declare function instanceOfEmailForwardingIntegrationBestSuggestedActionEntity(value: object): value is EmailForwardingIntegrationBestSuggestedActionEntity;
export declare function EmailForwardingIntegrationBestSuggestedActionEntityFromJSON(json: any): EmailForwardingIntegrationBestSuggestedActionEntity;
export declare function EmailForwardingIntegrationBestSuggestedActionEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailForwardingIntegrationBestSuggestedActionEntity;
export declare function EmailForwardingIntegrationBestSuggestedActionEntityToJSON(json: any): EmailForwardingIntegrationBestSuggestedActionEntity;
export declare function EmailForwardingIntegrationBestSuggestedActionEntityToJSONTyped(value?: EmailForwardingIntegrationBestSuggestedActionEntity | null, ignoreDiscriminator?: boolean): any;
