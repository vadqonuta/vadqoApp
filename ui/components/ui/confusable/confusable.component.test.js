import React from 'react';
import { renderWithProvider } from '../../../../test/lib/render-helpers';
import Confusable from '.';

const testCases = [
  { input: 'vitalik.eth', description: 'zero-width unicode' },
  { input: 'facebook.eth', description: 'homoglyphic unicode points' },
  { input: 'scope.eth', description: 'multiple homoglyphic unicode points' },
  { input: '👻.eth', description: 'emoji' },
];

describe('Confusable component', () => {
  test.each(testCases)('should $description', ({ input }) => {
    const props = { input };
    const { container } = renderWithProvider(<Confusable {...props} />);
    expect(container).toMatchSnapshot();
  });
});
