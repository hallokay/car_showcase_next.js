export async function fetchCars() {
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

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

export const calculateCarRent = (city_mpg:number, year: number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageFactor;

    return rentalRatePerDay.toFixed(0)

}