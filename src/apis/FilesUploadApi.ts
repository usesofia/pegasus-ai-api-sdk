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


import * as runtime from '../runtime';
import type {
  ConfirmFileUploadRequestBodyDto,
  CreateFileUpload200Response,
  CreateFileUploadRequestBodyDto,
  ExceptionResponseEntity,
  FileEntity,
} from '../models/index';
import {
    ConfirmFileUploadRequestBodyDtoFromJSON,
    ConfirmFileUploadRequestBodyDtoToJSON,
    CreateFileUpload200ResponseFromJSON,
    CreateFileUpload200ResponseToJSON,
    CreateFileUploadRequestBodyDtoFromJSON,
    CreateFileUploadRequestBodyDtoToJSON,
    ExceptionResponseEntityFromJSON,
    ExceptionResponseEntityToJSON,
    FileEntityFromJSON,
    FileEntityToJSON,
} from '../models/index';

export interface ConfirmFileUploadRequest {
    confirmFileUploadRequestBodyDto: ConfirmFileUploadRequestBodyDto;
}

export interface CreateFileUploadRequest {
    createFileUploadRequestBodyDto: CreateFileUploadRequestBodyDto;
}

/**
 * FilesUploadApi - interface
 * 
 * @export
 * @interface FilesUploadApiInterface
 */
export interface FilesUploadApiInterface {
    /**
     * 
     * @summary Confirms a file upload
     * @param {ConfirmFileUploadRequestBodyDto} confirmFileUploadRequestBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesUploadApiInterface
     */
    confirmFileUploadRaw(requestParameters: ConfirmFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileEntity>>;

    /**
     * Confirms a file upload
     */
    confirmFileUpload(requestParameters: ConfirmFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileEntity>;

    /**
     * 
     * @summary Cria uma nova solicitação de upload de arquivo
     * @param {CreateFileUploadRequestBodyDto} createFileUploadRequestBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesUploadApiInterface
     */
    createFileUploadRaw(requestParameters: CreateFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateFileUpload200Response>>;

    /**
     * Cria uma nova solicitação de upload de arquivo
     */
    createFileUpload(requestParameters: CreateFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateFileUpload200Response>;

}

/**
 * 
 */
export class FilesUploadApi extends runtime.BaseAPI implements FilesUploadApiInterface {

    /**
     * Confirms a file upload
     */
    async confirmFileUploadRaw(requestParameters: ConfirmFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileEntity>> {
        if (requestParameters['confirmFileUploadRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'confirmFileUploadRequestBodyDto',
                'Required parameter "confirmFileUploadRequestBodyDto" was null or undefined when calling confirmFileUpload().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/files/upload/confirm`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConfirmFileUploadRequestBodyDtoToJSON(requestParameters['confirmFileUploadRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileEntityFromJSON(jsonValue));
    }

    /**
     * Confirms a file upload
     */
    async confirmFileUpload(requestParameters: ConfirmFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileEntity> {
        const response = await this.confirmFileUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Cria uma nova solicitação de upload de arquivo
     */
    async createFileUploadRaw(requestParameters: CreateFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateFileUpload200Response>> {
        if (requestParameters['createFileUploadRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'createFileUploadRequestBodyDto',
                'Required parameter "createFileUploadRequestBodyDto" was null or undefined when calling createFileUpload().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/files/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFileUploadRequestBodyDtoToJSON(requestParameters['createFileUploadRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateFileUpload200ResponseFromJSON(jsonValue));
    }

    /**
     * Cria uma nova solicitação de upload de arquivo
     */
    async createFileUpload(requestParameters: CreateFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateFileUpload200Response> {
        const response = await this.createFileUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
