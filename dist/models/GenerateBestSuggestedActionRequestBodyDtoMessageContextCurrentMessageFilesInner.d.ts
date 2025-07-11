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
/**
 *
 * @export
 * @interface GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner
 */
export interface GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner {
    /**
     * Nome do arquivo.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner
     */
    name: string;
    /**
     * URL do arquivo.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner
     */
    url: string;
    /**
     * Tipo MIME do arquivo.
     * @type {string}
     * @memberof GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner
     */
    mimeType: string;
}
/**
 * Check if a given object implements the GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner interface.
 */
export declare function instanceOfGenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner(value: object): value is GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInnerFromJSON(json: any): GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInnerToJSON(json: any): GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner;
export declare function GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInnerToJSONTyped(value?: GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner | null, ignoreDiscriminator?: boolean): any;
