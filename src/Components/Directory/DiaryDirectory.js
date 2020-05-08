import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { Loading } from 'components';

const BlogWrapper = styled.section `
  max-width: 680px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 20px;
  padding-bottom: 20px;
  word-break: break-all;

  &:last-child {
    margin-bottom: 0px;
    border: none;
  }
`;

const BlogTitle = styled(NavLink) `
  font-size: 28px;
  margin: 0;
  color: ${props => props.theme.textPrimary};
`;

const BlogContent = styled.p `
  color: ${props => props.theme.textSecondary};
  font-size: 16px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

class DiaryDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      diaries: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/diaries').then(val => val.json())
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
            <BlogWrapper key={diarie._id}>
              <BlogTitle to={`/directory/${diarie._id}`}>{diarie.title}</BlogTitle>
              <BlogContent>{diarie.content}</BlogContent>
            </BlogWrapper>
          )
        }
      </Fragment>
    );
  }
}
 
export default DiaryDirectory;