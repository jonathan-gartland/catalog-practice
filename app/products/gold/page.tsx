import Link from 'next/link'
import Image from 'next/image'

export default function GoldPage() {
  return (
    <div className="product-detail">
      <Link href="/" className="back-button">
        ← Back to Catalog
      </Link>
      
      <div className="product-detail-content">
        <div className="product-images">
          <Image
            src="/images/gold/gold.jpg"
            alt="Blanton's Gold Edition"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/gold/gold_1.jpg"
            alt="Blanton's Gold Edition - View 2"
            width={800}
            height={600}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>Blanton's Gold Edition</h1>
          <p>
            Discover the pinnacle of bourbon craftsmanship with Blanton's Gold Edition, an ultra-premium 
            single barrel bourbon that represents the finest selection from our most exceptional barrels. 
            Each bottle is hand-selected and individually numbered.
          </p>
          <p>
            This extraordinary expression features layers of complexity with rich honey, dried fruits, 
            and warm spices that develop beautifully on the palate. The extended aging process creates 
            a sophisticated profile that's both elegant and powerful.
          </p>
          <p>
            Bottled at barrel proof, Blanton's Gold Edition offers an uncompromising taste experience 
            that showcases the true artistry of single barrel bourbon at its absolute finest.
          </p>
        </div>
      </div>
    </div>
  )
} 