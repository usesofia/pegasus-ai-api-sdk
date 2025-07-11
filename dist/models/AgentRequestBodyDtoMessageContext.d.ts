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
 * O contexto da conversa da Sofia com o usuário.
 * @export
 * @interface AgentRequestBodyDtoMessageContext
 */
export interface AgentRequestBodyDtoMessageContext {
    /**
     * ID do chat.
     * @type {string}
     * @memberof AgentRequestBodyDtoMessageContext
     */
    chatId: string;
    /**
     * Título do chat.
     * @type {string}
     * @memberof AgentRequestBodyDtoMessageContext
     */
    chatTitle?: string | null;
    /**
     * Canal da mensagem.
     * @type {string}
     * @memberof AgentRequestBodyDtoMessageContext
     */
    channel: AgentRequestBodyDtoMessageContextChannelEnum;
    /**
     *
     * @type {GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage}
     * @memberof AgentRequestBodyDtoMessageContext
     */
    currentMessage: GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage;
    /**
     *
     * @type {Array<GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage>}
     * @memberof AgentRequestBodyDtoMessageContext
     */
    lastMessages: Array<GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage>;
}
/**
 * @export
 */
export declare const AgentRequestBodyDtoMessageContextChannelEnum: {
    readonly Whatsapp: "whatsapp";
    readonly Email: "email";
};
export type AgentRequestBodyDtoMessageContextChannelEnum = typeof AgentRequestBodyDtoMessageContextChannelEnum[keyof typeof AgentRequestBodyDtoMessageContextChannelEnum];
/**
 * Check if a given object implements the AgentRequestBodyDtoMessageContext interface.
 */
export declare function instanceOfAgentRequestBodyDtoMessageContext(value: object): value is AgentRequestBodyDtoMessageContext;
export declare function AgentRequestBodyDtoMessageContextFromJSON(json: any): AgentRequestBodyDtoMessageContext;
export declare function AgentRequestBodyDtoMessageContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentRequestBodyDtoMessageContext;
export declare function AgentRequestBodyDtoMessageContextToJSON(json: any): AgentRequestBodyDtoMessageContext;
export declare function AgentRequestBodyDtoMessageContextToJSONTyped(value?: AgentRequestBodyDtoMessageContext | null, ignoreDiscriminator?: boolean): any;
