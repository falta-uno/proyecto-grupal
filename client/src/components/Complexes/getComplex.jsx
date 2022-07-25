import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getComplex } from '../../redux/Complexes/ComplexAction';
import CardComplex from './cardComplex';
import { useEffect } from 'react';

const GetComplex = () => {
    const dispatch = useDispatch()
    const complex = useSelector(state => state.complexReducer.complex)

    useEffect(() => {
        dispatch(getComplex());
    }, [dispatch]);
    console.log(complex)
  return (
    <div>
                {complex?.map((x) => {
                    return (
                        <CardComplex
                            key={x.id}
                            name={x.name}
                            image={x.image}
                            description={x.description}
                            rating={x.rating}
                            adress={x.adress}
                        />
                    );
                })}
                
    </div>
   
  )
}

export default GetComplex