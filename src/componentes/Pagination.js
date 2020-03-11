import React from "react";

function Pagination(props) {
    return(
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &larr;</button>
        </div>
    )
}

export default Pagination;