// tslint:disable:no-expression-statement

import { addPosition } from "../index"

describe("addPosition", () => {
    it("'h'", () => {
        const result = addPosition("h")
            .toArray()
        expect(result)
            .toEqual([{ c: "h", position: { line: 1, column: 1 }}])
    })
    it("'h\\nw'", () => {
        const result = addPosition("h\nw")
            .toArray()
        expect(result)
            .toEqual([
                { c: "h", position: { line: 1, column: 1 }},
                { c: "\n", position: { line: 1, column: 2 }},
                { c: "w", position: { line: 2, column: 1 }},
            ])
    })
})
