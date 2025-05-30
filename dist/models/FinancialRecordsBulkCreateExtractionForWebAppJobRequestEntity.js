"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfFinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity = instanceOfFinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity;
exports.FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSON = FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSON;
exports.FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSONTyped = FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSONTyped;
exports.FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSON = FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSON;
exports.FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSONTyped = FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSONTyped;
var StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1 = require("./StartBulkCreateExtractionForWebAppRequestBodyDtoFile");
/**
 * Check if a given object implements the FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity interface.
 */
function instanceOfFinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('userId' in value) || value['userId'] === undefined)
        return false;
    if (!('organizationId' in value) || value['organizationId'] === undefined)
        return false;
    if (!('file' in value) || value['file'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSON(json) {
    return FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSONTyped(json, false);
}
function FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'userId': json['userId'],
        'organizationId': json['organizationId'],
        'file': (0, StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1.StartBulkCreateExtractionForWebAppRequestBodyDtoFileFromJSON)(json['file']),
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}
function FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSON(json) {
    return FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSONTyped(json, false);
}
function FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntityToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'userId': value['userId'],
        'organizationId': value['organizationId'],
        'file': (0, StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1.StartBulkCreateExtractionForWebAppRequestBodyDtoFileToJSON)(value['file']),
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
