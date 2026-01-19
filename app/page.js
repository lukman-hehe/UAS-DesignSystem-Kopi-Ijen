"use client";

import { HeaderVariant, CardVariant, ButtonVariant, FooterVariant } from "styled-hairomin";
import { products } from "../data/products";
import { testimonials } from "../data/testimonials";
import { faqs } from "../data/faqs";
import { features } from "../data/features";

export default function Home() {
  const navbarData = {
    logo: "☕ Kopi Ijen",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Produk", href: "#produk" },
      { label: "Tentang", href: "#tentang" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "FAQ", href: "#faq" },
    ],
    buttonText: "Pesan Sekarang",
  };

  const footerData = {
    brandName: "☕ Kopi Ijen Roastery",
    brandDesc: "Kopi premium asli lereng Gunung Ijen, Banyuwangi. Dipetik dari kebun terbaik, diroasting dengan cinta.",
    linkGroups: [
      {
        title: "Menu",
        links: [
          { label: "Beranda", href: "#beranda" },
          { label: "Produk", href: "#produk" },
          { label: "Tentang Kami", href: "#tentang" },
          { label: "Testimoni", href: "#testimoni" },
        ],
      },
      {
        title: "Produk",
        links: [
          { label: "Arabica Premium", href: "#produk" },
          { label: "Robusta Bold", href: "#produk" },
          { label: "Honey Process", href: "#produk" },
          { label: "Espresso Blend", href: "#produk" },
        ],
      },
      {
        title: "Kontak",
        links: [
          { label: "WhatsApp: 0800-0000-0000", href: "https://wa.me/6280000000000" },
          { label: "Email: hello@kopiijen.id", href: "mailto:hello@kopiijen.id" },
          { label: "Jl. Raya Ijen No. 123, Banyuwangi", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Kopi Ijen Roastery. All rights reserved.",
  };

  const handleWhatsAppOrder = () => {
    window.open("https://wa.me/6280000000000?text=Halo, saya ingin memesan Kopi Ijen!", "_blank");
  };

  return (
    <main>
      <div id="beranda" style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "0.5rem 1rem",
        background: "rgba(253, 248, 243, 0.95)",
        backdropFilter: "blur(10px)"
      }}>
        <HeaderVariant variant="minimal" data={navbarData} />
      </div>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">UMKM Banyuwangi</span>
          <h1 className="hero-title">
            Rasakan Keajaiban Kopi dari Lereng Gunung Ijen
          </h1>
          <p className="hero-subtitle">
            Nikmati kelezatan kopi premium pilihan yang dipetik langsung dari
            kebun terbaik di lereng Gunung Ijen, Banyuwangi.
          </p>
          <div className="hero-cta">
            <ButtonVariant
              variant="pill"
              onClick={handleWhatsAppOrder}
              data={{ label: "Pesan via WhatsApp" }}
            />
            <ButtonVariant
              variant="outline"
              onClick={() => document.getElementById("produk").scrollIntoView({ behavior: "smooth" })}
              data={{ label: "Lihat Produk" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mengapa Memilih Kopi Ijen?</h2>
            <p className="section-subtitle">
              Komitmen kami untuk menghadirkan kopi terbaik dari tanah Banyuwangi langsung ke cangkir Anda.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produk" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Produk Best Seller</h2>
            <p className="section-subtitle">
              Jelajahi koleksi kopi premium kami yang telah dipercaya oleh ribuan pecinta kopi di seluruh Indonesia.
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <CardVariant
                key={product.id}
                variant="elevated"
                data={{
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  rating: product.rating,
                  badge: product.badge,
                  description: product.description,
                  location: product.location,
                  features: product.features,
                  priceSuffix: product.priceSuffix,
                }}
                actionButton={
                  <ButtonVariant
                    variant="pill"
                    onClick={() => window.open(`https://wa.me/6280000000000?text=Halo, saya ingin memesan ${product.title}!`, "_blank")}
                    data={{ label: "Beli Sekarang" }}
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="section section-alt">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=500&fit=crop"
                alt="Kebun Kopi Ijen"
              />
            </div>
            <div className="about-text">
              <h3>Cerita dari Lereng Gunung Ijen</h3>
              <p>
                Kopi Ijen Roastery lahir dari kecintaan terhadap kopi dan tanah kelahiran.
                Bermula dari kebun kecil di lereng Gunung Ijen, kami bermimpi membawa cita rasa
                kopi Banyuwangi ke seluruh penjuru Indonesia.
              </p>
              <p>
                Setiap biji kopi kami dipetik dengan cermat oleh petani lokal yang telah
                berpengalaman selama puluhan tahun. Proses roasting dilakukan dengan teknik
                modern untuk menghasilkan profil rasa yang sempurna — fruity, floral, dengan
                sentuhan cokelat yang lembut.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Tahun Pengalaman</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Pelanggan Puas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Mitra Cafe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Apa Kata Mereka?</h2>
            <p className="section-subtitle">
              Testimoni asli dari para pecinta kopi yang telah merasakan keistimewaan Kopi Ijen.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location} • {testimonial.date}</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-subtitle">
              Temukan jawaban untuk pertanyaan umum seputar produk dan layanan kami.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Siap Merasakan Kopi Premium Ijen?</h2>
          <p className="cta-subtitle">
            Pesan sekarang dan nikmati kopi segar berkualitas tinggi langsung dari Banyuwangi ke rumah Anda.
          </p>
          <ButtonVariant
            variant="pill"
            onClick={handleWhatsAppOrder}
            data={{ label: "Order via WhatsApp" }}
          />
        </div>
      </section>

      <div className="footer-wrapper" style={{ background: '#000' }}>
        <FooterVariant variant="stacked" data={footerData} backgroundColor="#000" />
      </div>
    </main>
  );
}
