import { Request, Response, NextFunction } from "express";
import ListaService from "../../src/services/listaService";

exports.handler = async function deleteItemLista(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body;
    const listaService = new ListaService();
    await listaService.removerItemLista(id);

    res.status(200).json({ message: "Registro removido com sucesso!"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}