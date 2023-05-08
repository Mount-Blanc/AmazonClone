
import './App.css'

import Card from './Card'

function App() {

  return (
  
    <main>
     <header className='header'>
      <div className='nav-belt'>
      <div className="nav-left">
      <a className='logo'>Logo</a>
      <div className='slot'>
        <a href='' className='nav-a'>
          <div className='hello-block'>
            <span>Hello</span>
            <span>select your address</span>
          </div>
        </a>
        </div>
      </div>
      <div className='nav-middle'>
        <div className='nav-search'>
          <form>
            <div className='selector'>
              <span>All</span>
            </div>
            <select className="select" title='Search'>
            <option selected="selected" value="search-alias=aps">All Departments</option>
            </select>
            <div className='nav-fill'>
         <input className='nav-input' type="search" placeholder='Search Amazon'></input>

            </div>
      <button>Submit</button>
      </form>
      </div>
      </div>
      <div className='nav-right'>
        <div className='slot'>
          <span>EN</span>
        </div>
        <div className='slot '>
          <a href='' className='nav-a '>
                      <span>Hello,sign in</span>
                      <span>Accounts & Lists</span>

          </a>

        </div>
        <div className='slot '>
      <a href='' className='nav-a'>
      <span>Returns</span>
      <span>& Orders</span>

      </a>
        </div>
        <div className='slot '>
        <a href='' className='nav-a'>
                  <span>shopping cart</span>

        </a>
        </div>
      </div>
      </div>
      <div className='nav-main '>
        <div >All</div>
        <div className=' nav-content nav-fill'>
          <a href='' className='nav-a'>Customer Service</a>
          <a href='' className='nav-a'>Best Sellers</a>
          <a href='' className='nav-a'>Amazon Basics</a>
          <a href='' className='nav-a'>New Releases</a>
          <a href='' className='nav-a'>Prime</a>
          <a href='' className='nav-a'>Today's Deals</a>
          <a href='' className='nav-a'>Music</a>
          <a href='' className='nav-a'>Books</a>
          <a href='' className='nav-a'>Registry</a>
          <a href='' className='nav-a'>Fashion</a>
          <a href='' className='nav-a'>Amazon Home</a>
          <a href='' className='nav-a'>Gift Cards</a>
          <a href='' className='nav-a'>Pharmacy</a>



        </div>
      </div>
     </header>
      <Card/>

</main>
  )
}

export default App
