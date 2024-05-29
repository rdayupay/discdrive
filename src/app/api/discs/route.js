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
      name: name.toLowerCase(),
      discType: discType.toLowerCase(),
      speed,
      color: color.toLowerCase(),
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

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const color = searchParams.get('color');
    const sortAttribute = searchParams.get('sort');

    const filter = color ? { color: color.toLowerCase() } : {};

    let discs = await Disc.find(filter);

    if (sortAttribute) {
      discs = discs.sort((a, b) => {
        if (['price', 'speed', 'weight'].includes(sortAttribute)) {
          return a[sortAttribute] - b[sortAttribute];
        }
        return 0;
      });
    }

    return NextResponse.json(discs, { status: 200 });
  } catch (err) {
    console.error('[disc_GET]', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
