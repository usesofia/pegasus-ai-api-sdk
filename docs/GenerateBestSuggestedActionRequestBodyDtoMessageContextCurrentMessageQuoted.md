
# GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted

Mensagem citada.

## Properties

Name | Type
------------ | -------------
`id` | string
`timestamp` | string
`from` | [GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFrom.md)
`content` | string
`files` | [Array&lt;GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner&gt;](GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageFilesInner.md)

## Example

```typescript
import type { GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "timestamp": null,
  "from": null,
  "content": null,
  "files": null,
} satisfies GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateBestSuggestedActionRequestBodyDtoMessageContextCurrentMessageQuoted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


