import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from 'vitest'

import Home from './Home';

const initialState = {
  isLoading: false,
  breedsInfo: [],
  error: false,
  onSelect: vi.fn(),
  onSearch: vi.fn()
}

describe("Home", () => {
  it("should render header", () => {
    render(<Home {...initialState} />);

    const message = screen.getByText(/Dog Breeds Search/i);
    expect(message).toBeInTheDocument();
  })

  describe("isLoading", () => {
    describe("when loading is true", () => {
      it ("should show spinner", () => {
        render(<Home {...initialState} isLoading={true} />);

        const spinner = screen.getByTestId('Spinner');
        expect(spinner).toBeInTheDocument();
      });
    })

    describe("when loading is false", () => {
      it ("should hide spinner", () => {
        render(<Home {...initialState} isLoading={true} />);

        const spinner = screen.getByTestId('Spinner');
        expect(spinner).toBeVisible();
      });
    })
  });
});