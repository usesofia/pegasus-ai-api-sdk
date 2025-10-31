
# AgentReplyEntity


## Properties

Name | Type
------------ | -------------
`document` | [AgentReplyEntityDocument](AgentReplyEntityDocument.md)
`image` | [AgentReplyEntityImage](AgentReplyEntityImage.md)
`text` | [AgentReplyEntityText](AgentReplyEntityText.md)
`toolCalls` | [Array&lt;AgentReplyEntityToolCallsInner&gt;](AgentReplyEntityToolCallsInner.md)
`markMessage` | boolean

## Example

```typescript
import type { AgentReplyEntity } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "document": null,
  "image": null,
  "text": null,
  "toolCalls": null,
  "markMessage": null,
} satisfies AgentReplyEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentReplyEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


