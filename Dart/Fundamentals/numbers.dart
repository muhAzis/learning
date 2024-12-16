void main() {
  // In Dart, numbers consist of 'int' and 'double' which is a sub-type of 'num'
  // if we assign a rounded number it will be 'int' type
  var number1 = 220;
  print("Type of number1: ${number1.runtimeType}");

  // and if we assign a decimal number it will be 'double' type
  var number2 = 13.4;
  print("Type of number2: ${number2.runtimeType}");


  // String conversion to numbers and vice-versa
  // String -> int
  var intNumber = int.parse('20');
  print(intNumber.runtimeType);

  // String -> double
  var doubleNumber = double.parse('20.44');
  print(doubleNumber.runtimeType);

  // int -> String
  var numString1 = 20.toString();
  print(numString1.runtimeType);

  // double -> String
  var numString2 = 20.44.toString();
  print(numString2.runtimeType);
}