import { donations } from "./RecentDonations"
import { Donation } from "./RecentDonations"
import { listDonation } from "./RecentDonations"

export default function DonationForm() {
  return <section className="donation-form">
    <h3>You could be donation <span class="secondary">#{
      donations.length + 1
    }!</span></h3>
    <form>
      <label htmlFor="name">Name
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name..." />
      </label>
      <label htmlFor="caption">Caption
        <input
          id="caption"
          name="caption"
          type="text"
          placeholder="Add a brief message..." />
      </label>
      <label htmlFor="amount">Amount
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="0" />
      </label>
      <button type="submit" id="submit-donation" onClick={() => {
        let name = document.getElementById('name')
        let amount = document.getElementById('amount')
        let message = document.getElementById('caption')

        if (name.value && amount.value > 0 && message.value) {
          let data = {
            "name": name.value,
            "amount": amount.value,
            "message": message.value
          }
          donations.push(
            data
          )
          // Number.prototypes.toLocaleString()
          listDonation.push(<Donation
            name={data.name}
            amount={Number(data.amount)}
            message={data.message}
          />)
          name.value = null
          amount.value = null
          message.value = null
        }
        else {
          window.alert(`Please fill out all fields in the donation form.`)
        }
      }}>Donate!</button>
    </form>
  </section>
}
