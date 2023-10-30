"use client";

import styles from "./page.module.css";

import { ChangeEvent, useEffect, useState } from "react";
import { EmailValidatorClassAdapter } from "./validation/EmailValidatorClassAdapter";
import { emailValidatorFunctionAdapter } from "./validation/EmailValidatorFunctionAdapter";

export default function Adapter() {
    const emailValidator = new EmailValidatorClassAdapter();

    const [email, setEmail] = useState<string>("");
    const [isValidEmailByClass, setIsValidEmailByClass] = useState<boolean>(emailValidator.isEmail(email));
    const [isValidEmailByFunction, setIsValidEmailByFunction] = useState<boolean>(emailValidatorFunctionAdapter(email));

    useEffect(() => {
        setIsValidEmailByClass(emailValidator.isEmail(email));
        setIsValidEmailByFunction(emailValidatorFunctionAdapter(email));
    }, [email]);

    return (
        <main className={styles.main}>
            <input
                className={styles.input}
                type="text"
                onChange={(event) => setEmail(event.target.value.trim())}
            />

            {isValidEmailByClass ? (
                <div>
                    O e-mail <em>{email}</em> é <strong>válido</strong> pelo adapter
                    (class/padrão)!
                </div>
            ) : (
                <div>
                    O e-mail <em>{email}</em> é <strong>inválido</strong> pelo adapter
                    (class/padrão)!
                </div>
            )}

            {isValidEmailByFunction ? (
                <div>
                    O e-mail <em>{email}</em> é <strong>válido</strong> pelo adapter
                    (function)!
                </div>
            ) : (
                <div>
                    O e-mail <em>{email}</em> é <strong>inválido</strong> pelo adapter
                    (function)!
                </div>
            )}
        </main>
    );
}
