void main() {
  // implicitly initiate variable
  var greetings = "Hello Dart!";
  print(greetings);

  // explicitly initiate variable
  var numbers;  // the default is 'null'
  print('"numbers" before init: $numbers');

  numbers = 20;
  print('"numbers" after init: $numbers');
}