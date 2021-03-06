//Model File for Messages
//http://blog.slatepeak.com/creating-a-real-time-chat-api-with-node-express-socket-io-and-mongodb/

var mongoose 	= require( 'mongoose' );

// define the message schema, must have a user and conversation that it belongs to
var messageSchema = new mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required:true},
  conversation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', required: true},
  image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image'}
}, { timestamps: true } );

module.exports = mongoose.model( 'Message' , messageSchema );
