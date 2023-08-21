import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

  const { year, model, manufacturer, fuel, limit } = filters

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const headers = {
    "X-RapidAPI-Key": "dc753d18e3msh7316c98f389f268p1870f2jsn3d9f8cbfa9bd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const res = await fetch(url, {
    headers: headers
  })

  const result = await res.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageFactor;

  return rentalRatePerDay.toFixed(0)

}

export const generateCarImgUrl = (car: CarProps, angle?: string) => {

  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('year', `${year}`)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}

// 검색한 키워드를 URL에 반영해줌
export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname;
}