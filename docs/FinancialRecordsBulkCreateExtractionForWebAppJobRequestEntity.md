
# FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`organizationId` | string
`file` | [StartBulkCreateExtractionForWebAppRequestBodyDtoFile](StartBulkCreateExtractionForWebAppRequestBodyDtoFile.md)
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "organizationId": null,
  "file": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordsBulkCreateExtractionForWebAppJobRequestEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


