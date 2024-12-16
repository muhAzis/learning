import 'dart:io';

void main() {
  // Dart supports 'type interface', it means it automatically define the data type of a variable based on the value initiated to it
  var greetings = 'Hello World!';   // the data type will be 'String'
  var numbers = 20;                 // the data type will be 'integers'

  // explicitly define the data type of a variable
  String name = 'Azis';
  int age = 20;

  print("Hi, my name is $name, and I'm $age years old");

  // Data types in Dart
  // --------------------------------------------------------------------------
  // int        (integer/round numbers)         5, -7, 0
  // double     (decimal numbers)               3.14, 18.5, -12.12
  // num        (round and decimal numbers)     5, 3.14, -99.00
  // bool       (boolean)                       true, false
  // String     (text of 0 or more chars)       "Dart", 'Hello World!', ""
  // List       (array)                         [1, 2, 3], ['a', 'b', 'c']
  // Map        (key-value pairs)               {"name": "Azis", "age": 24}
  // dynamic    (any data types)                ...

  // when a variable is assigned, the type will be 'dynamic' and it can be initiated to any data type
  var any;
  any = 'this is any';
  print("data type of 'any': ${any.runtimeType}");
  any = 20;
  print("data type of 'any': ${any.runtimeType}");

  // but if a variable already initiated with a value, the data type can't be changed and it will cause an error
  var any2 = 20;
  //any2 = 'twenty';    // because 'any2' is already an 'integer', it can't be assigned with a 'String'



  // Dart have a library to record user's input called 'io', so we need to import it first
  portfolio();
}

void portfolio() {
  stdout.write('Your name: ');
  String name = stdin.readLineSync()!;
  stdout.write('Your age: ');
  int age = int.parse(stdin.readLineSync()!);
  print("Hi, my name is $name, and I'm $age years old");
}