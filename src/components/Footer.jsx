function Footer () {
    return (
      <footer className="bg-gray-800 py-4 d-flex flex-col justify-center align-items-center">
        <div className="footer mx-auto">
          <p>&copy; 2025 <span style={{color:"yellow"}}>Akm Restaurant</span> All Rights Reserved.</p>
          <p>Designed By <span style={{color:"yellow"}}>Akm Mohanapriyan</span></p>
        </div>
  
        <div className="social-icons justify-content-center align-items-center py-3 text-center" >
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/share/1BYyizKa97/?mibextid=qi2Omg"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/blacklover_akm?igsh=cHB0NXZ4eW9qOWYy"><i class="bi bi-instagram"></i></a>
          <a href="https://wa.me/+940761989195"><i class="bi bi-whatsapp"></i></a>
          <a href="https://www.tiktok.com/@akm_mohanapriyan?_t=ZS-8uSihfZ2KGN&_r=1"><i class="bi bi-tiktok"></i></a>   
          </div>
  
      </footer>
    );
  }
  export default Footer;