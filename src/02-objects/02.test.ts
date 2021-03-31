import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {

    city = {
        title: 'New-York',
        houses: [
            {
                buildAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildAt: 2008, repaired: true,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildAt: 2020, repaired: true,
                address: {number: 1000, street: {title: 'White street'}}
            }],
        governmentBuildings: [],
        citizensNumber: 1000000,
    }
})

test('city must have 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(true)
    expect(city.houses[2].address.number).toBe(1000)
    expect(city.houses[2].address.street.title).toBe('White street')
})