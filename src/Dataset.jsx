import tourdata from './assets/dataset/tourdata.pdf'
import Navbar from './Navbar'
import Cognos from './Cognos'
import earthgif from './assets/Logos/earthgif.gif'
function Dataset(){
    return(
        <>
        <Navbar/>
        
<ul>
  <li><strong>Booking ID:</strong> A unique identification code assigned to every individual transaction to track bookings accurately.</li>
  <li><strong>Customer Name:</strong> The name of the person who made the reservation, used for personalized record-keeping and service.</li>
  <li><strong>Age Group:</strong> Categorizes customers into brackets (e.g., 18-25, 60+) to help analyze travel trends across different generations.</li>
  <li><strong>City:</strong> The primary residence of the customer, useful for understanding the geographic reach of the agency.</li>
  <li><strong>Package Type:</strong> Identifies the specific service booked, such as a Flight, Hotel, or a bundled "Combo" package.</li>
  <li><strong>Booking Date:</strong> The exact day the customer made the reservation and payment for their trip.</li>
  <li><strong>Travel Date:</strong> The scheduled date when the customer is set to depart for their vacation or journey.</li>
  <div id="gifdiv">
  <img src={earthgif} id="gif"/>
  </div>
  <li><strong>Destination:</strong> The specific travel location chosen by the customer, such as Ooty, Maldives, or Goa.</li>
  <li><strong>No of Travellers:</strong> The total count of people included in a single booking, helping to determine group sizes.</li>
  <li><strong>Package Cost:</strong> The original base price of the travel service before any reductions or taxes.</li>
  <li><strong>Discount Applied:</strong> The total amount deducted from the original price through promotions or special offers.</li>
  <li><strong>Final Revenue:</strong> The actual amount of money earned by the agency after subtracting discounts from the package cost.</li>
  <li><strong>Payment Mode:</strong> The method used by the customer to complete the transaction, such as Cash, UPI, or Net Banking.</li>
  <li><strong>Agent Name:</strong> The name of the travel consultant who assisted the customer and finalized the booking.</li>
  <li><strong>Branch City:</strong> The specific SkyWings office location where the transaction was processed and managed.</li>
  <li><strong>Season:</strong> Categorizes the trip into "Peak" or "Off-Peak" times based on the travel date to monitor seasonal demand.</li>
  <li><strong>Customer Rating (1-5):</strong> A feedback score provided by the traveler indicating their level of satisfaction with the service.</li>
</ul>
        <div className="dat">
        <iframe src={tourdata} className='data'></iframe>
        </div>
         <Cognos/>
        </>
    )
}
export default Dataset