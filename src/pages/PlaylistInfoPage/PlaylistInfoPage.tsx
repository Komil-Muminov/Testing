import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../data";

// Типизация
type TType = {
	playlistId: string;
};

export const PlaylistInfoPage: React.FC = () => {
	// Получение ID используя useParams
	const { playlistId } = useParams<TType>();
	const playlist = PLAYLISTS.find((p) => p.id === Number(playlistId));

	if (!playlist) {
		return <div>Playlist not found!</div>;
	}
	return (
		<>
			<div>
				<span>
					Жанр:{" "}
					<Link
						key={playlist.id}
						style={{ color: "red" }}
						to={`/playlist?genre=${playlist.genre.toLowerCase()}`}
					>
						{playlist.genre}
					</Link>
				</span>
				<h2>Playlist Info</h2>
				<p>Name: {playlist.name}</p>
				<p>Genre: {playlist.genre}</p>
				<p>Songs: {playlist.songs}</p>
			</div>
		</>
	);
};
