const regex = {
    minLength: /^.{6,}$/,
    // [0-9]
    atLeastOneNumber: /^(?=.*[0-9])/,
    atLeastOneSpecialChar: /[!”#$%&/()=?¿^*@,[\]{};:_><,.\-|`+]/,
    notPhrase: /100Ladrillos/,
    notConsecutiveChars: /(\w)\1\1/,
    notSequences: /012|123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stv|tvw|vwx|wxy|xyz/,
}

export { regex };