import { render, remove } from '../framework/render.js';
import InfoView from '../view/info-view.js';

export default class InfoPresenter {
  #points = null;
  #infoComponent = null;
  #infoContainer = null;
  #destinationsModel = null;
  #offersModel = null;

  #destinations = null;
  #offers = null;

  constructor(tripInfoContainer, destinationsModel, offersModel) {
    this.#infoContainer = tripInfoContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init = (points) => {
    this.#points = points;
    this.#destinations = [...this.#destinationsModel.destinations];
    this.#offers = [...this.#offersModel.offers];

    this.#infoComponent = new InfoView(this.#points, this.#destinations, this.#offers);

    render(this.#infoComponent, this.#infoContainer);
  };

  destroy = () => {
    remove(this.#infoComponent);
  };
}
