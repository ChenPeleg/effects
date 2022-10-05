import { render } from '@testing-library/svelte';
import CardsPanel from './CardsPanel.svelte';

describe('Cards Panel', () => {
	it('Cards renders Cards', () => {
		const { getByText, getByTestId } = render(CardsPanel);
	});
});
