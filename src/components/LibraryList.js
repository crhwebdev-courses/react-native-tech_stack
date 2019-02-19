import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({ item }) {
    return <ListItem library={item} />;
  }

  render() {
    //FlatList takes three props:  data to be displayed, renderItem to render it, and
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);
