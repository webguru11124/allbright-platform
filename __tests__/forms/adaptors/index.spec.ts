import { registrationAdaptor } from "@/forms/adaptors";
import { RegisterInput } from "@/forms/adaptors";

type TestItem = { description: string; inputs: RegisterInput; outputs: {} };

describe.each<TestItem>([
  {
    description: "",
    inputs: {
      first_name: "Steve",
      last_name: "Jobs",
      email: "steve@jobs.com",
      city: "London",
      country: "US",
      password: "applemac",
      password_confirmation: "applemac",
      termsAgreed: true,
      marketingAgreed: false,
      thirdPartyAgreed: true,
    },
    outputs: {
      firstName: "Steve",
      lastName: "Jobs",
      email: "steve@jobs.com",
      city: "London",
      country: "US",
      password: "applemac",
      termsAgreed: true,
      marketingAgreed: false,
      thirdPartyAgreed: true,
    },
  },
])("registrationAdaptor", ({ description, inputs, outputs }) => {
  it(description, () => {
    const result = registrationAdaptor(inputs);
    expect(result).toStrictEqual(outputs);
  });
});
