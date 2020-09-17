import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import { styles } from '../../styles/styles';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhdGNoZXIiLCJhIjoiY2s2NmM1ZmxnMDVlcDNrbTgyZGJ1MHlvcyJ9.8wM1j84kDuFiTNkZIkMlHQ';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 52.42,
      lat: 31.01,
      zoom: 8
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <View>
        <View ref={el => this.mapContainer = el} style = {styles.mapContainer} />
      </View>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Map);