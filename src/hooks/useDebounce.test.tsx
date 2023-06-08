import { render, screen } from "@testing-library/react";
import { describe, expect } from 'vitest'

import { useDebounce } from "./useDebounce";

describe('debounce', () => {
	it("useDebounce", async () => {
			const debounceValue = await useDebounce("dog", 1000);
			expect(debounceValue).toBe('dog')
	})
});