import React, { useEffect, useState } from 'react'
import { useTheme } from "@emotion/react"
import { tokens } from "../theme"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-icon.png"
import data from '../scenes/mapa/data.json'

const iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [60,55],
    iconAnchor: [22,94],
    shadowAnchor: [22,94],
    popupAnchor: [-3,-76]
});

export const Mapa = () => {
     const [puntos, setPuntos] = useState ([])
     const obtenerPuntos = () => {
        const arreglo= [];
        data.map(info => {
            arreglo.push(
            <Marker position={[info.latitud, info.longitud]} icon={iconUbicacion}>
                <Popup>
                  {info.estadio} pertenece al equipo {info.equipo}
                </Popup>
              </Marker>
            );
        });
        setPuntos(arreglo);
     }

     useEffect(() =>{
        obtenerPuntos();
     }, [])

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <MapContainer center={[41.9100711, 12.5359979]} zoom={15} scrollWheelZoom={false} className='mapa'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {puntos}
    </MapContainer>
  );
}

