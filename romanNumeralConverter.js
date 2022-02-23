class NumeralConverter {
    constructor(numberToCovert) {
      this.value = numberToCovert;
      this.numeral = "";
    }
  
    processNumeral(symbol, symbolValue){
      while (this.value >= symbolValue) {
        this.numeral += symbol;
        this.value -= symbolValue;
      }
    }
  }
  
  function convertToRoman(num) {
    const converter = new NumeralConverter(num);
    converter.processNumeral('M', 1000);
    converter.processNumeral('CM', 900);
    converter.processNumeral('D', 500);
    converter.processNumeral('CD', 400);
    converter.processNumeral('C', 100);
    converter.processNumeral('XC', 90);
    converter.processNumeral('L', 50);
    converter.processNumeral('XL', 40);
    converter.processNumeral('X', 10);
    converter.processNumeral('IX', 9);
    converter.processNumeral('V', 5);
    converter.processNumeral('IV', 4);
    converter.processNumeral('I', 1);
    //console.log(converter);
  
  //   let result = "";
  //     while (num >= 1000) {
  //     result += "M"
  //     num -= 1000;
  //   }
  //   console.log(`finished with M, lettover: ${num}`)
  //   while (num >= 900) {
  //     result += "CM"
  //     num -= 900;
  //   }
  //   console.log(`finished with CM, lettover: ${num}`)
  //     while (num >= 500) {
  //     result += "D"
  //     num -= 500;
  //   }
  //   console.log(`finished with D, lettover: ${num}`)
  //     while (num >= 400) {
  //     result += "CD"
  //     num -= 400;
  //   }
  //   console.log(`finished with CD, lettover: ${num}`)
  //     while (num >= 100) {
  //     result += "C"
  //     num -= 100;
  //   }
  //   console.log(`finished with C, lettover: ${num}`)
  //     while (num >= 90) {
  //     result += "XC"
  //     num -= 90;
  //   }
  //   console.log(`finished with XC, lettover: ${num}`)
  //     while (num >= 50) {
  //     result += "L"
  //     num -= 50;
  //   }
  //   console.log(`finished with L, lettover: ${num}`)  
  //   while (num >= 40) {
  //     result += "XL"
  //     num -= 40;
  //   }
  //   console.log(`finished with XL, lettover: ${num}`)
  //     while (num >= 10) {
  //     result += "X"
  //     num -= 10;
  //   }
  //   console.log(`finished with X, lettover: ${num}`)
  //     while (num >= 9) {
  //     result += "IX"
  //     num -= 9;
  //   }
  //   console.log(`finished with IX, lettover: ${num}`)
  //    while (num >= 5) {
  //     result += "V"
  //     num -= 5;
  //   }
  //   console.log(`finished with V, lettover: ${num}`) 
  //   while (num >= 4) {
  //     result += "IV"
  //     num -= 4;
  //   }
  //   console.log(`finished with IV, lettover: ${num}`)
  //   while (num >= 1){
  //     result += "I";
  //     num -= 1;
  //   }
  //  return result;
    return converter.numeral;
  }
  console.log(convertToRoman(3999))
  //convertToRoman(36);