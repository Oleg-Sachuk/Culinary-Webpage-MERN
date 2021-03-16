import  React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {

    render () {
        return <MainPage {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps,{})(MainPageContainer);