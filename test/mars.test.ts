import MarsRover from "../mars";

describe('Mars Rover', () => {
    let testMarsRover;

    beforeEach(() => {
        testMarsRover = new MarsRover();
    })

    it('move forward by 1', () => {
        const output = testMarsRover.execute('M')
    expect(output).toEqual('0, 1, N')
    })

    it('move forward by 2', () => {
        const output = testMarsRover.execute('MM')
        expect(output).toEqual('0, 2, N')
    })

    it('move forward by 3', () => {
        const output = testMarsRover.execute('MMM')
        expect(output).toEqual('0, 3, N')
    })

    it('change direction', () => {
        const output = testMarsRover.execute('R')
        expect(output).toEqual('0, 0, E')
    })

    it('change direction twice', () => {
        const output = testMarsRover.execute('RR')
        expect(output).toEqual('0, 0, S')
    })

    it('change direction thrice', () => {
        const output = testMarsRover.execute('RRR')
        expect(output).toEqual('0, 0, W')
    })

    it('change direction frice', () => {
        const output = testMarsRover.execute('RRRR')
        expect(output).toEqual('0, 0, N')
    })
})
