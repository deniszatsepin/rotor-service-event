/**
 * Event service for the RotorWeb engine.
 * @constructor
 */
function EventService() {
  if (EventService._instance === null) {
    EventService._instance = this;
  } else {
    return EventService._instance;
  }
}

var proto = EventService.prototype;

proto.initialize = function() {
	this._eventsPending = false;
};

proto.update = function() {
	this._eventsPending = true;
	while(this._eventsPending) {
		this._eventsPending = false;
		this._game.updateEntities();
	}
};

EventService._instance = null;
EventService.getInstance = function() {
  return EventService._instance;
};

module.exports = EventService;
