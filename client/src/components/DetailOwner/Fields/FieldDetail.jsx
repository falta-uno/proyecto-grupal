import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFieldDetail } from "../../../redux/OwnerFields/FieldDetailOwner/FieldDetailAction"

export default function FieldDetail({ id }) {
    const dispatch = useDispatch();
    let field = useSelector((state) => state.fieldDetailReducer.fieldDetail)
    console.log(field, 'soy yoooo')
    useEffect(() => {
        dispatch(getFieldDetail(id));
    }, [])

    return (
        <div>
            <div>
                <Link to='/fieldOwner' style={{ 'padding': '10px', 'width': '25%', 'margin': '20px 10px 10px 10px' }}>
                    <Button style={{ 'marginTop': '15px' }}>Volver</Button>
                </Link>
            </div>
            <div className="tituloName">
                <h2 className="fw-normal text-white fst-italic m-9" style={{ fontSize: '3em', marginLeft: '35%' }}>{field.name}</h2>
                <h5>{field.complexId}</h5>
            </div>
            <div>
                <form /*onSubmit={(e) => handleSubmit(e)} */>
                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Descripción</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <textarea className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.description} />
                    {/* {errors.description ? <div className="errores" style={{ marginLeft: '80px' }}>{errors.description}</div> : null} */}
                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Capacidad de jugadores</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.capacity} />

                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Precio por turno</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.pricePerTurn} />

                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Horario de apertura de la cancha</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.start} />
                    
                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Horario de cierre de la cancha</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.end} />
                    
                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Duración por turno</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.durationPerTurn} />

                    <div className='contenedorLapiz'>
                        <p className="subTitulos">Deporte</p>
                        <img src='https://cdn-icons-png.flaticon.com/512/1250/1250615.png' className='lapiz'></img>
                    </div>
                    <input className="infoForm" name='description' /*onChange={ev => onClick(ev)} */ value={field.sport} />


                </form>
            </div>
            <div style={{ backgroundImage: `url(${field.image})` }} className='derecha'>
                <div className='div-rating' style={{ backgroundColor: `rgba(17, 24, 37, 1)`, padding: '7px 15px 3px', height: '50px', width: '150px' }}>
                    <img src="https://api.iconify.design/material-symbols:star-rounded.svg?color=%23ffee00" alt="" className="rating-img" style={{ height: `28px` }} />
                    <p className="complex-rating" style={{ fontSize: `1.3em`, textShadow: '1px 1px 3px black;' }}> {field.available}</p>
                </div>
            </div>
        </div>

    )
}