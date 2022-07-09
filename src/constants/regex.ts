const regex = {
    minLength: /^.{6,}$/,
    // [0-9]
    atLeastOneNumber: /^(?=.*[0-9])/,
    atLeastOneSpecialChar: /[!”#$%&/()=?¿^*@,[\]{};:_><,.\-|`+]/,
    notPhrase: /100Ladrillos/,
    notConsecutiveChars: /(\w)\1\1/,
    notSequences: /012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stv|tvw|vwx|wxy|xyz/,
    curp: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
}

export { regex };