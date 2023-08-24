const Shape = require("./shapes");

class BrandText {
    constructor() {
        this.text = ''
        this.textColor = ''
    }
    setColor(color) {
        this.textColor = color
    }
    setText(text) {
        this.text = text
    }
    render() {
        return `<text font-size="40" text-anchor="middle" x="150" y="120" fill="${this.textColor}">${this.text}</text>`
    }
}

class Svg {
    constructor(shape, text) {
        this.shape = shape.render()
        this.text = text.render()
    }
    updateShape(shape) {
        this.shape = shape.render()
    }
    updateText(text) {
        this.text = text.render()
    }
    render() {
        return `<svg width="300" height="200">${this.shape}${this.text}</svg>`
    }
}

module.exports = { BrandText, Svg }
