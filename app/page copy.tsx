// 서버사이드 렌더링으로 페이지를 다시 불러오게 될 때 스크롤이 맨 위로 올라가는 버그를 수정하려면
//client 렌더링을 해야함
'use client';

import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/util";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);


  // search state
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  //filter state
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  // pagenation
  const [limit, setLimit] = useState(10);



  const getCars = async () => {
    setLoading(true);

    try {
      const res = await fetchCars({
        manufacturer,
        year,
        fuel,
        limit,
        model,
      })

      setAllCars(res);

    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getCars();
  }, [manufacturer, year, model, fuel, limit])

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
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title="fuel" setFilter={setFuel} options={fuels} />
            <CustomFilter title="year" setFilter={setYear} options={yearsOfProduction} />
          </div>
        </div>
        {/* home__filters */}

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}

            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src={'/loader.svg'}
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />

              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={(limit || 10) > allCars.length}
            />
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
