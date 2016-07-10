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
        let expected = [
            { text: "Oleg Shalygin", value: "oleg-shalygin" },
            { text: "Carlota Turcios", value: "carlota-turcios" }
        ];

        let actual = authorsFormattedForDropdown(authors);

        expect(actual).toEqual(expected);
    })
});