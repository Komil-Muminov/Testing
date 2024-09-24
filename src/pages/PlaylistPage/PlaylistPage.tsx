import { useSearchParams, Link } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import React from "react";

export const PlaylistPage: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		searchParams.set(name, value.toLowerCase().trim());
		setSearchParams(searchParams);
	};

	const searchValueName = searchParams.get("name") || "";
	const searchValueGenre = searchParams.get("genre") || "";

	const filterByResult = PLAYLISTS.filter(
		(item) =>
			item.name.toLowerCase().includes(searchValueName.toLowerCase().trim()) &&
			item.genre.toLowerCase().includes(searchValueGenre.toLowerCase().trim()),
	);

	return (
		<section className="sections">
			<div className="container">
				<div className="playlist__content">
					<h1 style={{ color: "red" }}>PlaylistPage useSearchParams</h1>
					<div className="playlist__search">
						<input
							name="name"
							type="text"
							value={searchValueName}
							onChange={handleSearch}
							placeholder="Поиск по названию"
						/>
						<input
							name="genre"
							type="text"
							value={searchValueGenre}
							onChange={handleSearch}
							placeholder="Поиск по жанру"
						/>
					</div>
					{filterByResult.length > 0 ? (
						<>
							<span style={{ color: "green" }}>
								Найдено:
								{searchValueName
									? `${filterByResult.length} песен`
									: searchValueGenre
									? `${filterByResult.length} плейлистов`
									: null}
							</span>
							{filterByResult.map((item) => (
								<div key={item.id}>
									<Link to={`/playlist/${item.id}`} key={item.id}>
										{item.name} - {item.genre}
									</Link>
								</div>
							))}
						</>
					) : (
						<p style={{ color: "red" }}>
							Найдено: {filterByResult.length} плейлистов
						</p>
					)}
				</div>
			</div>
		</section>
	);
};
