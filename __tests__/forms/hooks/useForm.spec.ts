import useForm from "@/forms/hooks/useForm";
import { renderHook } from "@testing-library/react-native";
import Joi from "joi";
import _ from "lodash";

const baseSchema = {
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).alphanum().required(),
};

const obj = {
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  password: undefined,
};

describe("useForms", () => {
  describe(".inputs", () => {
    it("is extracted from the schema", () => {
      const schema = baseSchema;
      const { result } = renderHook(() => useForm(schema));

      expect(result.current.inputs).toStrictEqual(obj);
      expect(result.current.schemaInputs).toStrictEqual(obj);
      expect(result.current.schemaKeys).toStrictEqual(Object.keys(obj));
      expect(result.current.postBody).toStrictEqual(obj);
    });
  });

  describe(".postBody", () => {
    it("are extracted from the schema minus settings.omit", () => {
      const schema = {
        ..._.pick(baseSchema, ["email", "password"]),
        password_confirmation: Joi.string().min(4).alphanum().required(),
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

  describe(".schema", () => {
    it("are extracted from the schema minus settings.omit", () => {
      const schema = baseSchema;

      const { result } = renderHook(() => useForm(schema));
      const { error } = result.current.schema
        .extract("first_name")
        .validate("");
      expect(error).not.toBeUndefined();

      const { error: updatedError } = result.current.schema
        .extract("first_name")
        .validate("lorem");
      expect(updatedError).toBeUndefined();
    });
  });
});
