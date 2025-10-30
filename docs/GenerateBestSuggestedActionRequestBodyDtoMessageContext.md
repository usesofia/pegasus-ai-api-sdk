
# GenerateBestSuggestedActionRequestBodyDtoMessageContext


## Properties

Name | Type
------------ | -------------
`chatId` | string
`chatTitle` | string
`channel` | string
`currentMessage` | [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage.md)
`lastMessages` | [Array&lt;GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage&gt;](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessage.md)

## Example

```typescript
import type { GenerateBestSuggestedActionRequestBodyDtoMessageContext } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "chatId": null,
  "chatTitle": null,
  "channel": null,
  "currentMessage": null,
  "lastMessages": null,
} satisfies GenerateBestSuggestedActionRequestBodyDtoMessageContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateBestSuggestedActionRequestBodyDtoMessageContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


