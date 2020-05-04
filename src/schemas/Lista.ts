import mongosse, { Document, Schema } from "mongoose";

type Lista = Document & {
  descricao: string;
  quantidade: number;
};

const ListaSchema = new Schema(
  {
    descricao: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    quantidade: {
      type: Number
    }
  }
);

export default mongosse.model<Lista>('Lista', ListaSchema);