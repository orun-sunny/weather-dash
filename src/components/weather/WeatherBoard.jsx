import { useWeather } from "../../hooks";
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherConditon";

export default function WeatherBoard() {
  const { loading, error, weatherData } = useWeather();
  console.log(weatherData, loading, error);
  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavourite />
          <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
              <img src="./assets/cloud.svg" alt="cloud" />
              <div className="max-md:flex items-center max-md:space-x-4">
                <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                  16°
                </h1>
                <div className="flex items-center space-x-4 md:mb-4">
                  <img src="./assets/pin.svg" />
                  <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
          </div>
          <WeatherCondition />
        </div>
      </div>
    </div>
  );
}
