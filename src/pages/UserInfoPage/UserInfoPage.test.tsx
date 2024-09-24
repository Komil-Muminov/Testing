import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { UserInfoPage } from "./UserInfoPage";

// Мокаем массив USERS
jest.mock("../../data", () => ({
	USERS: [
		{
			id: 1,
			jobTitle: "Developer",
			email: "developer@example.com",
			avatar: "avatar.jpg",
			fullName: "John Doe",
			bio: "Lorem ipsum",
		},
		{
			id: 2,
			jobTitle: "Designer",
			email: "designer@example.com",
			avatar: "avatar.jpg",
			fullName: "Jane Smith",
			bio: "Lorem ipsum",
		},
	],
}));

describe("UserInfoPage component", () => {
	test('renders "пользователя таким userId нет" message when user is not found', () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/user/3"]}>
				<Route path="/user/:userId">
					<UserInfoPage />
				</Route>
			</MemoryRouter>,
		);

		const notFoundText = getByText(/пользователя таким userId нет/i);
		expect(notFoundText).toBeDefined();
	});

	// Дополнительный тест, если нужно проверить отображение данных пользователя
	test("renders user information when user is found", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/user/1"]}>
				<Route path="/user/:userId">
					<UserInfoPage />
				</Route>
			</MemoryRouter>,
		);

		const userJobTitle = getByText(/Developer/i);
		expect(userJobTitle).toBeDefined();

		const userEmail = getByText(/developer@example.com/i);
		expect(userEmail).toBeDefined();

		// Для изображения, можно проверить с помощью alt текста или src
		const userAvatar = document.querySelector("img");
		expect(userAvatar).toHaveAttribute("alt", "avatar");
		expect(userAvatar).toHaveAttribute("src", "avatar.jpg");

		const userName = getByText(/John Doe/i);
		expect(userName).toBeInTheDocument();

		const userBio = getByText(/Lorem ipsum/i);
		expect(userBio).toBeInTheDocument();
	});
});
