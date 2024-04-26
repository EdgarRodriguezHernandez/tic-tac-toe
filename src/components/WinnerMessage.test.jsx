import { test } from 'vitest';
import { render } from '@testing-library/react';
import { WinnerMessage } from './WinnerMessage';

test('WinnerMessage renders null when winner is undefined or null', ({ expect }) => {
  const { container } = render(<WinnerMessage winner={undefined} />);
  expect(container.firstChild).toBeNull();

  const { container: containerNull } = render(<WinnerMessage winner={null} />);
  expect(containerNull.firstChild).toBeNull();
});