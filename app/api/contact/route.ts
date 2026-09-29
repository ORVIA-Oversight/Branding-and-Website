import { NextResponse } from "next/server";

const leadFields = [
  "source","product_interest","landing_page","utm_source","utm_medium","utm_campaign",
  "consent_or_lawful_basis","owner","next_action","follow_up_at","status"
] as const;

export async function POST(request: Request){
  const data=await request.json().catch(()=>null);
  if(!data || typeof data!=="object"){
    return NextResponse.json({ok:false,error:"INVALID_PAYLOAD"},{status:400});
  }

  const endpoint=process.env.CONTACT_API_URL || process.env.IRIS_LEAD_ENDPOINT;
  if(!endpoint){
    return NextResponse.json({
      ok:false,
      error:"IRIS_ROUTE_NOT_CONFIGURED",
      required_fields:leadFields,
      note:"Lead capture is configured in the web system but cannot be verified until CONTACT_API_URL or IRIS_LEAD_ENDPOINT is connected."
    },{status:503});
  }

  const payload={
    ...data,
    source:data.source || "website",
    owner:data.owner || "sales-unassigned",
    next_action:data.next_action || "human-review",
    follow_up_at:data.follow_up_at || null,
    status:data.status || "lead"
  };

  const response=await fetch(endpoint,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(payload),
    cache:"no-store"
  }).catch(()=>null);

  if(!response?.ok){
    return NextResponse.json({ok:false,error:"IRIS_ROUTE_FAILED"},{status:502});
  }

  return NextResponse.json({ok:true,workflow:"IRIS",product_interest:payload.product_interest});
}
