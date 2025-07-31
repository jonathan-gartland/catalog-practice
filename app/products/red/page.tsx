import Link from 'next/link'
import Image from 'next/image'

export default function RedPage() {
  return (
    <div className="product-detail">
      <Link href="/" className="back-button">
        ← Back to Catalog
      </Link>
      
      <div className="product-detail-content">
        <div className="product-images">
          <Image
            src="/images/red/red.jpg"
            alt="Blanton's Special Reserve"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/red/red_1.jpg"
            alt="Blanton's Special Reserve - View 2"
            width={800}
            height={600}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>Blanton's Special Reserve</h1>
          <p>
            Savor the exceptional character of Blanton's Special Reserve, a distinguished single barrel 
            bourbon that embodies the time-honored traditions of Kentucky distilling. Each bottle 
            represents a carefully selected barrel that meets our exacting standards.
          </p>
          <p>
            This remarkable bourbon offers a perfect balance of sweet and spicy notes, with hints of 
            cherry, vanilla, and oak that create a memorable tasting experience. The careful aging 
            process develops a smooth, refined character that's both approachable and sophisticated.
          </p>
          <p>
            Bottled at 80 proof, Blanton's Special Reserve delivers consistent quality and flavor 
            that makes it perfect for both newcomers to single barrel bourbon and seasoned 
            connoisseurs alike.
          </p>
        </div>
      </div>
    </div>
  )
} 