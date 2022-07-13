module.exports = function toReadable(number) {
    const numbersNames = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const lengthOfNumber = number.toString().length;

    function createDoubleDigitNumber(number) {
        const [firstDigit, secondDigit] = number.toString().split("");
        const doubleDigitNumbersKeys = Object.keys(numbersNames).filter(
            (key) => key.length > 1
        );
        if (doubleDigitNumbersKeys.some((key) => key === number.toString())) {
            return numbersNames[number];
        }
        const firstKeyNumber = doubleDigitNumbersKeys.find(
            (item) => item[0] === firstDigit
        );
        return numbersNames[firstKeyNumber] + " " + numbersNames[secondDigit];
    }

    function createThreeDigitNumber(number) {
        const firstDigit = number.toString()[0];
        const secondTwoDigits = number.toString().slice(1);
        let output = `${numbersNames[firstDigit]} hundred`;
        if (secondTwoDigits === "00") {
            return output;
        } else if (secondTwoDigits[0] === "0" && secondTwoDigits[1] !== "0") {
            output += ` ${numbersNames[secondTwoDigits[1]]}`;
        } else {
            output += ` ${createDoubleDigitNumber(secondTwoDigits)}`;
        }
        return output;
    }

    if (lengthOfNumber === 1) {
        return numbersNames[number];
    } else if (lengthOfNumber === 2) {
        return numbersNames[number] || createDoubleDigitNumber(number);
    } else if (lengthOfNumber === 3) {
        return createThreeDigitNumber(number);
    }
};
