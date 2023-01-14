export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toGLSL() {
        return `vec3(${this.x},${this.y},${this.z})`;
    }

    toArray() {
        return [this.x, this.y, this.z];
    }

    add(other: Vector3): Vector3 {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }
}