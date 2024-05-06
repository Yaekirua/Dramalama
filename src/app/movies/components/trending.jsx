import { TRENDING } from "../../../../utils/movie_urls";
import PreFetchMovieInfo from "./cacher";
import styles from "../styles/pop_trend.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function TREDNING_MOVIES() {
	const data = await get_popular();
	PreFetchMovieInfo(data);

	return (
		<main className={styles.Main}>
			<h1>Trending Movies</h1>
			<section className={styles.MovieContainer}>
				{data &&
					data.results &&
					data.results.slice(0, 16).map((item, index) => (
						<Link
							href={`/movies/${item.id}`}
							style={{
								textDecoration: "none",
								color: "white",
							}}
							key={index}
						>
							<div
								style={{
									borderRadius: "0.5rem",
									overflow: "hidden",
									backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}}
								className={styles.MovieEntryPrev}
							>
								<div className={styles.MovieEntry}>
									<Image
										src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
										width={200}
										height={300}
										alt="Movie Poster"
									></Image>
									<p>{item.title}</p>
								</div>
							</div>
						</Link>
					))}
			</section>
		</main>
	);
}

const get_popular = async () => {
	const res = await fetch(TRENDING, { next: { revalidate: 21620 } });
	const data = await res.json();
	return data;
};
