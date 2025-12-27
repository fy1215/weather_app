function Weather({ data }) {
  if (data.cod === "404") {
    return (
      <p className="text-red-500 text-center font-bold text-2xl">
        都市が見つかりません
      </p>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-3">
      <p className="text-2xl font-bold">{data.name}</p>
      <p className="text-4xl">{data.main.temp}°C</p>
      <p className="text-gray-600">{data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
