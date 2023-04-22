import { donations } from "./RecentDonations";

const targetAmount = 1000000;

let total = () => {
  let amount = 0
  for(const donation of donations) {
    amount += Number(donation.amount)
  }
  return amount
}

export default function Progress() {
  return <section className="progress">
    <h2>
      Raised <span className="secondary">${total().toLocaleString()}</span> of
      <span className="secondary"> ${targetAmount.toLocaleString()}</span>
    </h2>
  </section>;
}
