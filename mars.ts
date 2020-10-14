class MarsRover {
    xAxis = 0;
    yAxis = 0;
    DIRECTION_NORTH = 'N';
    DIRECTION_EAST = 'E';
    DIRECTION_SOUTH = 'S';
    DIRECTION_WEST = 'W'
    direction = this.DIRECTION_NORTH;
    MOVE = 'M';
    RIGHT = 'R';
    LEFT = 'L';

    constructor() {
        //
    }
    execute(instruction) {
        if (instruction.includes(this.MOVE)) {
            this.yAxis = instruction.length
        return `${this.xAxis}, ${this.yAxis}, ${this.direction}`
        }
        return this.rotateRight(instruction)
    }

rotateRight(instructions) {
    instructions.split('').forEach((instruction) => {
        if (this.direction === this.DIRECTION_NORTH){
            this.direction = this.DIRECTION_EAST
        }
        else if (this.direction === this.DIRECTION_EAST){
            this.direction = this.DIRECTION_SOUTH
        }
        else if (this.direction === this.DIRECTION_SOUTH){
            this.direction = this.DIRECTION_WEST
        }
        else {
            this.direction = this.DIRECTION_NORTH
        }
      }
    )
    return `${this.xAxis}, ${this.yAxis}, ${this.direction}`
  }
}

export default MarsRover;
