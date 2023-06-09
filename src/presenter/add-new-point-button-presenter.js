import { render } from '../framework/render.js';
import AddNewPointButtonView from '../view/new-event-button-view.js';

export default class AddNewPointButtonPresenter {
  #newPointButtonContainer = null;
  #destinationsModel = null;
  #pointsModel = null;
  #offersModel = null;
  #headerPresenter = null;
  #newPointButtonComponent = null;

  constructor({newPointButtonContainer, destinationsModel, pointsModel, offersModel, headerPresenter}) {
    this.#newPointButtonContainer = newPointButtonContainer;
    this.#destinationsModel = destinationsModel;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#headerPresenter = headerPresenter;
  }

  init() {
    this.#newPointButtonComponent = new AddNewPointButtonView();
  }

  renderNewPointButton = () => {
    render(this.#newPointButtonComponent, this.#newPointButtonContainer);
    this.#newPointButtonComponent.setClickHandler(this.#handleNewPointButtonClick);
    if (this.#offersModel.offers.length === 0 || this.#offersModel.isSuccessfulLoading === false ||
      this.#destinationsModel.destinations.length === 0 || this.#destinationsModel.isSuccessfulLoading === false ||
      this.#pointsModel.isSuccessfulLoading === false) {
      this.#newPointButtonComponent.element.disabled = true;
    }
  };

  #handleNewPointFormClose = () => {
    this.#newPointButtonComponent.element.disabled = false;
  };

  #handleNewPointButtonClick = () => {
    this.#headerPresenter.createPoint(this.#handleNewPointFormClose);
    this.#newPointButtonComponent.element.disabled = true;
  };
}
