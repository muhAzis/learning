package main

import "fmt"

func main() {
	num := 10

	// If-else statement
	if num%2 == 0 {
		fmt.Println("The number is even")
	} else {
		fmt.Println("The number is odd")
	}

	// Switch statement
	day := "Monday"
	switch day {
	case "Monday":
		fmt.Println("Today is Monday")
	case "Tuesday":
		fmt.Println("Today is Tuesday")
	case "Wednesday":
		fmt.Println("Today is Wednesday")
	case "Thursday":
		fmt.Println("Today is Thursday")
	case "Friday":
		fmt.Println("Today is Friday")
	case "Saturday":
		fmt.Println("Today is Saturday")
	case "Sunday":
		fmt.Println("Today is Sunday")
	default:
		fmt.Println("Invalid day")
	}

	// For loop
	for i := 0; i < num; i++ {
		fmt.Println("i:", i)
	}

	// While loop
	j := 0
	for j < num {
		fmt.Println("j:", j)
		j++
	}
}
