import { React } from "react";
import TicketForm from "../components/TicketForm";

function Home() {
  return (
    <div>
      <h3>Welcome to the Cinema!</h3>
      <p>
        Please select your tickets from the options below and then click to get
        your exclusive Thursday offer!
      </p>
      <br />
      <TicketForm />
    </div>
  );
}

export default Home;


