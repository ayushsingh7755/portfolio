import Contact from '../models/Contact.js'

export async function createContactMessage(req, res) {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are all required.' })
    }

    const contact = await Contact.create({ name, email, message })

    return res.status(201).json({
      message: 'Message received — thanks for reaching out!',
      data: { id: contact._id, createdAt: contact.createdAt },
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const firstError = Object.values(err.errors)[0]?.message || 'Invalid input.'
      return res.status(400).json({ message: firstError })
    }
    console.error('createContactMessage error:', err)
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' })
  }
}

// Simple listing endpoint — useful for the site owner to check submissions.
// In production, protect this route before exposing it publicly.
export async function listContactMessages(req, res) {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100)
    return res.status(200).json({ data: messages })
  } catch (err) {
    console.error('listContactMessages error:', err)
    return res.status(500).json({ message: 'Could not fetch messages.' })
  }
}
