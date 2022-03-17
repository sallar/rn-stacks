import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Box, BoxProps } from '../box/box';

export const VStack: React.FunctionComponent<BoxProps> = ({
  style,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      style={StyleSheet.flatten([{ flexDirection: 'column' }, style])}
    />
  );
};
