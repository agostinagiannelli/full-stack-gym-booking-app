import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function Pricing() {
  return (
    <div className='bg-image'>
      <NavBar />
      <Title
        title="Pricing"
        link="/register"
        linkTitle="Get Started"
      />
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-1 g-3 pb-5">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div class="card text-center mb-3 shadow-sm px-4">
                <div class="card-header py-3">
                  <h4 class="my-0">Basic</h4>
                </div>
                <div class="card-body">
                  <h4 class="card-title pricing-card-title">$30<small class="fw-light">/mo</small></h4>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Access to the gym during regular hours.</li>
                    <li>Basic equipment usage.</li>
                    <li>Locker room and shower facilities.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div class="card text-center mb-3 shadow-sm px-4">
                <div class="card-header py-3">
                  <h4 class="my-0">Premium</h4>
                </div>
                <div class="card-body">
                  <h4 class="card-title pricing-card-title">$50<small class="fw-light">/mo</small></h4>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>24/7 gym access.</li>
                    <li>Unlimited equipment usage.</li>
                    <li>Premium amenities like sauna and steam room.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}