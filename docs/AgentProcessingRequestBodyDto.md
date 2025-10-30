
# AgentProcessingRequestBodyDto


## Properties

Name | Type
------------ | -------------
`mainUserId` | string
`files` | [Array&lt;StartBulkCreateExtractionForWebAppRequestBodyDtoFile&gt;](StartBulkCreateExtractionForWebAppRequestBodyDtoFile.md)
`messageContext` | [AgentRequestBodyDtoMessageContext](AgentRequestBodyDtoMessageContext.md)
`latestProcessingReplies` | Array&lt;string&gt;

## Example

```typescript
import type { AgentProcessingRequestBodyDto } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "mainUserId": null,
  "files": null,
  "messageContext": null,
  "latestProcessingReplies": null,
} satisfies AgentProcessingRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentProcessingRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


