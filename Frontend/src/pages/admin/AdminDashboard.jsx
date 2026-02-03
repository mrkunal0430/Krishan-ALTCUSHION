import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Mail, FileText, MessageSquare, Users, LogOut, Menu, X, Trash2, Plus, Edit, Check, Clock, RefreshCw, ToggleLeft, ToggleRight } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newsletters, setNewsletters] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [popupForms, setPopupForms] = useState([]);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const token = localStorage.getItem("adminToken");
  const authHeaders = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  useEffect(() => {
    if (!token) { navigate("/admin"); return; }
    fetchStats();
    fetchAllData();
  }, [token, navigate]);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/stats`, { headers: authHeaders });
      if (response.status === 401) { handleLogout(); return; }
      setStats(await response.json());
    } catch (error) { console.error(error); }
    finally { setLoading(false); }
  };

  const fetchAllData = async () => {
    try {
      const [n, b, c, p] = await Promise.all([
        fetch(`${API_URL}/newsletter`, { headers: authHeaders }).then(r => r.json()),
        fetch(`${API_URL}/blogs/admin/all`, { headers: authHeaders }).then(r => r.json()),
        fetch(`${API_URL}/contacts`, { headers: authHeaders }).then(r => r.json()),
        fetch(`${API_URL}/popup-forms`, { headers: authHeaders }).then(r => r.json()),
      ]);
      setNewsletters(n); setBlogs(b); setContacts(c); setPopupForms(p);
    } catch (error) { console.error(error); }
  };

  const handleLogout = () => { localStorage.removeItem("adminToken"); navigate("/admin"); };
  const handleRefresh = () => { setLoading(true); fetchStats(); fetchAllData(); };

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "newsletters", label: "Newsletter", icon: Mail },
    { id: "blogs", label: "Blogs", icon: FileText },
    { id: "contacts", label: "Contacts", icon: MessageSquare },
    { id: "popups", label: "Lead Forms", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-navy-950 flex">
      <motion.aside initial={false} animate={{ width: sidebarOpen ? 260 : 80 }} className="fixed left-0 top-0 h-full bg-navy-900 border-r border-white/5 z-40 flex flex-col">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          {sidebarOpen && <Link to="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center"><span className="text-navy-950 font-bold text-sm">360</span></div><span className="font-display font-bold text-white">Admin</span></Link>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white">{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? "bg-primary-500/10 text-primary-400 border border-primary-500/20" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
              <item.icon size={20} />{sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10"><LogOut size={20} />{sidebarOpen && <span className="font-medium">Logout</span>}</button>
        </div>
      </motion.aside>

      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-[260px]" : "ml-20"}`}>
        <header className="sticky top-0 z-30 bg-navy-950/80 backdrop-blur-xl border-b border-white/5 px-8 py-4">
          <div className="flex items-center justify-between">
            <div><h1 className="text-2xl font-display font-bold text-white capitalize">{activeTab === "overview" ? "Dashboard" : activeTab}</h1><p className="text-slate-500 text-sm">360 Kavach Admin Panel</p></div>
            <button onClick={handleRefresh} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"><RefreshCw size={20} className={loading ? "animate-spin" : ""} /></button>
          </div>
        </header>
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <OverviewTab stats={stats} loading={loading} />}
            {activeTab === "newsletters" && <NewsletterTab newsletters={newsletters} setNewsletters={setNewsletters} authHeaders={authHeaders} />}
            {activeTab === "blogs" && <BlogTab blogs={blogs} setBlogs={setBlogs} authHeaders={authHeaders} showModal={showBlogModal} setShowModal={setShowBlogModal} editingBlog={editingBlog} setEditingBlog={setEditingBlog} onRefresh={fetchAllData} />}
            {activeTab === "contacts" && <ContactTab contacts={contacts} setContacts={setContacts} authHeaders={authHeaders} />}
            {activeTab === "popups" && <PopupTab popupForms={popupForms} setPopupForms={setPopupForms} authHeaders={authHeaders} />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const OverviewTab = ({ stats, loading }) => {
  if (loading) return <div className="flex items-center justify-center py-20"><div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" /></div>;
  const statCards = [
    { label: "Newsletter Subscribers", value: stats?.newsletter?.total || 0, subtext: `${stats?.newsletter?.active || 0} active`, icon: Mail, color: "from-blue-500 to-cyan-400" },
    { label: "Blog Posts", value: stats?.blogs?.total || 0, subtext: `${stats?.blogs?.published || 0} published`, icon: FileText, color: "from-purple-500 to-pink-400" },
    { label: "Contact Inquiries", value: stats?.contacts?.total || 0, subtext: `${stats?.contacts?.unread || 0} unread`, icon: MessageSquare, color: "from-green-500 to-emerald-400" },
    { label: "Lead Forms", value: stats?.popupForms?.total || 0, subtext: `${stats?.popupForms?.unread || 0} unread`, icon: Users, color: "from-orange-500 to-yellow-400" },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] group">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><stat.icon size={24} className="text-white" /></div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.subtext}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const NewsletterTab = ({ newsletters, setNewsletters, authHeaders }) => {
  const handleDelete = async (id) => { if (!confirm("Delete?")) return; await fetch(`${API_URL}/newsletter/${id}`, { method: "DELETE", headers: authHeaders }); setNewsletters(newsletters.filter(n => n._id !== id)); };
  const handleToggle = async (id) => { const r = await fetch(`${API_URL}/newsletter/${id}/toggle`, { method: "PATCH", headers: authHeaders }); const u = await r.json(); setNewsletters(newsletters.map(n => n._id === id ? u : n)); };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="p-6 border-b border-white/5"><h2 className="text-lg font-bold text-white">Subscribers ({newsletters.length})</h2></div>
        <table className="w-full">
          <thead><tr className="border-b border-white/5"><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Email</th><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Date</th><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Status</th><th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase">Actions</th></tr></thead>
          <tbody>{newsletters.map(sub => (
            <tr key={sub._id} className="border-b border-white/5 hover:bg-white/[0.02]">
              <td className="px-6 py-4 text-white">{sub.email}</td>
              <td className="px-6 py-4 text-slate-400 text-sm">{new Date(sub.subscribedAt).toLocaleDateString()}</td>
              <td className="px-6 py-4"><span className={`px-3 py-1 rounded-full text-xs ${sub.isActive ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>{sub.isActive ? "Active" : "Inactive"}</span></td>
              <td className="px-6 py-4 text-right flex justify-end gap-2">
                <button onClick={() => handleToggle(sub._id)} className="p-2 rounded-lg hover:bg-white/5 text-slate-400">{sub.isActive ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}</button>
                <button onClick={() => handleDelete(sub._id)} className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400"><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}</tbody>
        </table>
        {newsletters.length === 0 && <div className="text-center py-12 text-slate-500">No subscribers yet</div>}
      </div>
    </motion.div>
  );
};

const BlogTab = ({ blogs, setBlogs, authHeaders, showModal, setShowModal, editingBlog, setEditingBlog, onRefresh }) => {
  const handleDelete = async (id) => { if (!confirm("Delete?")) return; await fetch(`${API_URL}/blogs/${id}`, { method: "DELETE", headers: authHeaders }); setBlogs(blogs.filter(b => b._id !== id)); };
  const handleToggle = async (id) => { const r = await fetch(`${API_URL}/blogs/${id}/toggle-publish`, { method: "PATCH", headers: authHeaders }); const u = await r.json(); setBlogs(blogs.map(b => b._id === id ? u : b)); };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Blogs ({blogs.length})</h2>
          <button onClick={() => { setEditingBlog(null); setShowModal(true); }} className="px-4 py-2 bg-primary-500 text-navy-950 font-medium rounded-lg flex items-center gap-2"><Plus size={18} />New Blog</button>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-white/5"><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Title</th><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Author</th><th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase">Status</th><th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase">Actions</th></tr></thead>
          <tbody>{blogs.map(blog => (
            <tr key={blog._id} className="border-b border-white/5 hover:bg-white/[0.02]">
              <td className="px-6 py-4 text-white font-medium">{blog.title}</td>
              <td className="px-6 py-4 text-slate-400 text-sm">{blog.author}</td>
              <td className="px-6 py-4"><span className={`px-3 py-1 rounded-full text-xs ${blog.isPublished ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>{blog.isPublished ? "Published" : "Draft"}</span></td>
              <td className="px-6 py-4 text-right flex justify-end gap-2">
                <button onClick={() => { setEditingBlog(blog); setShowModal(true); }} className="p-2 rounded-lg hover:bg-white/5 text-slate-400"><Edit size={18} /></button>
                <button onClick={() => handleToggle(blog._id)} className="p-2 rounded-lg hover:bg-white/5 text-slate-400">{blog.isPublished ? <ToggleRight size={18} className="text-green-400" /> : <ToggleLeft size={18} />}</button>
                <button onClick={() => handleDelete(blog._id)} className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400"><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}</tbody>
        </table>
        {blogs.length === 0 && <div className="text-center py-12 text-slate-500">No blogs yet</div>}
      </div>
      <AnimatePresence>{showModal && <BlogModal blog={editingBlog} authHeaders={authHeaders} onClose={() => { setShowModal(false); setEditingBlog(null); }} onSave={onRefresh} />}</AnimatePresence>
    </motion.div>
  );
};

const BlogModal = ({ blog, authHeaders, onClose, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ title: blog?.title || "", shortDescription: blog?.shortDescription || "", longDescription: blog?.longDescription || "", imageUrl: blog?.imageUrl || "", author: blog?.author || "360 Kavach Team", isPublished: blog?.isPublished ?? true });
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true);
    const url = blog ? `${API_URL}/blogs/${blog._id}` : `${API_URL}/blogs`;
    await fetch(url, { method: blog ? "PUT" : "POST", headers: authHeaders, body: JSON.stringify(formData) });
    onSave(); onClose(); setLoading(false);
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={e => e.stopPropagation()} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-white/10 rounded-2xl">
        <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-navy-900 z-10">
          <h2 className="text-xl font-bold text-white">{blog ? "Edit Blog" : "Create Blog"}</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-slate-400"><X size={20} /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Title *</label><input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:border-primary-500" required /></div>
          <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Short Description *</label><textarea value={formData.shortDescription} onChange={e => setFormData({ ...formData, shortDescription: e.target.value })} rows={2} maxLength={300} className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:border-primary-500 resize-none" required /></div>
          <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Content *</label><textarea value={formData.longDescription} onChange={e => setFormData({ ...formData, longDescription: e.target.value })} rows={8} className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:border-primary-500 resize-none" required /></div>
          <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Image URL</label><input type="url" value={formData.imageUrl} onChange={e => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:border-primary-500" placeholder="https://..." /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Author</label><input type="text" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:border-primary-500" /></div>
            <div><label className="block text-xs font-bold text-slate-400 uppercase mb-2">Status</label><button type="button" onClick={() => setFormData({ ...formData, isPublished: !formData.isPublished })} className={`w-full px-4 py-3 rounded-xl border flex items-center justify-center gap-2 ${formData.isPublished ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"}`}>{formData.isPublished ? <><Check size={18} />Published</> : <><Clock size={18} />Draft</>}</button></div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-6 py-2.5 border border-white/10 rounded-lg text-slate-400">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-2.5 bg-primary-500 text-navy-950 font-medium rounded-lg disabled:opacity-50">{loading ? "Saving..." : blog ? "Update" : "Create"}</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const ContactTab = ({ contacts, setContacts, authHeaders }) => {
  const [selected, setSelected] = useState(null);
  const handleDelete = async (id) => { if (!confirm("Delete?")) return; await fetch(`${API_URL}/contacts/${id}`, { method: "DELETE", headers: authHeaders }); setContacts(contacts.filter(c => c._id !== id)); };
  const handleRead = async (c) => { if (c.isRead) return; await fetch(`${API_URL}/contacts/${c._id}/read`, { method: "PATCH", headers: authHeaders }); setContacts(contacts.map(x => x._id === c._id ? { ...x, isRead: true } : x)); };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="p-6 border-b border-white/5"><h2 className="text-lg font-bold text-white">Contacts ({contacts.length})</h2></div>
        <div className="divide-y divide-white/5">
          {contacts.map(c => (
            <div key={c._id} className={`p-6 hover:bg-white/[0.02] ${!c.isRead ? "bg-primary-500/5" : ""}`}>
              <div className="flex justify-between">
                <div className="cursor-pointer flex-1" onClick={() => { setSelected(selected?._id === c._id ? null : c); handleRead(c); }}>
                  <div className="flex items-center gap-3 mb-2"><h3 className="font-medium text-white">{c.name}</h3>{!c.isRead && <span className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-primary-400">New</span>}</div>
                  <p className="text-sm text-slate-400">{c.email}</p>
                  <p className="text-xs text-slate-600 mt-2">{new Date(c.submittedAt).toLocaleString()}</p>
                </div>
                <button onClick={() => handleDelete(c._id)} className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400"><Trash2 size={18} /></button>
              </div>
              <AnimatePresence>{selected?._id === c._id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  {c.service && <p className="text-sm"><span className="text-slate-500">Service:</span> <span className="text-white">{c.service}</span></p>}
                  {c.budget && <p className="text-sm"><span className="text-slate-500">Budget:</span> <span className="text-white">{c.budget}</span></p>}
                  <p className="text-sm"><span className="text-slate-500">Message:</span></p><p className="text-white whitespace-pre-wrap">{c.message}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
          {contacts.length === 0 && <div className="text-center py-12 text-slate-500">No contacts yet</div>}
        </div>
      </div>
    </motion.div>
  );
};

const PopupTab = ({ popupForms, setPopupForms, authHeaders }) => {
  const [selected, setSelected] = useState(null);
  const handleDelete = async (id) => { if (!confirm("Delete?")) return; await fetch(`${API_URL}/popup-forms/${id}`, { method: "DELETE", headers: authHeaders }); setPopupForms(popupForms.filter(p => p._id !== id)); };
  const handleRead = async (f) => { if (f.isRead) return; await fetch(`${API_URL}/popup-forms/${f._id}/read`, { method: "PATCH", headers: authHeaders }); setPopupForms(popupForms.map(x => x._id === f._id ? { ...x, isRead: true } : x)); };
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="p-6 border-b border-white/5"><h2 className="text-lg font-bold text-white">Lead Forms ({popupForms.length})</h2></div>
        <div className="divide-y divide-white/5">
          {popupForms.map(f => (
            <div key={f._id} className={`p-6 hover:bg-white/[0.02] ${!f.isRead ? "bg-primary-500/5" : ""}`}>
              <div className="flex justify-between">
                <div className="cursor-pointer flex-1" onClick={() => { setSelected(selected?._id === f._id ? null : f); handleRead(f); }}>
                  <div className="flex items-center gap-3 mb-2"><h3 className="font-medium text-white">{f.name}</h3>{!f.isRead && <span className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-primary-400">New</span>}</div>
                  <p className="text-sm text-slate-400">{f.email}</p>
                  {f.phone && <p className="text-sm text-slate-500">{f.phone}</p>}
                  <p className="text-xs text-slate-600 mt-2">{new Date(f.submittedAt).toLocaleString()}</p>
                </div>
                <button onClick={() => handleDelete(f._id)} className="p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400"><Trash2 size={18} /></button>
              </div>
              <AnimatePresence>{selected?._id === f._id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-sm text-slate-500">Message:</p><p className="text-white whitespace-pre-wrap">{f.message}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
          {popupForms.length === 0 && <div className="text-center py-12 text-slate-500">No submissions yet</div>}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
