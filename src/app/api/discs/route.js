import { NextResponse } from 'next/server';

import { connectToDB } from '@/lib/mongoDB';
import Disc from '@/lib/models/Discs';

export async function POST(req) {
  try {
    await connectToDB();

    const { name, discType, speed, color, weight, price, image } =
      await req.json();

    if (!name || !discType || !speed || !color || !weight || !price || !image) {
      return new NextResponse('Not enough data to create a disc', {
        status: 400,
      });
    }

    const newDisc = await Disc.create({
      name,
      discType,
      speed,
      color,
      weight,
      price,
      image,
    });

    return NextResponse.json(newDisc, { status: 200 });
  } catch (err) {
    console.error('[disc_POST]', err);
    return new NextResponse(`Error creating disc: ${err.message}`, {
      status: 500,
    });
  }
}
