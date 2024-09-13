
import Home from '../components/Home';

import { connect} from 'react-redux'


import { addTocard } from '../services/Actions/action';
import carditem from '../services/Reducers/reducer';






const mapStateToProps=State=>({
   item:State.carditem


})
const mapDispatchToProps =dispatch=>({

addTocardhandler:date=>(addTocard(date))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

