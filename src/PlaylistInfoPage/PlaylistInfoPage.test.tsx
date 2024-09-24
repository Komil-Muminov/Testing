import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PlaylistInfoPage } from "./PlaylistInfoPage";
import { PLAYLISTS } from "../data";
export const renderWithRouter = (ui: ReactElement) => {
	return render(ui, { wrapper: BrowserRouter });
};

it("Должен отобразить соответствующий текст при несуществующем playlistId", () => {
	jest.spyOn(Router, "useParams").mockReturnValue({ playlistId: "100" });
	renderWithRouter(<PlaylistInfoPage />);
	expect(screen.getByText("Плейлист с таким playlistId нет")).toBeDefined();
});

it("Должен отобразить данные о playlist при передаче существующего playlistId", () => {
	const playlist = PLAYLISTS[0];
	jest.spyOn(Router, "useParams").mockReturnValue({ playlistId: "0" });

	const { container } = renderWithRouter(<PlaylistInfoPage />);
	expect(screen.getByText(playlist.genre)).toBeDefined();
	expect(screen.getByText(playlist.name)).toBeDefined();

	expect(container.getElementsByClassName("songs")[0].childNodes.length).toBe(
		playlist.songs.length,
	);
});
