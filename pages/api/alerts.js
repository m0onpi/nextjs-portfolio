// pages/api/alerts.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract the message from the request body
    const { message } = req.body;
    console.log(message)

    try {
      // Save the alert to the database
      const alert = await prisma.alert.create({
        data: {
          message,
        },
      });

      return res.status(200).json(alert);
    } catch (error) {
      console.error('Failed to save alert:', error);
      return res.status(500).json({ error: 'Failed to save alert' });
    }
  } else {
    // Handle any requests that aren't POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
