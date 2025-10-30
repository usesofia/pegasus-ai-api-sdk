
# AgentReplyEntityImage


## Properties

Name | Type
------------ | -------------
`signedUrl` | string
`mimeType` | string
`caption` | string
`fileSize` | number

## Example

```typescript
import type { AgentReplyEntityImage } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "signedUrl": null,
  "mimeType": null,
  "caption": null,
  "fileSize": null,
} satisfies AgentReplyEntityImage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentReplyEntityImage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


