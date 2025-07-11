/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData
 */
export interface EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData {
    /**
     * 
     * @type {string}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData
     */
    fileId: string;
    /**
     * 
     * @type {number}
     * @memberof EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData
     */
    nRows: number;
}

/**
 * Check if a given object implements the EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData interface.
 */
export function instanceOfEmailForwardingIntegrationBestSuggestedActionEntityCreateManyData(value: object): value is EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    if (!('nRows' in value) || value['nRows'] === undefined) return false;
    return true;
}

export function EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataFromJSON(json: any): EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData {
    return EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataFromJSONTyped(json, false);
}

export function EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
        'nRows': json['nRows'],
    };
}

export function EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataToJSON(json: any): EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData {
    return EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataToJSONTyped(json, false);
}

export function EmailForwardingIntegrationBestSuggestedActionEntityCreateManyDataToJSONTyped(value?: EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileId': value['fileId'],
        'nRows': value['nRows'],
    };
}

