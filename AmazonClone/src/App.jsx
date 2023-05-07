
import './App.css'

function App() {

  return (
  
    <main>
     <header className='header'>
      <div className='nav-belt'>
      <div class="nav-left">
      <a>Logo</a>
      <div className='location-slot'>
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
        <span>sign in</span>
        <span>return</span>
        <span>shopping cart</span>
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
