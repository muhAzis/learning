class Animal {
    Animal() {
        System.out.println("New Animal object is created!");
    }

    Animal(String name) {
        System.out.println("New Animal object is created named " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Number data types
        int number1 = 10;
        double number2 = 1.5;
        float number3 = (float)2.3;
        float number4 = 2.3f;

        System.out.println("Integer type = " + number1);
        System.out.println("Double type  = " + number2);
        System.out.println("Float type   = " + number3 + " // " + number4);

        // Boolean data type
        boolean bool1 = true;
        boolean bool2 = false;

        System.out.println("Boolean type true  = " + bool1);
        System.out.println("Boolean type false = " + bool2);

        // Object data type
        Animal animal1 = new Animal();
        Animal animal2 = new Animal("Bubu");

        // Array data type
        int[] numbers = {10, 11, 15, 45, 62, 12, 75};

        for(int i = 0; i < numbers.length; i++) {
            System.out.println("Number index " + i + " = " + numbers[i]);
        }
    }
}