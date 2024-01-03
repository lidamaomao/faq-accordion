import "./App.css";
import star from "./assets/images/icon-star.svg";

import { data } from "./data";
import { Faq } from "./Faq";

function App() {
  return (
    <main>
      <div className="faqs-card">
        <h1>
          <img src={star} alt="star icon" /> FAQs
        </h1>
        {data.map((item) => {
          return <Faq {...item} key={item.id} />;
        })}
      </div>
    </main>
  );
}

export default App;
