import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import Title from 'components/Title'

class App extends React.PureComponent {
  state = {
    comments: [],
  }

  handleSubmit = comment => {
    this.setState(state => ({
      comments: [...state.comments, comment],
    }))
  }

  handleShowProfile = id => {
    this.setState({ currentComment: this.state.comments[id] })
  }

  render() {
    const { comments } = this.state
    return (
      <>
        <Title title="My App" items={[1, 2, 3]} />
        <CommentBox handleSubmit={this.handleSubmit} />
        <CommentList
          comments={comments}
          handleShowProfile={this.handleShowProfile}
        />
      </>
    )
  }
}

export default App
