import isEmail from "validator/lib/isEmail";
import { EmailValidatorFunction } from "./EmailValidator";

export const emailValidatorFunctionAdapter: EmailValidatorFunction = (value: string): boolean => {
    return isEmail(value);
}
