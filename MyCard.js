import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const MyCard = ({details}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large} ></img>
                <CardTitle className="text-primary">
                    <h1>
                        <span>
                            {details.name?.title}
                            {details.name?.first}
                            {details.name?.last}
                        </span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt></FaMapMarkedAlt>
                        {details.location?.city}
                        <p>{details.phone}</p>
                        <h5>{details.email}</h5>
                        <button style={{backgroundColor:"grey"}}>{details.dob?.date}
                        <button style={{backgroundColor:"#1FAA59", color:"white"}}>{details.dob?.age}</button></button>
                    
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;