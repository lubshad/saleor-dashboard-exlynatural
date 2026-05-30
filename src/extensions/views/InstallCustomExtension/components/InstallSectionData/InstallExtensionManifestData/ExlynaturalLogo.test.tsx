import { useTheme } from "@dashboard/theme";
import { type DefaultTheme } from "@saleor/macaw-ui-next";
import { render, screen } from "@testing-library/react";

import { ExlynaturalLogo } from "./ExlynaturalLogo";

jest.mock("@dashboard/theme", () => {
  const actualTheme = jest.requireActual("@dashboard/theme");

  return {
    ...actualTheme,
    useTheme: jest.fn(),
  };
});

describe("ExlynaturalLogo", () => {
  it("should display light mode logo when theme is defaultLight", () => {
    // Arrange
    const mockTheme: DefaultTheme = "defaultLight";

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act
    render(<ExlynaturalLogo />);

    // Assert
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", expect.stringContaining("exlynatural-logo.svg"));
  });

  it("should display dark mode logo when theme is defaultDark", () => {
    // Arrange
    const mockTheme: DefaultTheme = "defaultDark";

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act
    render(<ExlynaturalLogo />);

    // Assert
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", expect.stringContaining("exlynatural-logo-dark.svg"));
  });

  it("should throw error when theme is invalid", () => {
    // Arrange
    const mockTheme = "invalidTheme" as DefaultTheme;

    (useTheme as jest.Mock).mockReturnValue({
      theme: mockTheme,
    });

    // Act & Assert
    expect(() => {
      render(<ExlynaturalLogo />);
    }).toThrow("Invalid theme mode, should not happen.");
  });
});
