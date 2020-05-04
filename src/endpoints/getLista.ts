import { Request, Response, NextFunction } from "express";
import ListaService from "../../src/services/listaService";

exports.handler = async function getLista(req: Request, res: Response, next: NextFunction) {
  try {
    const listaService = new ListaService();
    const response = await listaService.buscarLista();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}