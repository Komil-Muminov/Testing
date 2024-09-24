// App.tsx
import { Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import { PlaylistPage } from "./pages/PlaylistPage/PlaylistPage";
import { PlaylistInfoPage } from "./PlaylistInfoPage/PlaylistInfoPage";

export function App() {
	return (
		<>
			<div className="header">
				<p style={{ color: "orange" }}>Miyagi - Самурай</p>
			</div>

			<div className="section">
				<nav className="navMenu">
					<Link to="/">Главная</Link>
					<Link to="/users">Пользователи</Link>
					<Link to="/playlist">Плейлисты</Link>
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/users" element={<UsersPage />} />
						<Route path="/playlist" element={<PlaylistPage />} />
						<Route
							path="/playlist/:playlistId"
							element={<PlaylistInfoPage />}
						/>
						<Route path="/users/:userId" element={<UserInfoPage />} />
					</Routes>
				</main>
			</div>

			<div className="footer">
				<a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
			</div>
		</>
	);
}
