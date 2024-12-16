package main

import "fmt"

func main() {
	// Declaring a variable with explicit data type
	var a int = 10
	var b float64 = 15.5

	fmt.Println("a:", a)
	fmt.Println("b:", b)

	// Declaring a variable with inferred data type
	var name = "John Doe"
	age := 27

	fmt.Println("Name:", name)
	fmt.Println("Age:", age)

	// Declaring constant variables
	const pi = 3.14
	const appName = "Go App"

	fmt.Println("PI:", pi)
	fmt.Println("App Name:", appName)
}
