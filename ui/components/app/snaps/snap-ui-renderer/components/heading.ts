import { HeadingElement } from '@vadqoapp/snaps-sdk/jsx';
import { TextVariant, OverflowWrap } from '../../../../../helpers/constants/design-system';
import { UIComponentFactory } from './types';

const sizeMap = {
  sm: TextVariant.headingSm,
  md: TextVariant.headingMd,
  lg: TextVariant.headingLg,
};

export const generateSize = (size) => sizeMap[size] || TextVariant.headingSm;

export const heading = ({ element }) => ({
  element: 'Text',
  children: element.props.children,
  props: {
    variant: generateSize(element.props.size),
    overflowWrap: OverflowWrap.Anywhere,
  },
});
