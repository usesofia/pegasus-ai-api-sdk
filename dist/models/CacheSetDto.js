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
exports.instanceOfCacheSetDto = instanceOfCacheSetDto;
exports.CacheSetDtoFromJSON = CacheSetDtoFromJSON;
exports.CacheSetDtoFromJSONTyped = CacheSetDtoFromJSONTyped;
exports.CacheSetDtoToJSON = CacheSetDtoToJSON;
exports.CacheSetDtoToJSONTyped = CacheSetDtoToJSONTyped;
/**
 * Check if a given object implements the CacheSetDto interface.
 */
function instanceOfCacheSetDto(value) {
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function CacheSetDtoFromJSON(json) {
    return CacheSetDtoFromJSONTyped(json, false);
}
function CacheSetDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'value': json['value'],
    };
}
function CacheSetDtoToJSON(json) {
    return CacheSetDtoToJSONTyped(json, false);
}
function CacheSetDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
    };
}
