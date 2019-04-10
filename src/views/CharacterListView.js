import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { grabData } from "../actions"

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    props.grabData()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
let mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching
})

export default connect(
  // null /* mapStateToProps replaces null here */,
  mapStateToProps,
    /* action creators go here */
    { grabData }
)(CharacterListView);
