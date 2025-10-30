# FinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**extractFinancialRecordFromFile**](FinancialRecordsApi.md#extractfinancialrecordfromfile) | **POST** /external/financial-records/extract-from-file | Extrai os dados de lançamento financeiro a partir do arquivo. |
| [**processFinancialRecordsBulkCreateExtractionForWebApp**](FinancialRecordsApi.md#processfinancialrecordsbulkcreateextractionforwebapp) | **POST** /internal/queues/financial-records-bulk-create-extraction-for-web-app | Processa os dados do arquivo. |
| [**startFinancialRecordsBulkCreateExtractionForWebApp**](FinancialRecordsApi.md#startfinancialrecordsbulkcreateextractionforwebapp) | **POST** /external/financial-records/bulk-create-extraction-for-web-app/start | Inicia a extração de lançamentos financeiros em massa a partir do web app. |



## extractFinancialRecordFromFile

> FinancialRecordEntity extractFinancialRecordFromFile(extractFinancialRecordFromFileRequestBodyDto)

Extrai os dados de lançamento financeiro a partir do arquivo.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { ExtractFinancialRecordFromFileRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // ExtractFinancialRecordFromFileRequestBodyDto
    extractFinancialRecordFromFileRequestBodyDto: ...,
  } satisfies ExtractFinancialRecordFromFileRequest;

  try {
    const data = await api.extractFinancialRecordFromFile(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **extractFinancialRecordFromFileRequestBodyDto** | [ExtractFinancialRecordFromFileRequestBodyDto](ExtractFinancialRecordFromFileRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordEntity**](FinancialRecordEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processFinancialRecordsBulkCreateExtractionForWebApp

> processFinancialRecordsBulkCreateExtractionForWebApp(jobRequestPayloadEntity)

Processa os dados do arquivo.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { ProcessFinancialRecordsBulkCreateExtractionForWebAppRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // JobRequestPayloadEntity
    jobRequestPayloadEntity: ...,
  } satisfies ProcessFinancialRecordsBulkCreateExtractionForWebAppRequest;

  try {
    const data = await api.processFinancialRecordsBulkCreateExtractionForWebApp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobRequestPayloadEntity** | [JobRequestPayloadEntity](JobRequestPayloadEntity.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startFinancialRecordsBulkCreateExtractionForWebApp

> FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity startFinancialRecordsBulkCreateExtractionForWebApp(startBulkCreateExtractionForWebAppRequestBodyDto)

Inicia a extração de lançamentos financeiros em massa a partir do web app.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { StartFinancialRecordsBulkCreateExtractionForWebAppRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // StartBulkCreateExtractionForWebAppRequestBodyDto
    startBulkCreateExtractionForWebAppRequestBodyDto: ...,
  } satisfies StartFinancialRecordsBulkCreateExtractionForWebAppRequest;

  try {
    const data = await api.startFinancialRecordsBulkCreateExtractionForWebApp(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startBulkCreateExtractionForWebAppRequestBodyDto** | [StartBulkCreateExtractionForWebAppRequestBodyDto](StartBulkCreateExtractionForWebAppRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity**](FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

