
import './App.css'

function App() {

  return (
  
    <main>
     <header className='header'>
      <div className='nav-belt'>
      <div class="nav-left">
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
            <button>All</button>
            <div className='nav-fill'>
         <input className='nav-input' type="search" placeholder='Search Amazon'></input>

            </div>
      <button>Submit</button>
      </form>
      </div>
      </div>
      <div className='nav-right'>
        <span>
          <span>EN</span>
        </span>
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
      <div className='nav-main'>
        <div className='nav-left'>All</div>
        <div className='nav-fill'></div>
      </div>
     </header>
     <nav>nav</nav>
     <hero>hero</hero>
     <section>1</section>
     <section>2</section>
     <section>3</section>
     <section>4</section>
     <section>5</section>
     <section>6</section>
     <section>7</section>
     <section>8</section>
</main>
  )
}

export default App
