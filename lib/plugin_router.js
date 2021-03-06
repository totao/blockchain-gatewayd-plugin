// Generated by CoffeeScript 1.7.1
var BlockchainBridgeController, BlockchainBridgeRouter, RippleToBlockchainBridgeController, express;

express = require("express");

BlockchainBridgeController = require("" + __dirname + "/blockchain_bridge_controller");
RippleToBlockchainBridgeController = require("" + __dirname + "/ripple_to_blockchain_bridge_controller");

BlockchainBridgeRouter = function(options) {
  var blockchainBridgeController = new BlockchainBridgeController(options.gatewayd);
  var rippleToBlockchainBridgeController = new RippleToBlockchainBridgeController(options.gatewayd);
  var router = new express.Router;
  router.get('/blockchain-to-ripple/:name', blockchainBridgeController.get);
  router.get('/ripple-to-blockchain/:address', rippleToBlockchainBridgeController.get);
  return router;
};

module.exports = BlockchainBridgeRouter;
