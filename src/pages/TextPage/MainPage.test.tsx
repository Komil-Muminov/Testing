import { render } from "@testing-library/react";
import { MainPage } from "./MainPage";

describe("MainPage component", () => {
	test("matches snapshot", () => {
		const { container } = render(<MainPage />);
		expect(container).toMatchSnapshot();
	});
});
