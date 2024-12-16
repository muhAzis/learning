package main

import "fmt"

func main() {
	x := 10    // Declaring a variable x with value 10
	ptrX := &x // Declaring a pointer ptrX that points to x

	fmt.Println("Value of x    :", x)
	fmt.Println("Address of x  :", &x)
	fmt.Println("Value of ptrX :", ptrX)
	fmt.Println("Value of *ptrX:", *ptrX)
}
