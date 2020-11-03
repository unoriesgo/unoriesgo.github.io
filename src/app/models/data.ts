export class Data {
    constructor(_id = "", nombre = "", descripcion = "", imagen = "", links = []) {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.links = links;
    }

    _id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    links: string [];
    
}