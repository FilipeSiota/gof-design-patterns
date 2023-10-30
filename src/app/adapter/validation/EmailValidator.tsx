export interface EmailValidator {
    isEmail: EmailValidatorFunction;
}

export interface EmailValidatorFunction {
    (value: string): boolean;
}
