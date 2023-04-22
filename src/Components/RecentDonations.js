export function Donation(props) {
  const { name, amount, message } = props;
  /**
   * donation.name
   * donation.amount
   * donation.message
   */
  return <div className="donation">
    <h3 className="donation-name">{name} donated ${amount}</h3>
    <p className="donation-body">{message}</p>
  </div>
}

export let donations = [
  { name: "Jo", amount: "250", message: "You really need this. Really." },
  { name: "Rami", amount: "30", message: "Here, take a break from work!" },
  { name: "Michelle", amount: "20", message: "LOL! You are too funny. Happy to do this for you. :)" },
  { name: "Malinda", amount: "5", message: "Have fun!" },
  { name: "Sam", amount: "30", message: "Come visit me in Miami!" },
]

export let listDonation = donations.map(donation => {
  return (
    <Donation
      name={donation.name}
      amount={donation.amount}
      message={donation.message}
    />
  );
})

export default function RecentDonations() {
  return <div className="recent">
    <h1>Recent Dontations</h1>
    <ul className="recent-list">
      {listDonation}
    </ul>
  </div>;
}