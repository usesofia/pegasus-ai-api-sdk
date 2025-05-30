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
exports.instanceOfExtractContactFromFileRequestBodyDto = instanceOfExtractContactFromFileRequestBodyDto;
exports.ExtractContactFromFileRequestBodyDtoFromJSON = ExtractContactFromFileRequestBodyDtoFromJSON;
exports.ExtractContactFromFileRequestBodyDtoFromJSONTyped = ExtractContactFromFileRequestBodyDtoFromJSONTyped;
exports.ExtractContactFromFileRequestBodyDtoToJSON = ExtractContactFromFileRequestBodyDtoToJSON;
exports.ExtractContactFromFileRequestBodyDtoToJSONTyped = ExtractContactFromFileRequestBodyDtoToJSONTyped;
var StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1 = require("./StartBulkCreateExtractionForWebAppRequestBodyDtoFile");
/**
 * Check if a given object implements the ExtractContactFromFileRequestBodyDto interface.
 */
function instanceOfExtractContactFromFileRequestBodyDto(value) {
    if (!('file' in value) || value['file'] === undefined)
        return false;
    return true;
}
function ExtractContactFromFileRequestBodyDtoFromJSON(json) {
    return ExtractContactFromFileRequestBodyDtoFromJSONTyped(json, false);
}
function ExtractContactFromFileRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'file': (0, StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1.StartBulkCreateExtractionForWebAppRequestBodyDtoFileFromJSON)(json['file']),
    };
}
function ExtractContactFromFileRequestBodyDtoToJSON(json) {
    return ExtractContactFromFileRequestBodyDtoToJSONTyped(json, false);
}
function ExtractContactFromFileRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'file': (0, StartBulkCreateExtractionForWebAppRequestBodyDtoFile_1.StartBulkCreateExtractionForWebAppRequestBodyDtoFileToJSON)(value['file']),
    };
}
