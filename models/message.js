//Model File for Messages
//http://blog.slatepeak.com/creating-a-real-time-chat-api-with-node-express-socket-io-and-mongodb/

var mongoose = require( 'mongoose' );

var messageSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  conversation_id: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true } );

module.exports = mongoose.model( 'Message' , messageSchema );