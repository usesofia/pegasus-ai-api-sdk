
# AgentRequestBodyDto


## Properties

Name | Type
------------ | -------------
`mainUserId` | string
`files` | [Array&lt;StartBulkCreateExtractionForWebAppRequestBodyDtoFile&gt;](StartBulkCreateExtractionForWebAppRequestBodyDtoFile.md)
`messageContext` | [AgentRequestBodyDtoMessageContext](AgentRequestBodyDtoMessageContext.md)

## Example

```typescript
import type { AgentRequestBodyDto } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "mainUserId": null,
  "files": null,
  "messageContext": null,
} satisfies AgentRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


