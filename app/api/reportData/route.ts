import {NextRequest, NextResponse} from 'next/server'

let data = '';
export async function POST(request: Request) {
  data = await request.json();
  // console.log(data)
  return NextResponse.json({data,})
  }

export async function GET(){
  return NextResponse.json(data)
}
