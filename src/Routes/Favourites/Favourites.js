import React, { Component, Fragment } from 'react';
import { Loading, ArticleList, ModuleSearch } from 'components';

function queryValue(queries, keyName) {
  let query = new URLSearchParams(queries);
  return query.get(keyName) || "";
}

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      isLoading: true
    }
    this.fetchDirectoryDetails = this.fetchDirectoryDetails.bind(this);
  }

  componentDidMount() {
    this.fetchDirectoryDetails()
  }

  fetchDirectoryDetails(e) {
    let queryParams = this.props.location.search;

    fetch(`http://localhost:3000/api/diaries/favourites/${queryParams}`)
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
        { data.diaries &&
          <ModuleSearch
            queryValue={query.Key}
            queryPage={query.Page}
            onSearch={this.fetchDirectoryDetails}
            placeHolder="Search by title"
            pageMeta={data.meta}/>
        }
        { isLoading ? 
            <Loading/>
          :
          data.diaries.map((diarie) => 
            <ArticleList
              key={diarie._id}
              redirectTo={`/directory/${diarie._id}`}
              data={diarie}
              />
          )
        }
      </Fragment>
    );
  }
}
 
export default Favourites;