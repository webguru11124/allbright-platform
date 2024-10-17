import { renderHook, waitFor } from "@testing-library/react-native";
import Joi from "joi";
import _ from "lodash";

import useForm from "@/forms/hooks/useForm";

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

  describe("settings", () => {
    describe(".omit", () => {
      it("removes omitted properties from the postBody", () => {
        const schema = {
          ..._.pick(baseSchema, ["email", "password"]),
          password_confirmation: Joi.string().min(4).alphanum().required(),
        };

        const { result } = renderHook(() =>
          useForm(schema, { omit: ["password_confirmation"] })
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

    describe(".default", () => {
      it("adds default values to the provided properties", () => {
        const { result } = renderHook(() =>
          useForm(baseSchema, {
            default: { first_name: "Steve", password: "Help!" },
          })
        );

        waitFor(() => {
          expect(result.current.inputs).toStrictEqual({
            first_name: "Steve",
            last_name: undefined,
            email: undefined,
            password: "Help!",
          });
        });
      });
    });
  });
});
