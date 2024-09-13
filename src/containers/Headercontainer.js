
import Header from '../components/Header';

import { connect} from 'react-redux'








const mapStateToProps=state=>({

    date:state.carditem

})
const mapDispatchToProps =dispatch=>({



})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

