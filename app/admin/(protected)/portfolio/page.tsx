"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PortfolioItem {
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

export default function AdminPortfolioPage() {
  const router = useRouter();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [addingCategory, setAddingCategory] = useState(false);
  const [form, setForm] = useState<PortfolioItem>({
    title: "",
    slug: "",
    category: "",
    image: "",
    description: "",
    content: "",
    meta_title: "",
    meta_description: "",
    keywords: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Cek login
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("admin_logged_in")) {
      router.push("/admin");
    }
  }, []);

  const showFeedback = (type: "success" | "error", message: string) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback(null), 4000);
  };

  const fetchItems = async () => {
    const res = await fetch("/api/admin/portfolio");
    if (res.ok) setItems(await res.json());
    else showFeedback("error", "Gagal memuat portfolio");
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
    const url = "/api/admin/portfolio";
    const method = editingId ? "PUT" : "POST";
    const body = editingId ? { ...form, id: editingId } : form;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (res.ok) {
        setForm({
          title: "",
          slug: "",
          category: "",
          image: "",
          description: "",
          content: "",
          meta_title: "",
          meta_description: "",
          keywords: "",
        });
        setEditingId(null);
        fetchItems();
        showFeedback("success", editingId ? "Portfolio diperbarui." : "Portfolio baru disimpan.");
      } else {
        showFeedback("error", data.error || "Gagal menyimpan portfolio.");
      }
    } catch (err) {
      showFeedback("error", "Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setForm(item);
    setEditingId(item.id || null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin hapus?")) return;
    const res = await fetch(`/api/admin/portfolio?id=${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchItems();
      showFeedback("success", "Portfolio dihapus.");
    } else {
      showFeedback("error", "Gagal menghapus.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    router.push("/admin");
  };

  const autoSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");

  const addCategory = async () => {
    const name = newCategory.trim();
    if (!name) return;
    setAddingCategory(true);
    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (res.ok) {
        setCategories([...categories, data.name]);
        setNewCategory("");
        setShowAddCategory(false);
        setForm({ ...form, category: data.name }); // langsung pilih kategori baru
        showFeedback("success", `Kategori "${data.name}" ditambahkan.`);
      } else {
        showFeedback("error", data.error || "Gagal menambah kategori.");
      }
    } catch (err) {
      showFeedback("error", "Gagal terhubung ke server.");
    } finally {
      setAddingCategory(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Kelola Portfolio</h1>
          <button onClick={handleLogout} className="text-red-600 hover:underline text-sm">
            Logout
          </button>
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              feedback.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {feedback.message}
          </div>
        )}

        {/* FORM */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit" : "Tambah"} Portfolio
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Judul *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => {
                    setForm({ ...form, title: e.target.value });
                    if (!editingId)
                      setForm((f) => ({ ...f, slug: autoSlug(e.target.value) }));
                  }}
                  className="w-full border p-2.5 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full border p-2.5 rounded-lg"
                  required
                />
              </div>

              {/* Kategori dengan dropdown dan tombol tambah */}
              <div>
                <label className="block text-sm font-medium mb-1">Kategori *</label>
                <div className="flex gap-2">
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border p-2.5 rounded-lg"
                    required
                  >
                    <option value="">Pilih kategori</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => setShowAddCategory(!showAddCategory)}
                    className="bg-gray-200 px-3 rounded-lg hover:bg-gray-300 text-sm whitespace-nowrap"
                  >
                    + Baru
                  </button>
                </div>
                {showAddCategory && (
                  <div className="flex mt-2 gap-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="Nama kategori baru"
                      className="w-full border p-2 rounded-lg text-sm"
                    />
                    <button
                      type="button"
                      onClick={addCategory}
                      disabled={addingCategory}
                      className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm disabled:opacity-50"
                    >
                      {addingCategory ? "..." : "Simpan"}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">URL Gambar</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full border p-2.5 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Deskripsi Singkat</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={2}
                className="w-full border p-2.5 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Konten Artikel (HTML)</label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={6}
                className="w-full border p-2.5 rounded-lg font-mono text-sm"
              />
            </div>

            {/* Meta SEO */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">Meta SEO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Meta Title</label>
                  <input
                    type="text"
                    value={form.meta_title}
                    onChange={(e) => setForm({ ...form, meta_title: e.target.value })}
                    className="w-full border p-2.5 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Keywords (pisahkan koma)</label>
                  <input
                    type="text"
                    value={form.keywords}
                    onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                    className="w-full border p-2.5 rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Meta Description</label>
                  <textarea
                    value={form.meta_description}
                    onChange={(e) => setForm({ ...form, meta_description: e.target.value })}
                    rows={2}
                    className="w-full border p-2.5 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      title: "",
                      slug: "",
                      category: "",
                      image: "",
                      description: "",
                      content: "",
                      meta_title: "",
                      meta_description: "",
                      keywords: "",
                    });
                    setEditingId(null);
                  }}
                  className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-300"
                >
                  Batal
                </button>
              )}
            </div>
          </form>
        </div>

        {/* TABEL */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-6 text-gray-500">
                      Belum ada portfolio.
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id} className="border-t hover:bg-gray-50">
                      <td className="p-4">{item.title}</td>
                      <td className="p-4 text-sm text-gray-500">{item.slug}</td>
                      <td className="p-4 text-sm">{item.category}</td>
                      <td className="p-4 flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id!)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}