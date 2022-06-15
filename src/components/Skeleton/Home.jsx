import React from 'react';
import img1 from '../../download.png'

function Home() {
  return (
    <div className='body container'>
      <div className='row pd'>
        <div className='col-md-4 col-sm-4'>
          <div className="card" >
          <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Civil work</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4' >
          <div className="card" >
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Architecture</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <div className="card" >
          <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Interior Design</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div className='row pd'>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <div className="card" >
          <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <div className="card" >
          <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Carpenter work</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4'>
          <div className="card" >
          <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Paints</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;