import { test } from 'vitest';
import { Square } from './Square.jsx';

test('Square renders correctly', ({ expect }) => {
  const props = {
    children: 'Test Children',
    isSelected: true,
    updateBoard: () => {},
    index: 5
  };

  const square = Square(props);
});
