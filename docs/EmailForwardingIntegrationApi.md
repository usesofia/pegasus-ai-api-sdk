# EmailForwardingIntegrationApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**systemGenerateBestSuggestedAction**](EmailForwardingIntegrationApi.md#systemgeneratebestsuggestedaction) | **POST** /internal/email-forwarding-integration/best-suggested-action | Gera a melhor ação sugerida para integração de encaminhamento de email. |



## systemGenerateBestSuggestedAction

> EmailForwardingIntegrationBestSuggestedActionEntity systemGenerateBestSuggestedAction(generateBestSuggestedActionRequestBodyDto)

Gera a melhor ação sugerida para integração de encaminhamento de email.

### Example

```ts
import {
  Configuration,
  EmailForwardingIntegrationApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { SystemGenerateBestSuggestedActionRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new EmailForwardingIntegrationApi();

  const body = {
    // GenerateBestSuggestedActionRequestBodyDto
    generateBestSuggestedActionRequestBodyDto: ...,
  } satisfies SystemGenerateBestSuggestedActionRequest;

  try {
    const data = await api.systemGenerateBestSuggestedAction(body);
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
| **generateBestSuggestedActionRequestBodyDto** | [GenerateBestSuggestedActionRequestBodyDto](GenerateBestSuggestedActionRequestBodyDto.md) |  | |

### Return type

[**EmailForwardingIntegrationBestSuggestedActionEntity**](EmailForwardingIntegrationBestSuggestedActionEntity.md)

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

