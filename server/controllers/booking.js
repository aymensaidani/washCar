const Reservation = require('../database/models/booking');

const bookDate = async (req, res) => {
  const { clientId } = req.params;
  try {
    const { date , service , location} = req.body;
    const bookingDate = new Date(date);
    if (isNaN(bookingDate)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    // Check if the date is already reserved
    const existingReservation = await Reservation.findOne({
      where: { date: bookingDate }, // Define where object explicitly
    });
    if (existingReservation) {
      return res.status(400).json({ error: 'Date is already reserved' });
    }

    // If date is not reserved, create a new reservation
    const reservation = await Reservation.create({
      date: bookingDate,
      clientId: clientId,
      service: service,
      location: location,
    });

    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    console.error('Error retrieving reservations:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  bookDate,
};
