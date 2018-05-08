import companies from '../data/companies'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'




const offices = companies.map(company => company.offices)


const officeReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OFFICE':
            return [action.office, ...state]
        case 'REMOVE_OFFICE':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        default:
            return state
    }
}

const companyReducer = (state = companies, action) => {
    switch (action.type) {
        case 'REMOVE_COMPANY':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_COMPANY':
            return [action.company, ...state]
        default:
            return state
    }
}

const rootReducer = combineReducers({companyReducer, officeReducer, form: formReducer})


export default rootReducer