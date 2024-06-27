import './brand.css';

function Brand() {
  return (
    <div className='brandpage'>
        <h1 className="hoverable-element">ESTABLISHING INDIA’S LARGEST SMART RETAIL</h1>
        <h1 className="hoverable-element">NETWORK WITH INTELLIGENT VENDING</h1>
        <h1 className="hoverable-element">MACHINES</h1>
        <div className='para'>
            <p className="hoverable-element">Creating a platform for brands and retailers to offer sub-₹99</p>
            <p className="hoverable-element">food instantly with no delivery cost through intelligent retail</p>
            <p className="hoverable-element">solutions such as vending machines, smart fridges, and</p>
            <p className="hoverable-element">mobile retail units.</p>
        </div>
        <div className='brandPic'>
            <div className='storeGroup'>
            <img className="hoverable-element" src='store.png' alt='hi'/>
            <h2 className="hoverable-element">200+</h2>
            <p className="hoverable-element">Stores</p>
            </div>
            <div className='storeGroup'>
            <img className="hoverable-element" src='cities.png' alt='hi'/>
            <h2 className="hoverable-element">200+</h2>
            <p className="hoverable-element">Cities</p>
            </div>
            <div className='storeGroup'>
            <img className="hoverable-element" src='franchises.png' alt='hi'/>
            <h2 className="hoverable-element">200+</h2>
            <p className="hoverable-element">Franchises</p>
            </div>
            <div className='storeGroup'>
            <img className="hoverable-element" src='cloud_kitchens.png' alt='hi'/>
            <h2 className="hoverable-element">200+</h2>
            <p className="hoverable-element">Brands/Cloud Kitchen</p>
            </div>
        </div>
  </div>
  );
}
export default Brand;