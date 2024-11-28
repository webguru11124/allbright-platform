import { cities, City, pickerAdaptor } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

class OnboardingClient {
  public getCities(
    userCountry?: (typeof countries)[number]["Name"] | undefined | null
  ): City[] {
    if (Boolean(userCountry) === false) {
      return [];
    }

    const country = countries.find((country) => country.Code === userCountry);
    const countryCode = country ? country.Code : "GB";
    return pickerAdaptor(cities.filter((city) => city.code === countryCode));
  }
}

export default OnboardingClient;
