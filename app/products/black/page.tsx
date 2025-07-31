import Link from 'next/link'
import Image from 'next/image'

export default function BlackPage() {
  return (
    <div className="product-detail">
      <Link href="/" className="back-button">
        ← Back to Catalog
      </Link>
      
      <div className="product-detail-content">
        <div className="product-images">
          <Image
            src="/images/black/black.jpg"
            alt="Blanton's Black Label"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/black/black_1.jpg"
            alt="Blanton's Black Label - View 2"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/black/black_2.jpg"
            alt="Blanton's Black Label - View 3"
            width={800}
            height={600}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>Blanton's Black Label ~ Japanese Edition</h1>
          <p>
            Experience the bold and distinctive character of Blanton's Black Label, a premium 
            single barrel bourbon that showcases the artistry of traditional distillation. 
            Each bottle represents a unique expression from a single barrel.
          </p>
          <p>
            This exceptional bourbon features rich, complex flavors with notes of caramel, 
            vanilla, and spice, creating a harmonious balance that bourbon enthusiasts 
            have come to expect from the Blanton's legacy.
          </p>
          <p>
            Bottled at 93 proof, Blanton's Black Label delivers a smooth yet robust drinking 
            experience that's perfect for sipping neat or crafting premium cocktails.
          </p>
        </div>
      </div>
    </div>
  )
} 