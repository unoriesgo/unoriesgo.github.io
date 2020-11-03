export interface RootObject {
  nombre: string;
  descripcion: string;
  etiquetas: string[];
  links: Link[];
  imagen: string;
  _id?:string;
}

export interface Link {
  Plataforma: string;
  url?: string;
}