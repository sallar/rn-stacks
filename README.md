# @sallar/rn-stacks

Simple React Native Stack Helpers

## Installation

```sh
npm install @sallar/rn-stacks
```

## Usage

```jsx
import { HStack, VStack, Spacer, Box } from '@sallar/rn-stacks';

// ...

<Box p={16} fill>
  <VStack>
    <HStack justifyContent="space-between">
      <Text>HStack1</Text>
      <Text>HStack1</Text>
    </HStack>
    <HStack justifyContent="space-around">
      <Text>HStack2</Text>
      <Text>HStack2</Text>
    </HStack>
  </VStack>
  <Spacer />
  <VStack m={16}>
    <Text>Im going to bottom</Text>
  </VStack>
</Box>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
