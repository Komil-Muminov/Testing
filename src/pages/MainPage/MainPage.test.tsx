import { render } from "@testing-library/react";
import { MainPage } from "./MainPage";

// SnapShot Test
describe("Тест Snapshot", () => {
	test("Проверка рендера компонента", () => {
		const { container } = render(<MainPage />);
		expect(container).toMatchSnapshot();
	});
});
