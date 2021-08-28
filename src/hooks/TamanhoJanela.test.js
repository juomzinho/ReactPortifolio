const TamanhoJanela = require("./TamanhoJanela")
// @ponicode
describe("TamanhoJanela.default", () => {
    test("0", () => {
        let callFunction = () => {
            TamanhoJanela.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
