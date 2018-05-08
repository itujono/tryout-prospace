import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'


function mapStateToProps(state) {
    return {
        companies: state.companyReducer,
        offices: state.officeReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)


export default App