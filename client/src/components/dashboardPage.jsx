import { useNavigate } from 'react-router-dom';
import teamImage from "../assets/images/team.jpg";
import logoutImage from "../assets/images/logout.png";

function DashboardPage({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <button onClick={handleLogout} className="logout-button"> <img src={logoutImage} width="30px" alt="LogoutImage"/></button>
      </header>
      <section className="dashboard-content">
        <div className="text-section">
          <h1>Welcome <br /> Dashboard</h1>
          <p>
            Step into your dashboard, designed to give you a seamless start.
            Access your tools, explore features, and get familiar with your new
            workspace. Let's get started on your journey!
          </p>
        </div>
        <div className="image-section">
          <img src={teamImage} alt="TeamImage" />
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
