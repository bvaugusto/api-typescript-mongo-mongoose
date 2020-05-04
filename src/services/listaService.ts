import Lista from "../../src/schemas/Lista";
import ListaData from "./structures/ListaData";

class ListaService {
  async buscarLista() {
    return await Lista.find();
  }

  async criarLista(params: ListaData) {
    return await Lista.create(params);
  }
}

export default ListaService;