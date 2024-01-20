import { readable } from "svelte/store";
import {ex} from "../data/ex.json"

//Obtener Servicios desde el JSON
const data = { ex } || {};
//Crear Readable
export const exReadable = readable({}, (set) => {
    set(data);
});
export const exUnsubscribe = exReadable.subscribe(() => {

} );



