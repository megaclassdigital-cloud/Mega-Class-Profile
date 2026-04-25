import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "9", 10);
  const offset = (page - 1) * limit;

  let query = supabaseAdmin
    .from("portfolio")
    .select("*", { count: "exact" });

  if (category && category !== "Semua") {
    query = query.eq("category", category);
  }

  query = query
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  const { data, error, count } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const total = count || 0;
  const hasMore = offset + limit < total;

  return NextResponse.json({ data, hasMore, total });
}