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
 * @interface FinancialRecordEntity
 */
export interface FinancialRecordEntity {
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    direction: FinancialRecordEntityDirectionEnum;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    dueDate: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    contact: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    subcategory: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    account?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FinancialRecordEntity
     */
    concluded: boolean;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    cashDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    discount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    finesAndInterests?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    boletoCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    pixCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialRecordEntity
     */
    pixKey?: string | null;
}


/**
 * @export
 */
export const FinancialRecordEntityDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type FinancialRecordEntityDirectionEnum = typeof FinancialRecordEntityDirectionEnum[keyof typeof FinancialRecordEntityDirectionEnum];


/**
 * Check if a given object implements the FinancialRecordEntity interface.
 */
export function instanceOfFinancialRecordEntity(value: object): value is FinancialRecordEntity {
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('dueDate' in value) || value['dueDate'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('contact' in value) || value['contact'] === undefined) return false;
    if (!('subcategory' in value) || value['subcategory'] === undefined) return false;
    if (!('concluded' in value) || value['concluded'] === undefined) return false;
    return true;
}

export function FinancialRecordEntityFromJSON(json: any): FinancialRecordEntity {
    return FinancialRecordEntityFromJSONTyped(json, false);
}

export function FinancialRecordEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialRecordEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'direction': json['direction'],
        'amount': json['amount'],
        'dueDate': json['dueDate'],
        'description': json['description'],
        'contact': json['contact'],
        'subcategory': json['subcategory'],
        'account': json['account'] == null ? undefined : json['account'],
        'concluded': json['concluded'],
        'cashDate': json['cashDate'] == null ? undefined : json['cashDate'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'finesAndInterests': json['finesAndInterests'] == null ? undefined : json['finesAndInterests'],
        'boletoCode': json['boletoCode'] == null ? undefined : json['boletoCode'],
        'pixCode': json['pixCode'] == null ? undefined : json['pixCode'],
        'pixKey': json['pixKey'] == null ? undefined : json['pixKey'],
    };
}

export function FinancialRecordEntityToJSON(json: any): FinancialRecordEntity {
    return FinancialRecordEntityToJSONTyped(json, false);
}

export function FinancialRecordEntityToJSONTyped(value?: FinancialRecordEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'direction': value['direction'],
        'amount': value['amount'],
        'dueDate': value['dueDate'],
        'description': value['description'],
        'contact': value['contact'],
        'subcategory': value['subcategory'],
        'account': value['account'],
        'concluded': value['concluded'],
        'cashDate': value['cashDate'],
        'discount': value['discount'],
        'finesAndInterests': value['finesAndInterests'],
        'boletoCode': value['boletoCode'],
        'pixCode': value['pixCode'],
        'pixKey': value['pixKey'],
    };
}

