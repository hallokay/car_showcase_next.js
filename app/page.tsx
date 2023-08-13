import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/util";

export default async function Home() {

  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  
  return (
    <main className="overflow-hidden">
      <Hero />

      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        {/* // home__text-container*/}

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel"/> */}
            {/* <CustomFilter title="year"/> */}
          </div>
        </div>
        {/* home__filters */}

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}

            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              죄송합니다. 찾는 결과가 없습니다.
            </h2>

            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
      {/*  // discover */}
    </main>
  );
}
