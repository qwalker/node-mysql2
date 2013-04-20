//var constants = require('../constants');
var Packet = require('../packets/packet');

function ResultSetHeader(packet)
{
  this.fieldCount = packet.readLengthCodedNumber();
  if (packet.haveMoreData())
    this.insertId   = packet.readLengthCodedNumber();
  // TODO: extra
}

// TODO: toPacket

module.exports = ResultSetHeader;