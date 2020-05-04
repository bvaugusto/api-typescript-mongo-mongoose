import Lista from "../../src/schemas/Lista";
import ListaData from "./structures/ListaData";

class ListaService {
  async buscarLista() {
    return await Lista.find();
  }

  async criarLista(params: ListaData) {
    return await Lista.create(params);
  }

  async atualizarLista(id: string, params: ListaData) {
    const filter = { _id: id };
    return await Lista.findOneAndUpdate(filter, params, {
      new: true
    });
  }

  async removerItemLista(id: string) {
    await Lista.deleteOne({ _id: id });
  }
}

export default ListaService;