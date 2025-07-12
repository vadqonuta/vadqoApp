import { AccountSelectorElement } from '@vadqoapp/snaps-sdk/jsx';
import { UIComponentFactory } from './types';

export const accountSelector = (props: { element: AccountSelectorElement; form: any }) => ({
  element: 'SnapUIAccountSelector',
  props: {
    ...props.element.props,
    id: props.element.props.name,
    name: props.element.props.name,
  },
});
