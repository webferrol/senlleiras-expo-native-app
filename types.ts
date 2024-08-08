import { SvgProps } from "react-native-svg";

export interface SvgPropsExtends extends SvgProps {
  xmlns?: string;
  className?: string;
}

export interface Tree {
  idDoc: string;
  idEspecie: string;
  lat: string;
  lng: string;
  altura: number;
  descripcion: string;
  diametro: number;
  especie: string;
  nombre_arbol: string;
  nombre_comun: string;
  numero_mapa: number;
  propuesta_senlleira: boolean;
  publicado: boolean;
  senlleira: boolean;
  storage_ref: string;
  ubicacion_parque: string;
  zona_geografica: string;
  genero: string;
  google_url: string;
}
