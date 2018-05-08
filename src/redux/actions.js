

export const removeCompany = index => ({
    type: 'REMOVE_COMPANY',
    index
})

export const addCompany = company => ({
    type: 'ADD_COMPANY',
    company
})

export const addOffice = office => ({
    type: 'ADD_OFFICE',
    office
})

export const removeOffice = index => ({
    type: 'REMOVE_OFFICE',
    index
})