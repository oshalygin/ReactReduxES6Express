import expect from "expect";
import { authorsFormattedForDropdown } from "./selectors.js";

describe("Author Selectors", () => {

    it("should return author data formatted for use in the dropdown", () => {
        const authors = [
            {
                id: "oleg-shalygin",
                firstName: "Oleg",
                lastName: "Shalygin"
            },
            {
                id: "carlota-turcios",
                firstName: "Carlota",
                lastName: "Turcios"
            },
        ];
        let expected = ["Oleg Shalygin", "Carlota Turcios"];
        let actual = authorsFormattedForDropdown(authors);

        expect(actual).toEqual(expected);
    })
});