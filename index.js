// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(
            (total, side) => total + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3
            && this.sides[0] + this.sides[1] > this.sides[2]
            && this.sides[1] + this.sides[2] > this.sides[0]
            && this.sides[2] + this.sides[0] > this.sides[1]) {
                return true
            }
            else {
                return false
            }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4
            && this.sides[0] === this.sides[1] 
            && this.sides[1] === this.sides[2] 
            && this.sides[2]=== this.sides[3]
            && this.sides[0] === this.sides[3]) {
                return true
            }
        else {
                return false
            }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}