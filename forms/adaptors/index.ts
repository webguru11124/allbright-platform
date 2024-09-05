export type RegisterInput = {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  country: string;
  password: string;
  password_confirmation: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export type RegisterOutput = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  password: string;
  termsAgreed: boolean;
  marketingAgreed: boolean;
  thirdPartyAgreed: boolean;
};

export const registrationAdaptor = (postBody: RegisterInput) => ({
  firstName: postBody.first_name,
  lastName: postBody.last_name,
  email: postBody.email,
  city: postBody.city,
  country: postBody.country,
  password: postBody.password,
  termsAgreed: postBody.termsAgreed,
  marketingAgreed: postBody.marketingAgreed,
  thirdPartyAgreed: postBody.thirdPartyAgreed,
});
