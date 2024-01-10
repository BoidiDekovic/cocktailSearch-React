import React from 'react';
import { Carousel } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const CarouselBebidas = () => {
  const { bebidas } = useBebidas();

  return (
    <Carousel>
      {bebidas.map((bebida) => (
        <Carousel.Item key={bebida.idDrink}>
          <img
            className="global-carousel-image-style"
            src={bebida.strDrinkThumb}
            alt={`Imagen de ${bebida.strDrink}`}
          />
          <Carousel.Caption>
            <h3>{bebida.strDrink}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBebidas;