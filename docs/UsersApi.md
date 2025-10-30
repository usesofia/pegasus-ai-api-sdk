# UsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findUserByMainId**](UsersApi.md#finduserbymainid) | **POST** /internal/users/{mainId} | Encontra um usuário pelo ID no clerk. |



## findUserByMainId

> UserEntity findUserByMainId(mainId)

Encontra um usuário pelo ID no clerk.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { FindUserByMainIdRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new UsersApi();

  const body = {
    // string | O ID do usuário no clerk.
    mainId: mainId_example,
  } satisfies FindUserByMainIdRequest;

  try {
    const data = await api.findUserByMainId(body);
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
| **mainId** | `string` | O ID do usuário no clerk. | [Defaults to `undefined`] |

### Return type

[**UserEntity**](UserEntity.md)

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

