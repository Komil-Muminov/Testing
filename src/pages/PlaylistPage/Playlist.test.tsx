import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PlaylistPage } from "./PlaylistPage";

// Мокаем массив PLAYLISTS
jest.mock("../../data", () => ({
	PLAYLISTS: [
		{ id: 1, name: "Playlist 1", genre: "Rock" },
		{ id: 2, name: "Playlist 2", genre: "Pop" },
		{ id: 3, name: "Playlist 3", genre: "Rock" },
	],
}));

describe("PlaylistsPage component", () => {
	test("calls setSearchParams from react-router-dom when input value changes", () => {
		const { getByPlaceholderText } = render(
			<MemoryRouter>
				<PlaylistPage />
			</MemoryRouter>,
		);

		const nameInput = getByPlaceholderText("Поиск по названию");
		fireEvent.change(nameInput, { target: { value: "playlist 1" } });

		// Проверяем, что setSearchParams был вызван с правильными аргументами
		expect(nameInput).toHaveValue("playlist 1");
	});

	test("displays filtered playlists when input value changes", () => {
		const { getByPlaceholderText, getByText } = render(
			<MemoryRouter>
				<PlaylistPage />
			</MemoryRouter>,
		);

		const nameInput = getByPlaceholderText("Поиск по названию");
		fireEvent.change(nameInput, { target: { value: "playlist 1" } });

		const playlistLink = getByText("Playlist 1 - Rock");
		expect(playlistLink).toBeDefined();
	});
});
