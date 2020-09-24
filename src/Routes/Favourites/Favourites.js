import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import { ArticleList, ModuleSearch, Loading } from 'components';
import { EmptyState } from 'common';

function queryValue(queries, keyName) {
  let query = new URLSearchParams(queries);
  return query.get(keyName) || "";
}

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      page: 1
    },

    this.fetchDirectoryDetails = this.fetchDirectoryDetails.bind(this);
  }

  componentDidMount() {
    this.fetchDirectoryDetails()
  }

  fetchDirectoryDetails(e) {
    let queryParams = this.props.location.search;
    
    this.setState({ isLoading: true})

    fetch(`${API_URL}/api/diaries/favourites/${queryParams}`)
      .then(val => val.json())
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        })
      })
      .catch(function(err) {
        this.setState({
          isLoading: false
        })
        console.log('Fetch Error :-S', err);
      });
  }

  render() { 
    const { data, isLoading } = this.state;
    const query = {
      Key: queryValue(this.props.location.search, "query"),
      Page: queryValue(this.props.location.search, "page")
    };
    return ( 
      <Fragment>
        { isLoading && <Loading/>}

        {
          (data.diaries && data.diaries.length > 0 || (query.Key.length > 0)) &&
            <ModuleSearch
              queryValue={query.Key}
              queryPage={query.Page}
              onSearch={this.fetchDirectoryDetails}
              placeHolder="Search by title"
              pageMeta={data.meta}/>
        }

        { data.diaries &&
          <>
            <DiaryLists
              diaries={data.diaries}
              />
          </>
        }
      </Fragment>
    );
  }
}

function DiaryLists({ diaries }) {
  return ( diaries.length > 0 ? 
    diaries.map((diarie) => 
      <ArticleList
        key={diarie._id}
        redirectTo={`/directory/${diarie._id}`}
        data={diarie}
        />
    ) : <EmptyState
        content="You don't have any saved starred."/>
  )
}
 
export default withRouter(Favourites);