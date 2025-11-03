
# GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage


## Properties

Name | Type
------------ | -------------
`id` | string
`from` | [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom.md)
`timestamp` | string
`content` | string
`files` | [Array&lt;GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner&gt;](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner.md)
`quoted` | [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted.md)
`toolCalls` | [Array&lt;GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageToolCallsInner&gt;](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageToolCallsInner.md)

## Example

```typescript
import type { GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "from": null,
  "timestamp": null,
  "content": null,
  "files": null,
  "quoted": null,
  "toolCalls": null,
} satisfies GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


