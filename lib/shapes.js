class Shape {
    constructor() {
        this.color='#000'
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="60" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="50,160 250,160 150,20" fill="${this.color}" />`
    }
}

class Square extends Shape{
    render(){
        return `<rect width="150" height="150" x="75" y="25" fill="${this.color}" />`
    }
}

module.exports = {Circle, Triangle, Square}
