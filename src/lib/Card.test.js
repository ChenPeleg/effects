import { render, fireEvent, screen } from '@testing-library/svelte';
import Card from './Card.svelte';

const cardContent = { color: 'green', content: 'car keys', name: 'car' };
it('about page has expected h1', () => {
	const { getByText, getByTestId } = render(Card, { cardContent: cardContent, isCurrent: false });
	const cardBody = getByTestId('single-card');
	expect(cardBody).toBeTruthy();
});
