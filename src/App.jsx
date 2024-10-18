import CircleComponent from './components/CircleComponent'
import ArrowComponent from './components/ArrowComponent';

import AddFriend from './assets/add-friend.png';
import Goal from './assets/goal.png';
import Pay from './assets/pay.png';
import Gift from './assets/gift.png';

import arrow1 from "./assets/Arrow1.png"
import arrow2 from "./assets/Arrow2.png"
import arrow3 from "./assets/Arrow3.png"
function App() {

  return (
    <>
    <header>
    <h1>How It Works</h1>
    </header>
    <main>
      <CircleComponent
        circleNum={1}
        imageUrl={Goal}
        instruction='Set your goal'
        stepNumber={1}
      />
      <ArrowComponent
      altTxt="arrow 1"
      imgUrl={arrow1}
      arrowNum={1}
      />
      <CircleComponent
        circleNum={2}
        imageUrl={AddFriend}
        instruction='Create or Join Group'
        stepNumber={2}
      />
      <ArrowComponent
      altTxt="arrow 2"
      imgUrl={arrow2}
      arrowNum={2}
      />

      <CircleComponent
        circleNum={3}
        imageUrl={Pay}
        instruction='Pay amount on time'
        stepNumber={3}
      />

      <ArrowComponent
        altTxt="arrow 3"
        imgUrl={arrow3}
        arrowNum={3}
      />

      <CircleComponent
        circleNum={4}
        imageUrl={Gift}
        instruction='Earn Rewards'
        stepNumber={4}
      />
    </main>
    </>
  )
}

export default App
