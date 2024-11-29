import { act, renderHook } from "@testing-library/react-native";
import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";

const schema = {
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).alphanum().required(),
  password_confirmation: Joi.string().min(4).alphanum().required(),
};

const obj = {
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  password: undefined,
  password_confirmation: undefined,
};

describe("useFormWithPassConfs", () => {
  describe(".inputs, .schemaInputs, .schem .postBody", () => {
    it("is extracted from the schema", () => {
      const { result } = renderHook(() => useFormWithPassConf(schema));

      expect(result.current.inputs).toStrictEqual(obj);
      expect(result.current.schemaInputs).toStrictEqual(obj);
      expect(result.current.schemaKeys).toStrictEqual(Object.keys(obj));
      expect(result.current.postBody).toStrictEqual(obj);
    });
  });

  describe(".schema", () => {
    it("are extracted from the schema minus settings.omit", () => {
      const { result } = renderHook(() => useFormWithPassConf(schema));
      const { error } = result.current.schema.extract("first_name").validate("");
      expect(error).not.toBeUndefined();

      const { error: updatedError } = result.current.schema.extract("first_name").validate("lorem");
      expect(updatedError).toBeUndefined();
    });
  });

  describe(".touched / .errors", () => {
    it(`will be undefined until the associated blurFunc is called`, async () => {
      const { result } = renderHook(() => useFormWithPassConf(schema));
      expect(result.current.touched.password_confirmation).toBeUndefined();
      expect(result.current.errors.password_confirmation).toBeUndefined();

      await act(async () => {
        await result.current.blurFuncs.password_confirmation();
      });

      expect(result.current.touched.password_confirmation).toEqual(true);
      expect(result.current.errors.password_confirmation).toEqual('"Password_confirmation" is required');
    });
  });

  describe(".errors", () => {
    it(`will contain a password_confirmation error stating that the 
      password_confirmation field should match the password field.`, async () => {
      const { result } = renderHook(() => useFormWithPassConf(schema));
      expect(result.current.touched.password_confirmation).toBeUndefined();
      expect(result.current.errors.password_confirmation).toBeUndefined();

      await act(async () => {
        await result.current.changeTextFuncs.password("pass");
        await result.current.changeTextFuncs.password_confirmation("password");

        await result.current.blurFuncs.password();
        await result.current.blurFuncs.password_confirmation();
      });

      expect(result.current.touched).toStrictEqual({
        email: undefined,
        first_name: undefined,
        last_name: undefined,
        password: true,
        password_confirmation: true,
      });

      expect(result.current.errors).toStrictEqual({
        email: undefined,
        first_name: undefined,
        last_name: undefined,
        password: undefined,
        password_confirmation: '"Password Confirmation" and "Password" should match',
      });

      await act(async () => {
        await result.current.changeTextFuncs.password("password");
        await result.current.changeTextFuncs.password_confirmation("password");
      });

      expect(result.current.errors).toStrictEqual({
        email: undefined,
        first_name: undefined,
        last_name: undefined,
        password: undefined,
        password_confirmation: undefined,
      });
    });
  });

  describe(".isFormValid", () => {
    it("will return false if the password and password_confirmation do not match", async () => {
      const { result } = renderHook(() => useFormWithPassConf(schema));

      await act(async () => {
        await result.current.changeTextFuncs.first_name("Natasha");
        await result.current.changeTextFuncs.last_name("Romanov");
        await result.current.changeTextFuncs.email("test@testemail.com");
        await result.current.changeTextFuncs.password("not_matching_passwords");
        await result.current.changeTextFuncs.password_confirmation("password");

        await result.current.blurFuncs.first_name();
        await result.current.blurFuncs.last_name();
        await result.current.blurFuncs.email();
        await result.current.blurFuncs.password();
        await result.current.blurFuncs.password_confirmation();
      });

      expect(result.current.isFormValid).toBe(false);

      await act(async () => {
        await result.current.changeTextFuncs.password("matchingpasswords");
        await result.current.changeTextFuncs.password_confirmation("matchingpasswords");
      });

      expect(result.current.isFormValid).toBe(true);
    });
  });
});
