import {CityType} from "../02-objects/02_02";
import {createMessages, getStreetsGovBuildngs, getStreetTittlesOfHouses} from "./05-02";

let city:CityType;
city = {
    title: 'New-York',
    houses: [
        {
            id: 1, buildAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
        {
            id: 2, buildAt: 2008, repaired: true,
            address: {number: 100, street: {title: 'Happy street'}}
        },
        {
            id: 3, buildAt: 2020, repaired: true,
            address: {number: 1000, street: {title: 'White street'}}
        }],
    governmentBuildings: [
        {
            type: "HOSPITAL",
            address: {title: "Central Str"},
            //number: 12,
            staffCount: 280
        },
        {
            type: "FIRE-STATION",
            address: {title: "South Str"},
            //number: 12,
            staffCount: 1000
        }
    ],
    citizensNumber: 1000000,
}

test("list of names gover-buldings", () => {
    let streetNames= getStreetsGovBuildngs(
        city.governmentBuildings
    )

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("Central Str")
    expect(streetNames[1]).toBe("South Str")
})

test("list of street titles", () => {
    let streets = getStreetTittlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('White street')
})

test ("creat greeting", () => {
    let messages = createMessages(city.houses)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello to White street")
    expect(messages[1]).toBe("Hello to Happy street")
    expect(messages[2]).toBe("Hello to White street")
})