import React from 'react';
import { View } from 'react-native';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { styles } from '../../styles/styles';

const token = 'pk.eyJ1IjoidGhhdGNoZXIiLCJhIjoiY2s2NmM1ZmxnMDVlcDNrbTgyZGJ1MHlvcyJ9.8wM1j84kDuFiTNkZIkMlHQ';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhhdGNoZXIiLCJhIjoiY2s2NmM1ZmxnMDVlcDNrbTgyZGJ1MHlvcyJ9.8wM1j84kDuFiTNkZIkMlHQ';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    const [lat, lng] = this.props.cords;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.cords !== this.props.cords) {
      const [lat, lng] = this.props.cords;
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
  cords: state.cords
})

export default connect(mapStateToProps)(Map);