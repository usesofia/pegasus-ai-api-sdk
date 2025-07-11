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
exports.instanceOfAgentReplyEntityImage = instanceOfAgentReplyEntityImage;
exports.AgentReplyEntityImageFromJSON = AgentReplyEntityImageFromJSON;
exports.AgentReplyEntityImageFromJSONTyped = AgentReplyEntityImageFromJSONTyped;
exports.AgentReplyEntityImageToJSON = AgentReplyEntityImageToJSON;
exports.AgentReplyEntityImageToJSONTyped = AgentReplyEntityImageToJSONTyped;
/**
 * Check if a given object implements the AgentReplyEntityImage interface.
 */
function instanceOfAgentReplyEntityImage(value) {
    if (!('signedUrl' in value) || value['signedUrl'] === undefined)
        return false;
    if (!('mimeType' in value) || value['mimeType'] === undefined)
        return false;
    if (!('fileSize' in value) || value['fileSize'] === undefined)
        return false;
    return true;
}
function AgentReplyEntityImageFromJSON(json) {
    return AgentReplyEntityImageFromJSONTyped(json, false);
}
function AgentReplyEntityImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'signedUrl': json['signedUrl'],
        'mimeType': json['mimeType'],
        'caption': json['caption'] == null ? undefined : json['caption'],
        'fileSize': json['fileSize'],
    };
}
function AgentReplyEntityImageToJSON(json) {
    return AgentReplyEntityImageToJSONTyped(json, false);
}
function AgentReplyEntityImageToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'signedUrl': value['signedUrl'],
        'mimeType': value['mimeType'],
        'caption': value['caption'],
        'fileSize': value['fileSize'],
    };
}
