import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return ( 
        <div
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.figure && cell.available ? 'green' : ''}}
        >
            {!cell.figure && cell.available && <div className="avaliable"/>}
            {cell.figure?.logo && <img src={cell.figure.logo}></img>}
        </div>
    );
}

export default CellComponent;