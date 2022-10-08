import * as Card from '../src/lib/Card.svelte';

import { expect, test } from '@playwright/test';
import { render, fireEvent, screen } from '@testing-library/svelte';

test('about page has expected h1', async ({ page }) => {
	// const { getByText, getByTestId } = render(Card);
	// const cardBody = getByTestId('single-card');
	// expect(cardBody).toBeTruthy();
});
