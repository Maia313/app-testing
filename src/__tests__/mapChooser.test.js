import mapChooser from '../mapChooser';

describe("mapChooser", function(){
    it("returns an image based on input given to it", function() {
       let expected = "Norrmalm.png";
       let actual = mapChooser("Norrmalm");
       expect(actual).toEqual(expected);
    });
    it("returns an default image when no input is given", function() {
        let expected = "none.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});

