import { render, screen } from "@testing-library/react";
import { describe, expect } from 'vitest'

import { CustomGrid } from ".";

const dogBreeds = [{
    bred_for:  "Small rodent hunting, lapdog",
		breed_group :  "Toy",
		dogHeight : ['23', '29'],
		dogLifeSpan: ['10', '12'],
		height : {imperial: '9 - 11.5', metric: '23 - 29'},
		id : 1,
		image : {id: 'BJa4kxc4X', width: 1600, height: 1199, url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg'},
		life_span : "10 - 12 years",
		name : "Affenpinscher",
		origin: "Germany, France",
		reference_image_id : "BJa4kxc4X",
		temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
		weight: {imperial: '6 - 13', metric: '3 - 6'}
	}]


describe("CustomGrid", () => {
	describe("When no data", () => {
		it("should render no data card", () => {
			render(<CustomGrid dogBreeds={[]} />);
	
			const message = screen.getByText(/No data found/i);
			expect(message).toBeVisible();
		});
	});
});