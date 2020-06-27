import React, {Component} from 'react';
import  {Container,Tab,Nav,Row,Col} from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Freameworks</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://thumbs.dreamstime.com/b/concept-coworking-center-business-meeting-shared-working-environment-people-talking-working-computers-53718120.jpg"/>
                                    <p>Figma on Figma: How we built our website design system</p>
                                    <p>Our first step was to take stock of what we had – fonts, sizes, colors, column widths, layouts, and so <on className=""></on></p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://thumbs.dreamstime.com/b/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-ofice-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B-62701458.jpg"/>
                                    <p>At Figma, we think design systems are a powerful tool to help democratize and empower entire organizations to be a part of the design process.
                                        They enable consistency at scale and help teams deliver better products, faster. But what product design teams have been learning and adopting in terms of design systems has not been as quick to catch on when it comes to marketing and web design.</p>
                                    <p>We also looked for elements that were similar, but not exactly the same, and agreed on one style.
                                        So, instead of 12 different sizes for headings, we established an H1-H3, body copy, and technical copy styles.
                                        We did the same for our blog and other long form content, adding styles such as pull quotes and block quotes.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://thumbs.dreamstime.com/b/vector-illustration-big-computer-programmer-team-moving-cards-electronic-kanban-task-board-online-app-agile-visual-141932909.jpg"/>
                                    <p>Taking inventory
                                        Our first step was to take stock of what we had – fonts, sizes, colors, column widths, layouts, and so on.
                                        We started compiling all of that information into a Figma file, and from there, it was easy to see overlaps, or in other words, repeated applications of patterns that just needed to be unified.
                                        We also spotted the outliers,
                                        or those components that had been used only once, and therefore didn’t have a place in our style guide.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://www.thecommonwealth-healthhub.net/wp-content/uploads/2016/06/Systems-framework.jpg"/>
                                    <p>Figma on Figma: How we built our website design system</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://sdtimes.com/wp-content/uploads/2017/10/workflow-devops-agile.png"/>
                                    <p>Figma on Figma: How we built our website design system</p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        );
    }
}

export default About;