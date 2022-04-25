export const transformNullToString = (value) => {
  if (typeof value === "number") return value.toString();
  if (!value || value === ".") return "";
  return value.toString();
};

export const amountToThousandSeparator = (value) => {
  return transformNullToString(value)
    .replace(/\D/g, "")
    .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1, ");
};

export const toINRWords = (num) => {
  num = transformNullToString(num).replace(/, /g, "");
  const single = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const double = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const formatTenth = (digit, prev) => {
    return digit === 0
      ? ""
      : ` ${(digit === 1 && double[prev]) || tens[digit]}`;
  };
  const formatOther = (digit, next, denom) => {
    // eslint-disable-next-line eqeqeq
    return (
      (digit != 0 && next != 1 ? ` ${single[digit]}` : "") +
      (next != 0 || digit > 0 ? ` ${denom}` : "")
    );
  };
  let res = "";
  let index = 0;
  let digit = 0;
  let next = 0;
  const words = [];
  num += "";
  if (Number.isNaN(parseInt(num, 10))) {
    res = "";
    return res;
  }
  if (parseInt(num, 10) > 0 && num.length <= 10) {
    for (index = num.length - 1; index >= 0; index -= 1) {
      digit = num[index] - 0;
      next = index > 0 ? num[index - 1] - 0 : 0;
      switch (num.length - index - 1) {
        case 0:
          words.push(formatOther(digit, next, ""));
          break;
        case 1:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 2:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0
              ? ` ${single[digit]} Hundred${
                  num[index + 1] != 0 && num[index + 2] != 0 ? " and" : ""
                }`
              : ""
          );
          break;
        case 3:
          words.push(formatOther(digit, next, "Thousand"));
          break;
        case 4:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 5:
          words.push(formatOther(digit, next, "Lakh"));
          break;
        case 6:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 7:
          words.push(formatOther(digit, next, "Crore"));
          break;
        case 8:
          words.push(formatTenth(digit, num[index + 1]));
          break;
        case 9:
          words.push(
            // eslint-disable-next-line eqeqeq
            digit != 0
              ? // eslint-disable-next-line eqeqeq
                ` ${single[digit]} Hundred${
                  ((num[index + 1] != 0 || num[index + 2] != 0) && " and") ||
                  " Crore"
                }`
              : ""
          );
          break;
        default:
          words.push("");
      }
    }
    res = words.reverse().join("");
    return res !== "" ? `${res} rupees` : "";
  }
  res = "";
  return res !== "" ? `${res} rupees` : "";
};
