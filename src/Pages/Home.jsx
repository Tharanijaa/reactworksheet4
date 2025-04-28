

function Home() {
  return (

    <>
    
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <div className="carousel-caption d-none d-md-block">
        <h5>Akm Restaurant</h5>
        <p>Stay Safe & Feel The Taste!</p>
      </div>
    </div>
    <div className="carousel-item">
      
      <div className="carousel-caption d-none d-md-block">
      <h5>Akm Restaurant</h5>
      <p>Stay Safe & Feel The Taste!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
}
export default Home;