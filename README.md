# @usesofia/pegasus-ai-api-sdk@3.0.1

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @usesofia/pegasus-ai-api-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  AgentApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { ProcessingReplyRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new AgentApi();

  const body = {
    // AgentProcessingRequestBodyDto
    agentProcessingRequestBodyDto: ...,
  } satisfies ProcessingReplyRequest;

  try {
    const data = await api.processingReply(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentApi* | [**processingReply**](docs/AgentApi.md#processingreply) | **POST** /internal/agent/processing-reply | Gera mensagem falando que está processando a última solicitação do usuário.
*AgentApi* | [**reply**](docs/AgentApi.md#reply) | **POST** /internal/agent/reply | Responde a última mensagem enviada pelo usuário.
*BankTransactionsApi* | [**systemGetBestSuggestedAction**](docs/BankTransactionsApi.md#systemgetbestsuggestedaction) | **GET** /internal/bank-transactions/{bankTransactionId}/best-suggested-action | Gera a melhor ação sugerida para a transação bancária.
*BankTransactionsApi* | [**systemGetBestSuggestedActionByNewBankTransaction**](docs/BankTransactionsApi.md#systemgetbestsuggestedactionbynewbanktransaction) | **POST** /internal/organizations/{organizationId}/bank-transactions/best-suggested-action | Gera a melhor ação sugerida para uma nova transação bancária.
*CacheApi* | [**getCacheValue**](docs/CacheApi.md#getcachevalue) | **GET** /external/cache | Get string value from cache
*CacheApi* | [**setCacheValue**](docs/CacheApi.md#setcachevalue) | **PUT** /external/cache | Set string value in cache with 10-second TTL
*EmailForwardingIntegrationApi* | [**systemGenerateBestSuggestedAction**](docs/EmailForwardingIntegrationApi.md#systemgeneratebestsuggestedaction) | **POST** /internal/email-forwarding-integration/best-suggested-action | Gera a melhor ação sugerida para integração de encaminhamento de email.
*FinancialRecordsApi* | [**extractFinancialRecordFromFile**](docs/FinancialRecordsApi.md#extractfinancialrecordfromfile) | **POST** /external/financial-records/extract-from-file | Extrai os dados de lançamento financeiro a partir do arquivo.
*FinancialRecordsApi* | [**processFinancialRecordsBulkCreateExtractionForWebApp**](docs/FinancialRecordsApi.md#processfinancialrecordsbulkcreateextractionforwebapp) | **POST** /internal/queues/financial-records-bulk-create-extraction-for-web-app | Processa os dados do arquivo.
*FinancialRecordsApi* | [**startFinancialRecordsBulkCreateExtractionForWebApp**](docs/FinancialRecordsApi.md#startfinancialrecordsbulkcreateextractionforwebapp) | **POST** /external/financial-records/bulk-create-extraction-for-web-app/start | Inicia a extração de lançamentos financeiros em massa a partir do web app.
*HealthApi* | [**error**](docs/HealthApi.md#error) | **GET** /error | Gera um erro de teste.
*HealthApi* | [**health**](docs/HealthApi.md#health) | **GET** / | Verifica o status do serviço.
*HealthApi* | [**healthPost**](docs/HealthApi.md#healthpost) | **POST** / | Verifica o status do serviço.
*UsersApi* | [**findUserByMainId**](docs/UsersApi.md#finduserbymainid) | **POST** /internal/users/{mainId} | Encontra um usuário pelo ID no clerk.


### Models

- [AgentProcessingRequestBodyDto](docs/AgentProcessingRequestBodyDto.md)
- [AgentReplyEntity](docs/AgentReplyEntity.md)
- [AgentReplyEntityDocument](docs/AgentReplyEntityDocument.md)
- [AgentReplyEntityImage](docs/AgentReplyEntityImage.md)
- [AgentReplyEntityText](docs/AgentReplyEntityText.md)
- [AgentRequestBodyDto](docs/AgentRequestBodyDto.md)
- [AgentRequestBodyDtoMessageContext](docs/AgentRequestBodyDtoMessageContext.md)
- [BankTransactionsBestSuggestedActionEntity](docs/BankTransactionsBestSuggestedActionEntity.md)
- [BankTransactionsBestSuggestedActionEntityCreateData](docs/BankTransactionsBestSuggestedActionEntityCreateData.md)
- [BankTransactionsBestSuggestedActionEntityCreateDataFinancialRecord](docs/BankTransactionsBestSuggestedActionEntityCreateDataFinancialRecord.md)
- [BankTransactionsBestSuggestedActionEntityLinkData](docs/BankTransactionsBestSuggestedActionEntityLinkData.md)
- [CacheGetResponseDto](docs/CacheGetResponseDto.md)
- [CacheSetDto](docs/CacheSetDto.md)
- [EmailForwardingIntegrationBestSuggestedActionEntity](docs/EmailForwardingIntegrationBestSuggestedActionEntity.md)
- [EmailForwardingIntegrationBestSuggestedActionEntityCreateData](docs/EmailForwardingIntegrationBestSuggestedActionEntityCreateData.md)
- [EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData](docs/EmailForwardingIntegrationBestSuggestedActionEntityCreateManyData.md)
- [EmailForwardingIntegrationBestSuggestedActionEntityLinkData](docs/EmailForwardingIntegrationBestSuggestedActionEntityLinkData.md)
- [EmailForwardingIntegrationBestSuggestedActionEntityUpdateData](docs/EmailForwardingIntegrationBestSuggestedActionEntityUpdateData.md)
- [EmailForwardingIntegrationBestSuggestedActionEntityUpdateDataUpdateFields](docs/EmailForwardingIntegrationBestSuggestedActionEntityUpdateDataUpdateFields.md)
- [ExceptionResponseEntity](docs/ExceptionResponseEntity.md)
- [ExceptionResponseEntityErrorsInner](docs/ExceptionResponseEntityErrorsInner.md)
- [ExtractFinancialRecordFromFileRequestBodyDto](docs/ExtractFinancialRecordFromFileRequestBodyDto.md)
- [FinancialRecordEntity](docs/FinancialRecordEntity.md)
- [FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity](docs/FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity.md)
- [GenerateBestSuggestedActionRequestBodyDto](docs/GenerateBestSuggestedActionRequestBodyDto.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContext](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContext.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted.md)
- [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageToolCallsInner](docs/GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageToolCallsInner.md)
- [HealthResponseDto](docs/HealthResponseDto.md)
- [JobRequestPayloadEntity](docs/JobRequestPayloadEntity.md)
- [StartBulkCreateExtractionForWebAppRequestBodyDto](docs/StartBulkCreateExtractionForWebAppRequestBodyDto.md)
- [StartBulkCreateExtractionForWebAppRequestBodyDtoFile](docs/StartBulkCreateExtractionForWebAppRequestBodyDtoFile.md)
- [UserEntity](docs/UserEntity.md)
- [UserEntityAvailableOrganizationsInner](docs/UserEntityAvailableOrganizationsInner.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0.1`
- Package version: `3.0.1`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
