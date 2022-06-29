const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Priviate
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Priviate
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'ceateTicket' })
})

module.exports = {
  getTickets,
  createTicket,
}
