export interface Site {
    ID: number
    UUID: string
    AddressInfo: AddressInfo
}

export interface AddressInfo {
    ID: number
    Title: string
    AddressLine1: string
    AddressLine2?: string
    Town?: string
    StateOrProvince: string
    Postcode: string
    Country: Country
    CountryID: number
    Latitude: number
    Longitude: number
    ContactTelephone1?: string
    ContactTelephone2?: string
    ContactEmail?: string
    AccessComments?: string
    RelatedURL?: string
    Distance?: string
}

interface Country { 
    ISOCode: string
    ContinentCode: string
    ID: number
    Title: string
}