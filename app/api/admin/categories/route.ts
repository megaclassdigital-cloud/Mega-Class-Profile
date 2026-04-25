import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("categories")
    .select("name")
    .order("name");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  if (!name || name.trim() === "") {
    return NextResponse.json({ error: "Nama kategori harus diisi" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("categories")
    .insert([{ name: name.trim() }])
    .select("name")
    .single();

  if (error) {
    // Jika duplikat (unique constraint)
    if (error.code === "23505") {
      return NextResponse.json({ error: "Kategori sudah ada" }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}