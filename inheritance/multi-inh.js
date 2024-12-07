class shape {
    constructor(color)
    {
        this.color = color;
    }
    getColour()
    {
        return this.color
    }
}

class circle extends shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    getRadius()
    {
        return this.radius;
    }
}

class ColorCircle extends circle{
    constructor(color , radius)
    {
        super(color,radius);
    }
}

let obj = new ColorCircle ('blue',5);
console.log(obj);

