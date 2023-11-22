const cities = [
  "Kisumu", "Nakuru", "Nairobi", "Mombasa"
];
for (let i = 0; i < cities.length; i++){
  console.log(i, cities[i])
}

let timesCalled = 0;
function logCity (city) {

  console.log(timesCalled, "The city is: ",  city);
  timesCalled++;
}
cities.forEach(logCity);