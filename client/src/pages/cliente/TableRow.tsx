import React from "react";
import { Link } from "react-router-dom";
import Cliente from "../../models/cliente";
import BaseService from "../../service/base.service";
import * as toastr from "toastr";

function Delete(Id?: number) {
    BaseService.delete(`/Cliente/${Id}`, null)
        .then((rp) => {
            if (rp.Status) {
                toastr.success("Cliente Removido com sucesso!.");
                window.location.reload();
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        });
}

interface IProps {
    cliente: Cliente;
    index: Number;
}

const TableRow: React.FunctionComponent<IProps> = (props) => {
    return (
        <tr>
            <td>{props.cliente.nomeCompleto}</td>
            <td>{props.cliente.cpf}</td>
            <td>{`${props.cliente.dataNascimento.substring(8, 10)}/${props.cliente.dataNascimento.substring(5, 7)}/${props.cliente.dataNascimento.substring(0, 4)}`}</td>
            <td>{props.cliente.sexo}</td>
            <td>{props.cliente.cidade}</td>
            <td>{props.cliente.estado}</td>
            <td>
                <div className="justify-content-center">
                    <Link to={"/cliente/edit/" + props.cliente.id} className="btn btn-outline-primary">
                        Alterar
                    </Link>
                    <span> </span>
                    <button onClick={() => Delete(props.cliente.id)} className="btn btn-outline-danger">
                        Remover
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default TableRow;
