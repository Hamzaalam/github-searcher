import styled from 'styled-components';
import * as React from 'react';
import { forwardRef, Ref } from 'react';
import {
  color, ColorProps, space, SpaceProps, layout, LayoutProps, flexbox, FlexProps, position, PositionProps, border, BorderProps
} from 'styled-system';

type Props = LayoutProps & FlexProps & ColorProps & SpaceProps & PositionProps;
type BoxProps = ColorProps & SpaceProps & LayoutProps & PositionProps & BorderProps;

export const StyledFlex = styled.div<Props>`
  boxsizing: 'border-box';
  minwidth: 0;
  display: flex;
  ${layout};
  ${flexbox};
  ${position};
  ${color};
  ${space};
`;
const StyledBox = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space};
  ${color};
  ${layout};
  ${position};
  ${border};
`;

const Flex = forwardRef((props: any, ref: Ref<HTMLDivElement>) => <StyledFlex ref={ref} {...props} />);
const Box = forwardRef((props: any, ref: Ref<HTMLDivElement>) => <StyledBox ref={ref} {...props} />);

export { Flex, Box };