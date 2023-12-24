import { NextResponse } from "next/server";
import apiData from "@/apiData/categories.json";

type ResponseData = {
  items: any[];
};

export async function GET(request: any) {
  return NextResponse.json(
    { items: apiData },
    { status: 200 }
  );
}
