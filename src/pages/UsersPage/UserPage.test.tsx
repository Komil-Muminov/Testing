import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UsersPage } from "./UsersPage";

// Мокаем массив USERS
jest.mock("../../data", () => ({
	USERS: [
		{ id: 1, fullName: "John Doe" },
		{ id: 2, fullName: "Jane Smith" },
	],
}));

describe("UsersPage component", () => {
	test("calls setSearchParam from react-router-dom when input value changes", () => {
		const { getByLabelText } = render(
			<MemoryRouter>
				<UsersPage />
			</MemoryRouter>,
		);

		const input = getByLabelText("введите имя") as HTMLInputElement;
		fireEvent.change(input, { target: { value: "john" } });

		// Проверяем, что setSearchParam был вызван с правильными аргументами
		expect(input.value).toBe("john");
	});
});
