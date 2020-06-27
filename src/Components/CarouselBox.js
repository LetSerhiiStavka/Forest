import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import qforestImg from '../assets/qforest.jpeg';
import dforestImg from '../assets/dforest.jpg';
import aforestImg from '../assets/aforest.jpg';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={qforestImg}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Forest is an app that helps you stay focused on the important things in life. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={dforestImg}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Forest is an app that helps you stay focused on the important things in life. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aforestImg}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Forest is an app that helps you stay focused on the important things in life. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;