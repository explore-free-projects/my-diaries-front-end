import React, { Component, Fragment } from 'react';
import { Loading, ArticleList } from 'components';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      diaries: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/diaries/favourites').then(val => val.json())
    .then(data => {
      this.setState({
        diaries: data.diaries,
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
    const { diaries, isLoading } = this.state;
    return ( 
      <Fragment>
        { isLoading ? 
            <Loading/>
          :
          diaries.map((diarie) => 
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