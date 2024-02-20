import { uri } from "@/app/lib/connection";
import { smartdisperse_data } from "@/app/lib/models/smartdisperse";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(
      "mongodb+srv://princi:abcdefghijk@dispersesmart.4duwewu.mongodb.net/Smartdisperse?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB!!");
    data = await smartdisperse_data.find();
    console.log("smart disperse data:", data);
  } catch (err) {
    return new Response("Error connecting to the database", { status: 503 });
  }
  return NextResponse.json({ result: data });
}

export async function POST(request) {
  console.log("entered into post function");
  let result = [];
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(
      "mongodb+srv://princi:abcdefghijk@dispersesmart.4duwewu.mongodb.net/Smartdisperse?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB!!");
    const payload = await request.json();
    console.log("request sent", payload);
    let data = new smartdisperse_data(payload);
    console.log("data", data);
    console.log("saving");

    result = await data.save();
    console.log("Data uploaded successfully");
  } catch (err) {
    console.log(err);
    return new Response("Error connecting to the database", { status: 503 });
  }
  return NextResponse.json({ result: result });
}
