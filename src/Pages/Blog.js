import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Media,Container,Col,Row,Card,ListGroup} from "react-bootstrap"

class Blog extends Component {
    render() {
        return (
         <Container>
             <Row>
                 <Col md="9">
                     <Media className="m-5">
                         <img
                             width={300}
                             height={300}
                             className="mr-3"
                             src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         />
                         <Media.Body>
                             <h5>Gray Bridge and Trees</h5>
                             <p>Forest provides an interesting solution to save you from Internet addiction. You can plant a seed in Forest.
                                 In the next 30 minutes, this seed will gradually grow into a tree. However, if you cannot resist the temptation and start to browse the websites on your Blacklist, your tree will wither away.
                                 With this interesting mechanism, the sense of achievement and responsibility will drive our users to stay away from the distractions with no pain.</p>
                         </Media.Body>
                     </Media>

                     <Media className="m-5">
                         <img
                             width={300}
                             height={300}
                             className="mr-3"
                             src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Forest provides an interesting solution to save you from Internet addiction. You can plant a seed in Forest.
                                 In the next 30 minutes, this seed will gradually grow into a tree. However, if you cannot resist the temptation and start to browse the websites on your Blacklist, your tree will wither away.
                                 With this interesting mechanism, the sense of achievement and responsibility will drive our users to stay away from the distractions with no pain.</p>
                         </Media.Body>
                     </Media>

                     <Media className="m-5">
                         <img
                             width={300}
                             height={300}
                             className="mr-3"
                             src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Forest provides an interesting solution to save you from Internet addiction. You can plant a seed in Forest.
                                 In the next 30 minutes, this seed will gradually grow into a tree. However, if you cannot resist the temptation and start to browse the websites on your Blacklist, your tree will wither away.
                                 With this interesting mechanism, the sense of achievement and responsibility will drive our users to stay away from the distractions with no pain.</p>
                         </Media.Body>
                     </Media>

                     <Media className="m-5">
                         <img
                             width={300}
                             height={300}
                             className="mr-3"
                             src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Forest provides an interesting solution to save you from Internet addiction. You can plant a seed in Forest.
                                 In the next 30 minutes, this seed will gradually grow into a tree. However, if you cannot resist the temptation and start to browse the websites on your Blacklist, your tree will wither away.
                                 With this interesting mechanism, the sense of achievement and responsibility will drive our users to stay away from the distractions with no pain.</p>
                         </Media.Body>
                     </Media>
                 </Col>
                 <Col md="md-3">
                    <h5 className="text-center mt-5" >Categories</h5>
                     <Card>
                         <ListGroup variant="flush">
                            <ListGroup.Item>Tree</ListGroup.Item>
                             <ListGroup.Item>Flowers</ListGroup.Item>
                             <ListGroup.Item>Nature</ListGroup.Item>
                         </ListGroup>
                     </Card>
                     <Card className="mt-3" bg="light">
                         <Card.Body>
                             <Card.Title>Side widget</Card.Title>
                             <Card.Text>Forest provides an interesting .</Card.Text>
                         </Card.Body>
                     </Card>
                 </Col>
             </Row>
         </Container>
        );
    }
}

export default Blog;