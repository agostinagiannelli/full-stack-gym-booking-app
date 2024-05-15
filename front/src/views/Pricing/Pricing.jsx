import { Title, NavBar, Footer } from '../../components'

export default function Pricing() {
  return (
    <div className="bg-image d-flex flex-column min-vh-100">
      <NavBar />
      <Title
        title="Pricing"
        link="/auth/register"
        linkTitle="Get Started"
      />
      <div className="d-flex flex-fill">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="card text-center mb-3 shadow-sm px-3">
                <div className="card-header py-3">
                  <h4 className="my-0">Basic Membership</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">$30<small className="fw-light">/mo</small></h5>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Access to the gym during regular hours.</li>
                    <li>Basic equipment usage.</li>
                    <li>Locker room and shower facilities.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card text-center mb-3 shadow-sm px-3">
                <div className="card-header py-3">
                  <h4 className="my-0">Premium Membership</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title pricing-card-title">$50<small className="fw-light">/mo</small></h5>
                  <ul className="list-unstyled mt-3 mb-4">
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
    </div>
  )
}