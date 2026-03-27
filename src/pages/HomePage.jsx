import { Header, Input, Pagination, Footer, MovieCard } from '@/components';
const HomePage = () => {
  return (
    <>
      <p>HomePage</p>

      <Header />

      <main className="main-content">
        <Input />

        <section className="movies-section">
          <h2 className="section-title">Trending Movies</h2>

          <ul className="movie-list">
            <MovieCard />

            {/* Еще карточки... */}
          </ul>

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
};

export { HomePage };
