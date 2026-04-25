"use client";
import { useState, useEffect } from "react";

interface ArticleItem {
  id?: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  content: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
}

export default function AdminArticlePage() {
  const [items, setItems] = useState<ArticleItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [form, setForm] = useState<ArticleItem>({
    title: "", slug: "", category: "", image: "",
    description: "", content: "", meta_title: "",
    meta_description: "", keywords: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    const res = await fetch("/api/admin/articles");
    if (res.ok) setItems(await res.json());
  };
  const fetchCategories = async () => {
    const res = await fetch("/api/admin/categories");
    if (res.ok) {
      const data = await res.json();
      setCategories(data.map((c: any) => c.name));
    }
  };

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const url = "/api/admin/articles";
    const method = editingId ? "PUT" : "POST";
    const body = editingId ? { ...form, id: editingId } : form;
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setForm({ title: "", slug: "", category: "", image: "", description: "", content: "", meta_title: "", meta_description: "", keywords: "" });
      setEditingId(null);
      fetchItems();
    } else alert("Gagal menyimpan");
    setLoading(false);
  };

  const handleEdit = (item: ArticleItem) => {
    setForm(item);
    setEditingId(item.id || null);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin hapus?")) {
      await fetch(`/api/admin/articles?id=${id}`, { method: "DELETE" });
      fetchItems();
    }
  };

  const autoSlug = (title: string) => title.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");

  const addCategory = async () => {
    if (!newCategory.trim()) return;
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory }),
    });
    if (res.ok) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      setShowAddCategory(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Kelola Artikel</h1>

      {/* Form */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit" : "Tambah"} Artikel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sama seperti portfolio form, hanya fetch ke /api/admin/articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Judul *</label>
              <input type="text" value={form.title} onChange={e => { setForm({ ...form, title: e.target.value }); if (!editingId) setForm(f => ({ ...f, slug: autoSlug(e.target.value) })); }} className="w-full border p-2.5 rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug *</label>
              <input type="text" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="w-full border p-2.5 rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kategori *</label>
              <div className="flex gap-2">
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full border p-2.5 rounded-lg" required>
                  <option value="">Pilih kategori</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <button type="button" onClick={() => setShowAddCategory(!showAddCategory)} className="bg-gray-200 px-3 rounded-lg hover:bg-gray-300 text-sm">+ Baru</button>
              </div>
              {showAddCategory && (
                <div className="flex mt-2 gap-2">
                  <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Nama kategori baru" className="w-full border p-2 rounded-lg text-sm" />
                  <button type="button" onClick={addCategory} className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm">Simpan</button>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">URL Gambar</label>
              <input type="text" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="w-full border p-2.5 rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi Singkat</label>
            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={2} className="w-full border p-2.5 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Konten Artikel (HTML)</label>
            <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={6} className="w-full border p-2.5 rounded-lg font-mono text-sm" />
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Meta SEO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Meta Title</label>
                <input type="text" value={form.meta_title} onChange={e => setForm({ ...form, meta_title: e.target.value })} className="w-full border p-2.5 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Keywords</label>
                <input type="text" value={form.keywords} onChange={e => setForm({ ...form, keywords: e.target.value })} className="w-full border p-2.5 rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Meta Description</label>
                <textarea value={form.meta_description} onChange={e => setForm({ ...form, meta_description: e.target.value })} rows={2} className="w-full border p-2.5 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50">
              {loading ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
            </button>
            {editingId && (
              <button type="button" onClick={() => { setForm({ title: "", slug: "", category: "", image: "", description: "", content: "", meta_title: "", meta_description: "", keywords: "" }); setEditingId(null); }} className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-300">
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel Artikel */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Judul</th>
                <th className="text-left p-4 font-semibold">Slug</th>
                <th className="text-left p-4 font-semibold">Kategori</th>
                <th className="p-4 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{item.title}</td>
                  <td className="p-4 text-sm text-gray-500">{item.slug}</td>
                  <td className="p-4 text-sm">{item.category}</td>
                  <td className="p-4 flex gap-2">
                    <button onClick={() => handleEdit(item)} className="text-blue-600 hover:underline text-sm">Edit</button>
                    <button onClick={() => handleDelete(item.id!)} className="text-red-600 hover:underline text-sm">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}