import { NextResponse } from "next/server";
export async function POST(request: Request){const data=await request.json().catch(()=>({}));return NextResponse.json({ok:true,received:Object.keys(data),note:"Reference endpoint only — connect CRM_OR_IRIS_ENDPOINT / CONTACT_API_URL before production."});}
