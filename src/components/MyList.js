import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList, getRecommendation, getPending, getError } from '../redux/selectors';
import { fetchList, deleteMyList, addToMyList } from '../redux/actions';
import List from './List';
import logo from './Netflix-Logo.png';


function MyList(props) {
  const { fetchList, list, error, recommendation, pending, deleteMyList, addToMyList } = props;
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (pending) {
    return (<p>Pending...</p>);
  } else if (error) {
    return (<p>Loading Error! {error.message}</p>);
  }

  return (
    <div>
      <div className="bar">
        <img
          src={logo}
          alt="netflix-icon">
        </img>
      </div>
      <div className="list-header">
        <h2>My List</h2>
      </div>
      <List list={list} handleClick={deleteMyList} eventType={'delete'}/>
      <div className="list-header">
        <h2>Recommandation</h2>
      </div>
      <List list= {recommendation} handleClick={addToMyList} eventType={'add'}/>
      <div className="bottom-bar">
        <h4 className="bottom-header">My List : </h4>
        <List list={list} eventType={'titleOnly'} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pending: getPending(state),
  list: getList(state),
  recommendation: getRecommendation(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchList,
  deleteMyList,
  addToMyList
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);

