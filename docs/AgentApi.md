# AgentApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processingReply**](AgentApi.md#processingreply) | **POST** /internal/agent/processing-reply | Gera mensagem falando que está processando a última solicitação do usuário. |
| [**reply**](AgentApi.md#reply) | **POST** /internal/agent/reply | Responde a última mensagem enviada pelo usuário. |



## processingReply

> AgentReplyEntity processingReply(agentProcessingRequestBodyDto)

Gera mensagem falando que está processando a última solicitação do usuário.

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentProcessingRequestBodyDto** | [AgentProcessingRequestBodyDto](AgentProcessingRequestBodyDto.md) |  | |

### Return type

[**AgentReplyEntity**](AgentReplyEntity.md)

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


## reply

> Array&lt;AgentReplyEntity&gt; reply(agentRequestBodyDto)

Responde a última mensagem enviada pelo usuário.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '@usesofia/pegasus-ai-api-sdk';
import type { ReplyRequest } from '@usesofia/pegasus-ai-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-ai-api-sdk SDK...");
  const api = new AgentApi();

  const body = {
    // AgentRequestBodyDto
    agentRequestBodyDto: ...,
  } satisfies ReplyRequest;

  try {
    const data = await api.reply(body);
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
| **agentRequestBodyDto** | [AgentRequestBodyDto](AgentRequestBodyDto.md) |  | |

### Return type

[**Array&lt;AgentReplyEntity&gt;**](AgentReplyEntity.md)

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

