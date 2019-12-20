import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";

const receiveAllPins = (pins) => ({
	type: RECEIVE_ALL_PINS,
	pins
});

const receivePin = (pin) => ({
	type: RECEIVE_PIN,
	pin
});

// const deletePin = () => ({
// 	type: REMOVE_PIN
// });

export const fetchPins = () => dispatch => (
	PinApiUtil.fetchPins().then((pins) => dispatch(receiveAllPins(pins)))
);

export const fetchPin = (id) => dispatch => (
	PinApiUtil.fetchPin(id).then((pin) => dispatch(receivePin(pin)))
);

export const createPin = (pin) => dispatch => (
	PinApiUtil.createPin(pin).then((pin) => dispatch(receivePin(pin)))
);

export const removePin = (id) => dispatch => (
	PinApiUtil.removePin(id).then((pin) => dispatch({ type: REMOVE_PIN, pinId: pin.id }))
);
