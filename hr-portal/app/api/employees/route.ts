import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Employee from "@/models/Employee";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const employee = await Employee.create(data);
    return NextResponse.json({ success: true, employee });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const employees = await Employee.find();
    return NextResponse.json({ success: true, employees });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
