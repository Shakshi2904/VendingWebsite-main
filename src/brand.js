import './brand.css';

function Brand() {
  return (
    <div className='brandpage'>
        <div id='brand' className="hoverable-element">
                <h1 className="hoverable-element">MAKING INDIA FUTURE READY WITH UNMANNED QUICK BUYING SOLUTIONS</h1>
                <p className="hoverable-element"> Enabling last mile distribution through retailers & franchise partners through intelligent retail offerings.</p></div>
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
