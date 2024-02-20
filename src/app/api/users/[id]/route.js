import { NextResponse } from "next/server";
import { data } from "../../util/db";

export function GET(request, content) {
  console.log(content.params.id);
  const userdata = data.filter((item) => item.id == content.params.id);
  console.log("name", content.params.id);
  return NextResponse.json(
    userdata.length == 0
      ? { result: "not found", success: false }
      : { result: userdata, success: true },
    { status: 200 }
  );
}
