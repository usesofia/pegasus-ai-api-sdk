# BankTransactionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**systemGetBestSuggestedAction**](BankTransactionsApi.md#systemgetbestsuggestedaction) | **GET** /internal/bank-transactions/{bankTransactionId}/best-suggested-action | Gera a melhor ação sugerida para a transação bancária. |
| [**systemGetBestSuggestedActionByNewBankTransaction**](BankTransactionsApi.md#systemgetbestsuggestedactionbynewbanktransaction) | **POST** /internal/organizations/{organizationId}/bank-transactions/best-suggested-action | Gera a melhor ação sugerida para uma nova transação bancária. |



## systemGetBestSuggestedAction

> BankTransactionsBestSuggestedActionEntity systemGetBestSuggestedAction(bankTransactionId)

Gera a melhor ação sugerida para a transação bancária.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { SystemGetBestSuggestedActionRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string
    bankTransactionId: bankTransactionId_example,
  } satisfies SystemGetBestSuggestedActionRequest;

  try {
    const data = await api.systemGetBestSuggestedAction(body);
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
| **bankTransactionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**BankTransactionsBestSuggestedActionEntity**](BankTransactionsBestSuggestedActionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemGetBestSuggestedActionByNewBankTransaction

> BankTransactionsBestSuggestedActionEntity systemGetBestSuggestedActionByNewBankTransaction(organizationId, requestBody)

Gera a melhor ação sugerida para uma nova transação bancária.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { SystemGetBestSuggestedActionByNewBankTransactionRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da organização
    organizationId: organizationId_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies SystemGetBestSuggestedActionByNewBankTransactionRequest;

  try {
    const data = await api.systemGetBestSuggestedActionByNewBankTransaction(body);
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
| **organizationId** | `string` | ID da organização | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

[**BankTransactionsBestSuggestedActionEntity**](BankTransactionsBestSuggestedActionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

