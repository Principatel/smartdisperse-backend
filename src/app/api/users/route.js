import { NextResponse } from "next/server";
import { data } from "../util/db";

export function GET() {
  const userdata = data;
  // console.log(content.params.id);
  return NextResponse.json(userdata, { status: 200 });
}
