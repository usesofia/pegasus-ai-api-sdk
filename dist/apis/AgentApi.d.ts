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
import * as runtime from '../runtime';
import type { AgentProcessingRequestBodyDto, AgentReplyEntity, AgentRequestBodyDto } from '../models/index';
export interface ProcessingReplyRequest {
    agentProcessingRequestBodyDto: AgentProcessingRequestBodyDto;
}
export interface ReplyRequest {
    agentRequestBodyDto: AgentRequestBodyDto;
}
/**
 * AgentApi - interface
 *
 * @export
 * @interface AgentApiInterface
 */
export interface AgentApiInterface {
    /**
     *
     * @summary Gera mensagem falando que está processando a última solicitação do usuário.
     * @param {AgentProcessingRequestBodyDto} agentProcessingRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiInterface
     */
    processingReplyRaw(requestParameters: ProcessingReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AgentReplyEntity>>;
    /**
     * Gera mensagem falando que está processando a última solicitação do usuário.
     */
    processingReply(requestParameters: ProcessingReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AgentReplyEntity>;
    /**
     *
     * @summary Responde a última mensagem enviada pelo usuário.
     * @param {AgentRequestBodyDto} agentRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiInterface
     */
    replyRaw(requestParameters: ReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AgentReplyEntity>>>;
    /**
     * Responde a última mensagem enviada pelo usuário.
     */
    reply(requestParameters: ReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AgentReplyEntity>>;
}
/**
 *
 */
export declare class AgentApi extends runtime.BaseAPI implements AgentApiInterface {
    /**
     * Gera mensagem falando que está processando a última solicitação do usuário.
     */
    processingReplyRaw(requestParameters: ProcessingReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AgentReplyEntity>>;
    /**
     * Gera mensagem falando que está processando a última solicitação do usuário.
     */
    processingReply(requestParameters: ProcessingReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AgentReplyEntity>;
    /**
     * Responde a última mensagem enviada pelo usuário.
     */
    replyRaw(requestParameters: ReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AgentReplyEntity>>>;
    /**
     * Responde a última mensagem enviada pelo usuário.
     */
    reply(requestParameters: ReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AgentReplyEntity>>;
}
