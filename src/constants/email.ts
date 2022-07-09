// Rules
import { regex } from './regex';
import type { Rule } from '@types';

const socialsAuth: Array<string> = [
    'Google',
    'Microsoft',
    'Facebook'
];

const rulesRegex: Array<Rule> = [
    {
        customRegex: regex.minLength,
        name: "Mínimo 6 caracteres (letras, números y caracteres especiales)."
    },
    {
        customRegex: regex.atLeastOneNumber,
        name: "Mínimo 1 número."
    },
    {
        customRegex: regex.atLeastOneSpecialChar,
        name: "Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@,[]{};:_><,.-|`+."
    },
    {
        customRegex: regex.notPhrase,
        name: "No tener la frase “100Ladrillos”.",
        negative: true
    },
    {
        customRegex: regex.notConsecutiveChars,
        name: "No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).",
        negative: true
    },
    {
        customRegex: regex.notSequences,
        name: "No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123).",
        negative: true
    }

];

export { socialsAuth, rulesRegex };