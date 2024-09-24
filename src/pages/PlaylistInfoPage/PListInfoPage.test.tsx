// import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { PlaylistInfoPage } from "./PlaylistInfoPage";

// Мокаем PLAYLISTS для теста
jest.mock("../data", () => ({
	PLAYLISTS: [
		{ id: 1, name: "Playlist 1", genre: "Rock", songs: 10 },
		{ id: 2, name: "Playlist 2", genre: "Pop", songs: 15 },
	],
}));

describe("PlaylistInfoPage", () => {
	it("renders default text when playlist is not found", () => {
		// Подготовка тестового случая: плейлист с ID, которого нет в моке
		const { getByText } = render(
			<MemoryRouter initialEntries={["/playlist/999"]}>
				<Route path="/playlist/:playlistId">
					<PlaylistInfoPage />
				</Route>
			</MemoryRouter>,
		);

		// Проверка текста "Playlist not found!"
		expect(getByText("Playlist not found!")).toBeInTheDocument();
	});
});
