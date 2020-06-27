import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox'
import {Container,CardDeck,Card,Button} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
            <Container>
                <h2 className="text-center" m-4>Our team</h2>
                <CardDeck className="m-4">
                    <Card bg="light" border="dark">
                        <Card.Img variant="top"
                        src="https://images.pexels.com/photos/573874/pexels-photo-573874.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Mountain</Card.Title>
                            <Card.Text>A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak.
                                A mountain is generally considered to be steeper than a hill.
                                Mountains are formed through tectonic forces or volcanism.
                                These forces can locally raise the surface of the earth.
                                Mountains erode slowly through the action of rivers, weather conditions, and glaciers. </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light" border="dark">

                        <Card.Body>
                            <Card.Title className="text-center">Tree</Card.Title>
                            <Card.Text>A tree typically has many secondary branches supported clear of the ground by the trunk. This trunk typically contains woody tissue for strength, and vascular tissue to carry materials from one part of the tree to another.
                                For most trees it is surrounded by a layer of bark which serves as a protective barrier. </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="buttom"
                                  src="https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </Card>

                    <Card bg="light" border="dark">
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">Green Trees</Card.Title>
                            <Card.Text>Hire a Trusted Developers on Upwork - The Leading Online Talent Solution.
                                Browse a Talent Pool of Developer to Find Experts in Minutes, Not Weeks.
                                Secure Payments. Advanced Matching Tech. Trusted by 5M+ Businesses. Increased Productivity.</Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>

</>
        );
    }
}

export default Home;