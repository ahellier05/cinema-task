import React from 'react';
import { Button } from 'react-bootstrap';

function ExtraForm(props) {

    return (
        <div>
            <h3>Real3D and IMAX Tickets</h3>
            <div>
                <p>Standard Ticket + Real3D</p>{' '}
                <Button onClick={props.increaseStandard3DTicketCount} variant="primary">+</Button>{' '}
                <Button onClick={props.decreaseStandard3DTicketCount} variant="primary">-</Button>{' '}
            </div>
            <div>Total:  {props.standard3DCount}</div>
            <br/>
            <div>
                <p>Concession Ticket + Real3D</p>{' '}
                <Button onClick={props.increaseConcession3DTicketCount} variant="primary">+</Button>{' '}
                <Button onClick={props.decreaseConcession3DTicketCount} variant="primary">-</Button>{' '}
            </div>
            <div>Total:  {props.concession3DCount}</div>
            <br/>
            <div>
                <p>Standard Ticket + IMAX</p>{' '}
                <Button onClick={props.increaseStandardIMAXTicketCount} variant="primary">+</Button>{' '}
                <Button onClick={props.decreaseStandardIMAXTicketCount} variant="primary">-</Button>{' '}
            </div>
            <div>Total:  {props.standardIMAXCount}</div>
            <br/>
            <div>
                <p>Concession Ticket + IMAX</p>{' '}
                <Button onClick={props.increaseConcessionIMAXTicketCount} variant="primary">+</Button>{' '}
                <Button onClick={props.decreaseConcessionIMAXTicketCount} variant="primary">-</Button>{' '}
            </div>
            <div>Total:  {props.concessionIMAXCount}</div>
            <br/>
        </div>

    )
}

export default ExtraForm;