import mapboxgl from 'mapbox-gl';
import 'dotenv/config';

const mapboxToken = process.env.MAPBOX_API_TOKEN;

if (!mapboxToken) {
    throw new Error("Mapbox API token is missing.");
}

mapboxgl.accessToken = mapboxToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-98.5795, 39.8283],
  zoom: 4,
});

//async function fetchData() {
//}

//fetchData();
