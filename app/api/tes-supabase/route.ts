import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  // Coba query sederhana ke Supabase
  const { data, error } = await supabaseAdmin.from("portfolio").select("count");

  if (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: "success",
    message: "Koneksi ke Supabase berhasil!",
    data,
  });
}