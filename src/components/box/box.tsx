import * as React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

const space = (val: number) => {
  // const isNegative = val < 0
  // const converted = spacing[Math.abs(val)]
  // return isNegative ? -converted : converted
  return val;
};

export type BoxProps = ViewProps & {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;

  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;

  fill?: boolean;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];

  h?: number;
  w?: number;
};

export const Box: React.FunctionComponent<BoxProps> = (props) => {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    h,
    w,
    fill,
    alignItems,
    justifyContent,
    style: styleOverride,
    ...rest
  } = props;

  const style: ViewStyle = {
    alignItems,
    justifyContent,
  };

  if (fill) style.flex = 1;

  if (m) style.margin = space(m);
  if (mx) style.marginHorizontal = space(mx);
  if (my) style.marginVertical = space(my);
  if (mt) style.marginTop = space(mt);
  if (mb) style.marginBottom = space(mb);
  if (mt) style.marginTop = space(mt);
  if (ml) style.marginLeft = space(ml);
  if (mr) style.marginRight = space(mr);

  if (p) style.padding = space(p);
  if (px) style.paddingHorizontal = space(px);
  if (py) style.paddingVertical = space(py);
  if (pt) style.paddingTop = space(pt);
  if (pb) style.paddingBottom = space(pb);
  if (pt) style.paddingTop = space(pt);
  if (pl) style.paddingLeft = space(pl);
  if (pr) style.paddingRight = space(pr);

  if (h) style.height = space(h);
  if (w) style.width = space(w);

  return <View style={[style, styleOverride] as ViewStyle} {...rest} />;
};
