import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 'black',
    title: 'Blanton\'s Black Label',
    description: 'Rich and bold single barrel bourbon with deep, complex flavors',
    image: '/images/black/black.jpg',
    href: '/products/black'
  },
  {
    id: 'gold',
    title: 'Blanton\'s Gold Edition',
    description: 'Premium single barrel bourbon aged to perfection',
    image: '/images/gold/gold.jpg',
    href: '/products/gold'
  },
  {
    id: 'red',
    title: 'Blanton\'s Special Reserve',
    description: 'Exceptional single barrel bourbon with distinctive character',
    image: '/images/red/red.jpg',
    href: '/products/red'
  },
  {
    id: 'sftb',
    title: 'Blanton\'s Straight From The Barrel',
    description: 'Uncut, unfiltered single barrel bourbon at cask strength',
    image: '/images/sftb/sftb_1.jpg',
    href: '/products/sftb'
  }
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Blanton's Bourbon Collection</h1>
        <p>Discover our exceptional single barrel bourbon variants</p>
      </section>

      {/* Catalog Grid */}
      <section className="catalog-grid">
        {products.map((product) => (
          <Link key={product.id} href={product.href}>
            <div className="catalog-item">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
                className="catalog-item-image"
              />
              <div className="catalog-item-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
} 