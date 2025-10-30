
# UserEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`mainId` | string
`firstName` | string
`lastName` | string
`email` | string
`phone` | string
`avatarUrl` | string
`availableOrganizations` | [Array&lt;UserEntityAvailableOrganizationsInner&gt;](UserEntityAvailableOrganizationsInner.md)
`selectedOrganizationId` | string

## Example

```typescript
import type { UserEntity } from '@usesofia/pegasus-ai-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "mainId": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "phone": null,
  "avatarUrl": null,
  "availableOrganizations": null,
  "selectedOrganizationId": null,
} satisfies UserEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


