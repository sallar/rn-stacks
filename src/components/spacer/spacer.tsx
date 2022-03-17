/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

export interface SpacerProps {
  height?: number;
  width?: number;
}

export const Spacer: React.FunctionComponent<SpacerProps> = ({
  width,
  height,
}) => {
  return (
    <View
      style={{
        width: width ?? 0,
        height: height ?? 0,
        flex: width || height ? 0 : 1,
      }}
    />
  );
};
