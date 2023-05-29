import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';



const App = () => {
    return (

        <div className='container'>
            <div className='row'>
                <div className="card-group w-100" >

                    <div className='col'>
                       <Collapse href="collapseExample1" >
                            <Card
                                cardTitle="Card Title I"
                                cardText="Lorem Ipsum Text I"
                                updatedTime="Last Updated 1 min ago"
                                image="http://picsum.photos/id/1/200/300"
                            />
                        </Collapse>
                    </div>

                    <div className='col'>
                        <Collapse href="collapseExample2" >
                            <Card
                                cardTitle="Card Title II"
                                cardText="Lorem Ipsum Text II"
                                updatedTime="Last Updated 1 min ago"
                                image="http://picsum.photos/id/2/200/300"
                            />
                        </Collapse>
                    </div>


                    <div className='col'>
                        <Collapse href="collapseExample3" >
                            <Card
                                cardTitle="Card Title III"
                                cardText="Lorem Ipsum Text III"
                                updatedTime="Last Updated 1 min ago"
                                image="http://picsum.photos/id/3/200/300"
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );



};




ReactDOM.render(
    <App />,
    document.getElementById('root')
);