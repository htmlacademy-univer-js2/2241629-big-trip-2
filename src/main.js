import FiltersView from './view/filters-view.js';
import EventsPresenter from './presenter/events-presenter.js';
import MenuView from './view/menu-view.js';
import { render } from './render.js';
import PointsModel from './model/point-model.js';
import { getPoints, getDestinations, getOffersByType } from './mock/point.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new EventsPresenter(siteMainElement.querySelector('.trip-events'));

const points = getPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();
const pointsModel = new PointsModel();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new MenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

pointsModel.init(points, destinations, offersByType);
tripPresenter.init(pointsModel);
