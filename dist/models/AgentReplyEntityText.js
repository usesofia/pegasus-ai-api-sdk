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
exports.instanceOfAgentReplyEntityText = instanceOfAgentReplyEntityText;
exports.AgentReplyEntityTextFromJSON = AgentReplyEntityTextFromJSON;
exports.AgentReplyEntityTextFromJSONTyped = AgentReplyEntityTextFromJSONTyped;
exports.AgentReplyEntityTextToJSON = AgentReplyEntityTextToJSON;
exports.AgentReplyEntityTextToJSONTyped = AgentReplyEntityTextToJSONTyped;
/**
 * Check if a given object implements the AgentReplyEntityText interface.
 */
function instanceOfAgentReplyEntityText(value) {
    if (!('body' in value) || value['body'] === undefined)
        return false;
    return true;
}
function AgentReplyEntityTextFromJSON(json) {
    return AgentReplyEntityTextFromJSONTyped(json, false);
}
function AgentReplyEntityTextFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'body': json['body'],
        'enableLinkPreview': json['enableLinkPreview'] == null ? undefined : json['enableLinkPreview'],
    };
}
function AgentReplyEntityTextToJSON(json) {
    return AgentReplyEntityTextToJSONTyped(json, false);
}
function AgentReplyEntityTextToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'body': value['body'],
        'enableLinkPreview': value['enableLinkPreview'],
    };
}
