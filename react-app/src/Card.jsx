import PropTypes from "prop-types";

function Card(props){
    return(
        <div className="card-container">
            <div className="title-container">
                <h1>{props.titleText}</h1>
            </div>

            <div className="description-container">
                <p>{props.descriptionText}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    titleText: PropTypes.string.isRequired,
    descriptionText : PropTypes.string.isRequired
}

Card.defaultProps = {
    titleText : "Joseph Brendan",
    descriptionText : "This is a description text. Please enter yours!"
}

export default Card