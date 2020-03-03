import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGallery } from '../actions';

import { Photo } from '../components/Photo';

export class Gallery extends Component {
  componentDidMount() {
    this.props.fetchGallery();
  }
  render() {
    const {
      gallery: { isLoading, gallery, error },
    } = this.props;
    const loader = isLoading && <h1>LOADING</h1>;
    return (
      loader || (
        <div>
          <h1>Gallery App</h1>
          {gallery.map(({ photoID, url }) => (
            <Photo photoID={photoID} url={url} />
          ))}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return { gallery: state.gallery };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGallery }, dispatch);

const ConnectedGallery = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default ConnectedGallery;
