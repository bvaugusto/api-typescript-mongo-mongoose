import { Request, Response, NextFunction } from "express";
import ListaService from "../../src/services/listaService";
import ListaData from "../../src/services/structures/ListaData";

exports.handler = async function updateLista(req: Request, res: Response, next: NextFunction) {
  try {
    const { descricao, quantidade, id } = req.body;
    const param: ListaData = { descricao, quantidade };
    const listaService = new ListaService();
    const response = await listaService.atualizarLista(id, param);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}