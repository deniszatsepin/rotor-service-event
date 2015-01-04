var chai      = require('chai');
var sinon     = require('sinon');
var sinonChai = require('sinon-chai');
var expect    = chai.expect;

chai.should();
chai.use(sinonChai);

var EventService = require('../lib/event');

describe('EventService tests:', function() {
  describe('EventService', function() {
    var eventService;

    before(function() {
      eventService = new EventService();
    });

    it('should have an initialize method', function() {
      expect(eventService.initialize).to.be.not.an('undefined');
    });

    it('should have an update method', function() {
      expect(eventService.update).to.be.not.an('undefined');
    });
  });
});
