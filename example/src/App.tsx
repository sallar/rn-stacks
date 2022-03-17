import * as React from 'react';

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { VStack, HStack, Box, Spacer } from '@sallar/rn-stacks';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Box p={16} fill>
        <VStack>
          <HStack justifyContent="space-between">
            <Text>HStack1</Text>
            <Text>HStack1</Text>
          </HStack>
          <HStack
            justifyContent="space-around"
            style={{ backgroundColor: '#f0f0f0' }}
          >
            <Text>HStack2</Text>
            <Text>HStack2</Text>
          </HStack>
        </VStack>
        <Spacer />
        <VStack m={16}>
          <Text>Im going to bottom</Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
