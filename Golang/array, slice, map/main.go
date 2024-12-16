package main

import "fmt"

func main() {
	var numbers [5]int // Declaring an array of integers with size 5
	numbers[0] = 10    // Assigning value 10 to the first element
	numbers[1] = 20    // Assigning value 20 to the second element
	numbers[2] = 30    // Assigning value 30 to the third element
	numbers[3] = 40    // Assigning value 40 to the fourth element
	numbers[4] = 50    // Assigning value 50 to the fifth element

	fmt.Println("Numbers:", numbers)

	names := [3]string{"Alice", "Bob", "Charlie"} // Declaring and initializing an array of strings
	fmt.Println("Names:", names)

	var slice = []int{20, 13, 532, 12, 643} // Declaring a slice of integers

	slice = append(slice, 100, 23) // Appending 100 and 23 to the slice

	fmt.Println("Slice:", slice)
	fmt.Println("Sub-slice:", slice[3:6]) // Slicing the slice from index 3 to 6

	// Declaring a map with key as string and value as integer
	var person = map[string]int{
		"age":    25,
		"height": 180,
	}

	person["weight"] = 70 // Adding a new key-value pair to the map

	fmt.Println("Person:", person)
	fmt.Println("Age:", person["age"])
}
