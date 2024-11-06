import { cities } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

class OnboardingClient {
  public getCities(
    userCountry: (typeof countries)[number]["Name"]
  ): (typeof cities)[number]["city"][] {
    const country = countries.find((country) => country.Code === userCountry);
    const countryCode = country ? country.Code : "GB";
    const cityNames = countryCode
      ? // get list of cities matching the user's country codea
        cities
          .filter((city) => city.code === countryCode)
          .map((data) => data.city)
      : // otherwise list all cities
        cities.map((data) => data.city);

    return [...new Set(cityNames)];
  }
}

export default OnboardingClient;
