/* eslint-disable */
import * as L from 'leaflet';

const mapLayers = {
    layer1: L.TileLayer.wms(
        'http://ows.mundialis.de/services/service?',
        {
            layers: 'TOPO-OSM-WMS',
            opacity: 1.0,
            zIndex: 2,
        }
    ),
};