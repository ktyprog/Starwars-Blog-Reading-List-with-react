import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const PlanetCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population: {props.population}
					<br />
					Terrain: {props.terrain}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/planet_details/${props.index}`}>
						<a href="..." className="btn btn-outline-primary">
							Learn more!
						</a>
					</Link>
					<Context.Consumer>
						{({ actions, store }) => {
							const isFav = store.favorites.find(f => f.name === props.name);
							return (
								<button
									type="button"
									className="btn btn-outline-warning"
									onClick={() => actions.addFavorites(props.name)}>
									{isFav ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
								</button>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	index: PropTypes.number
};

export default PlanetCard;
