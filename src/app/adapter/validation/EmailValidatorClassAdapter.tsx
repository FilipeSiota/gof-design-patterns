import isEmail from "validator/lib/isEmail";
import { EmailValidator } from "./EmailValidator";

export class EmailValidatorClassAdapter implements EmailValidator {
    isEmail(value: string): boolean {
        return isEmail(value);
    }
}
