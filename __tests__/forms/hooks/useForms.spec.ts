import useForm from "@/forms/hooks/useForm";
import { renderHook } from "@testing-library/react-native";
import Joi from "joi";

describe("useForms", () => {
  describe(".inputs", () => {
    it("is extracted from the schema", () => {
      const schema = {
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(4).alphanum().required(),
      };

      const { result } = renderHook(() => useForm(schema));

      expect(result.current.inputs).toStrictEqual({
        email: undefined,
        password: undefined,
      });

      expect(result.current.postBody).toStrictEqual({
        email: undefined,
        password: undefined,
      });
    });
  });

  describe(".postBody", () => {
    it("are extracted from the schema minus settings.omit", () => {
      const schema = {
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(4).alphanum().required(),
        password_confirmation: Joi.ref("password"),
      };

      const { result } = renderHook(() =>
        useForm(schema, { omit: ["password_confirmation"] }),
      );

      expect(result.current.inputs).toStrictEqual({
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
      });

      expect(result.current.postBody).toStrictEqual({
        email: undefined,
        password: undefined,
      });
    });
  });
});
