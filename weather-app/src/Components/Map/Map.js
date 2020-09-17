import React from 'react';
import { View } from 'react-native';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { styles } from '../../styles/styles';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhdGNoZXIiLCJhIjoiY2s2NmM1ZmxnMDVlcDNrbTgyZGJ1MHlvcyJ9.8wM1j84kDuFiTNkZIkMlHQ';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      const lat = this.props.lat;
      const lng = this.props.lng;
      this.map.setCenter([lng, lat]);
    }
  }

  render() {
    return (
      <View
        ref = {el => this.mapContainer = el}
        style = {styles.mapContainer}
      />
    )
  }
}

const mapStateToProps = state => ({
  lat: state.weather.lat,
  lng: state.weather.lng
})

export default connect(mapStateToProps)(Map);