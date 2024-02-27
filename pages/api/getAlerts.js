import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const alerts = await prisma.Alert.findMany({
        orderBy: {
          date: 'desc',
        },
      });
      res.status(200).json(alerts);
    } catch (error) {
      console.error("Failed to fetch alerts", error);
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
