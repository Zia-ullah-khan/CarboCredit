import '../components/contact.css';

export const Contacts = () => {
  const handleSignupClick = () => {
    // Redirect to the '/contact' route
    window.location.href = '/';
  };
  
  return (
    <div>
      <img src="/Images/logo.jpg" className="logo" alt="logo" />
      <button type="button" onClick={handleSignupClick}>Home</button>
      <div className="description">
        <h2>What is CarboCredit</h2>
        <p>
          CarboCredit is a pioneering force in the fight against climate change, 
          facilitating seamless and secure carbon credit (GHG) trading on the XRPL blockchain. 
          We empower individuals and organizations to offset their carbon footprint, 
          invest in sustainability projects, and contribute to a healthier planet.
        </p>
        <ul>
          <li>Transparency and Trust: Every carbon credit traded on CarboCredit is traceable and verifiable on the XRPL blockchain, ensuring transparency and trust in the entire process. No more greenwashing or double counting.</li>
          <li>Efficiency and Accessibility: The XRPL's faster transaction speeds and lower fees compared to traditional carbon credit markets make CarboCredit more efficient and accessible for everyone.</li>
          <li>Impactful Projects: We connect you with high-quality, verified carbon offset projects that directly address climate change through renewable energy,forestation, and other impactful initiatives.</li>
          <li>Seamless Trading: Our user-friendly platform makes it easy to buy, sell, and manage your carbon credits, giving you complete control over your climate action journey.</li>
        </ul>
        <h2>
          Whether you're an individual looking to offset your daily emissions or a company seeking to meet your sustainability goals, CarboCredit offers a powerful solution.
        </h2>
        <h3>Join us in building a more sustainable future.</h3>
      </div>
      <div className="sidebar">
        <img src="/Images/menu.png" className="menu" alt="menu" />
        <div className="social">
          <a href="https://twitter.com/CarboCredit" target='_blank' rel='noreferrer'>
            <img src="/Images/fb.png" alt="facebook" />
          </a>
          <img src="/Images/ig.png" alt="instagram" />
          <img src="/Images/tw.png" alt="twitter" />
        </div>
        <div className="useful">
          <img src="/Images/share.png" alt="facebook" />
          <img src="/Images/info.png" alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
