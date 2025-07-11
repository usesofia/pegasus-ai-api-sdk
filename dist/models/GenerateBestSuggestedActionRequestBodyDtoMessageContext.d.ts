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
import type { GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage } from './GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage';
/**
 *
 * @export
 * @interface GenerateBestSuggestedActionRequestBodyDtoMessageContext
 */
export interface GenerateBestSuggestedActionRequestBodyDtoMessageContext {
    /**
     * ID do chat.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContext
     */
    chatId: string;
    /**
     * Título do chat.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContext
     */
    chatTitle?: string | null;
    /**
     * Canal da mensagem.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContext
     */
    channel: GenerateBestSuggestedActionRequestBodyDtoMessageContextChannelEnum;
    /**
     *
     * @type {GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContext
     */
    currentMessage: GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage;
    /**
     *
     * @type {Array<GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage>}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContext
     */
    lastMessages: Array<GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage>;
}
/**
 * @export
 */
export declare const GenerateBestSuggestedActionRequestBodyDtoMessageContextChannelEnum: {
    readonly Whatsapp: "whatsapp";
    readonly Email: "email";
};
export type GenerateBestSuggestedActionRequestBodyDtoMessageContextChannelEnum = typeof GenerateBestSuggestedActionRequestBodyDtoMessageContextChannelEnum[keyof typeof GenerateBestSuggestedActionRequestBodyDtoMessageContextChannelEnum];
/**
 * Check if a given object implements the GenerateBestSuggestedActionRequestBodyDtoMessageContext interface.
 */
export declare function instanceOfGenerateBestSuggestedActionRequestBodyDtoMessageContext(value: object): value is GenerateBestSuggestedActionRequestBodyDtoMessageContext;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextFromJSON(json: any): GenerateBestSuggestedActionRequestBodyDtoMessageContext;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateBestSuggestedActionRequestBodyDtoMessageContext;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextToJSON(json: any): GenerateBestSuggestedActionRequestBodyDtoMessageContext;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextToJSONTyped(value?: GenerateBestSuggestedActionRequestBodyDtoMessageContext | null, ignoreDiscriminator?: boolean): any;
