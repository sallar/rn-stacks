export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Box } from './components/box/box';
export { VStack } from './components/v-stack/v-stack';
export { HStack } from './components/h-stack/h-stack';
export { Spacer } from './components/spacer/spacer';
