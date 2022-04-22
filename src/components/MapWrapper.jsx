import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import {Point} from 'ol/geom';
import {Feature} from 'ol/index';
import { Vector as VectorSource} from 'ol/source';
import {Circle, Fill, Style} from 'ol/style';

const KEY = process.env.REACT_APP_MAPTILER_KEY
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  
const MapWrapper = ({trailId}) => {
  
  const point = new Point(fromLonLat([-107.504491, 37.912982]));
  const initmap = () => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: attributions,
            url:
              'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + KEY,
        }),
      }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 9,
              fill: new Fill({color: 'red'}),
            }),
          }),
        }),      
      ],
      target: trailId,
      view: new View({
        center: fromLonLat([-107.504491, 37.912982]),
        zoom: 11,
        minZoom: 9,
        maxZoom: 13,
      }),
    });
  }


  window.onload = initmap

  return (
    <div>
      <div id={trailId} className="map"></div>
    </div>
  )
}

export default MapWrapper

 