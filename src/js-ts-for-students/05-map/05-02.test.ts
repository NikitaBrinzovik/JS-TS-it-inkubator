import {CityType} from "../02-objects/02_02";
import {deleteHousesOnTheStreet, getBuildingWithStaffCountMoreThen} from "../04-filter/04_02";

let city:CityType
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
    deleteHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})

test("buildingss with correct staff count", () => {
    let buildings =
        getBuildingWithStaffCountMoreThen(
            city.governmentBuildings,
            500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})