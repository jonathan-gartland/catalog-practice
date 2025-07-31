import Link from 'next/link'
import Image from 'next/image'

export default function SftbPage() {
  return (
    <div className="product-detail">
      <Link href="/" className="back-button">
        ← Back to Catalog
      </Link>
      
      <div className="product-detail-content">
        <div className="product-images">
          <Image
            src="/images/sftb/sftb_1.jpg"
            alt="Blanton's Straight From The Barrel"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/sftb/sftb_2.jpg"
            alt="Blanton's Straight From The Barrel - View 2"
            width={800}
            height={600}
            className="product-detail-image"
          />
          <Image
            src="/images/sftb/sftb_3.jpg"
            alt="Blanton's Straight From The Barrel - View 3"
            width={800}
            height={600}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>Blanton's Straight From The Barrel</h1>
          <p>
            Experience bourbon in its purest form with Blanton's Straight From The Barrel, an uncut 
            and unfiltered single barrel bourbon that showcases the raw power and complexity of 
            cask-strength whiskey. Each bottle is drawn directly from the barrel without dilution.
          </p>
          <p>
            This extraordinary expression delivers intense flavors and aromas that vary from barrel 
            to barrel, offering a unique tasting experience with every bottle. The high proof and 
            unfiltered nature preserve all the natural oils and compounds that create remarkable depth.
          </p>
          <p>
            Typically bottled between 125-135 proof, Blanton's Straight From The Barrel represents 
            the ultimate expression of single barrel bourbon, offering an uncompromising taste 
            experience for the most discerning whiskey enthusiasts.
          </p>
        </div>
      </div>
    </div>
  )
} 