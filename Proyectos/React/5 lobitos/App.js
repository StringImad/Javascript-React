import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [valores, setValores] = useState([0, 0, 0, 0, 0]);
    const [colores, setColores] = useState(Array(5));

    useEffect(() => {
        // Esta función se ejecuta una vez, al inicio del programa
        //rellena todos los botones con el color secondary
        const coloresIniciales = Array(valores.length).fill('secondary');
        setColores(coloresIniciales);
    }, [valores.length]);


    // Esta función se ejecuta cada vez que se hace click en un botón
    const handleClick = (index) => {
        
        const nuevosValores = [...valores];
        console.log("nuevos valores: ",nuevosValores)
        //aumenta su el valor en 1 a la posicion correspondiente
        nuevosValores[index] += 1;
         //almacena el valor maximo de nuevosValores
        const valorMasAltoDeClics = Math.max(...nuevosValores);
        console.log("valor mas  alto de clics: ", valorMasAltoDeClics);
        //si la condicion de que el valor es igual que el valor mas alto entonces se le asigna primary si es false secondary
        const nuevosColores = nuevosValores.map((valor) => valor === valorMasAltoDeClics ? 'primary' : 'secondary');
        //actualizamos tanto el valor como el color
        setValores(nuevosValores);
        setColores(nuevosColores);
    };

    return (
        <div>
            {valores.map((valor, index) => (
                <Button
                    key={index}
                    color={colores[index]}
                    onClick={() => handleClick(index)}
                >
                    {valor}
                </Button>
            ))}
        </div>
    );
};

export default App;