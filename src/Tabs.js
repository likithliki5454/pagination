
import { useState } from "react";


import { GiPear } from "react-icons/gi";

import { BiRectangle, BiHourglass } from "react-icons/bi";

import { FaAppleAlt } from "react-icons/fa";


import "./App.css";


function Tabs() {

  const [toggleState, setToggleState] = useState(1);


  const toggleTab = (index) => {

    setToggleState(index);


    console.log(index);

  };


//  buttonsel=(event)=>{
//     console.log(event.target.value)

//   }

  return (

    <div className="container">
      <div id="border">
      <div id="bloctabs">

        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >

          1

        </button>


        <button

          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}

          onClick={() => toggleTab(2)}

        >

          2

        </button>


        <button

          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}

          onClick={() => toggleTab(3)}

        >

          3

        </button>


        <button

          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}

          onClick={() => toggleTab(4)}

        >

          4

        </button>

      </div>


      <div className="content-tabs">

        <div

          className={toggleState === 1 ? "content  active-content" : "content"}

        >

          <h1 id="head">How much weight would you like to loss?</h1>


          <div className="table1">

            <div className="fstab">

              <button className="tab1"   onClick={() => toggleTab(2)} >
                
                <h5 id="hfi">15 lbs.</h5>

              </button>

            </div>


            <div className="secntab">

              <button className="tab2" onClick={() => toggleTab(2)}>

                <h5 id="hfi">15-20 lbs. </h5>{" "}

              </button>

            </div>

          </div>


          <div className="table1">

            <div className="fstab">

              <button className="tab1" onClick={() => toggleTab(2)}>

                <h5 id="hfi"> 21-30 lbs.</h5>

              </button>

            </div>


            <div className="secntab">

              <button className="tab2"  onClick={() => toggleTab(2)}>

                <h5 id="hfi"> 31-40 lbs.</h5>{" "}

              </button>

            </div>

          </div>


          <div className="table1">

            <div className="fstab">

              <button className="tab1" onClick={() => toggleTab(2)}>
                <h5 id="hfi"> 41-50 lbs.</h5>
              </button>

            </div>


            <div className="secntab">

              <button className="tab2" onClick={() => toggleTab(2)}>

                <h5 id="hfi"> 51-100 lbs.</h5>{" "}

              </button>

            </div>

          </div>


          <div className="brd">
{/*             
<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked/>
<label class="btn btn-outline-success" for="success-outlined">more than 100 lbs.</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/>
<label class="btn btn-outline-danger" for="danger-outlined">more than 50 lbs.</label> */}


            <button id="text" onClick={() => toggleTab(2)}>

              <h5 id="headng">more than 100 lbs</h5>

            </button>

          </div>


          <br></br>


          <div id="check">

            <input

              id="cbox"

              style={{ color: "cadetblue" }}

              type={"checkbox"}

            ></input>

            <span id="font">

              I have lost 10 lbs.or more in the last two months{" "}

            </span>

          </div>


          <br></br>


          <br></br>

        </div>


        <div

          className={toggleState === 2 ? "content  active-content" : "content"}

        >

          <h1 id="secndhd">Which is the closest to your body type?</h1>


          <div className="brd1">

            <FaAppleAlt className="icccc" />

            <div id="text1">

              <h5 id="headng1">

               <b id="cont">Apple</b>  <br></br>weight carried in mid section
               

              </h5>

            </div>

          </div>


          <br></br>


          <div className="brd1">

            <GiPear className="icccc" />

            <div id="text1">

              <h5 id="headng1">

              <b id="cont2">Pear</b> <br></br>weight carried hips and thighs

              </h5>

            </div>

          </div>


          <br></br>


          <div className="brd1">

            <BiRectangle className="icccc" />

            <div id="text1">

              <h5 id="headng1">

              <b id="cont3">Rectangle</b>  <br></br>weight carried evenly overall

              </h5>

            </div>

          </div>


          <br></br>


          <div className="brd1">

            <BiHourglass className="icccc" />

            <div id="text1">

              <h5 id="headng1">

              <b id="cont4">Hourglass</b>  <br></br>Weight carried evenly with waist

              </h5>

            </div>

          </div>


          <br></br>


          <h1 id="secndhd2">

            your shape tells us how your body processes food.

          </h1>


          <br></br>

        </div>


        <div

          className={toggleState === 3 ? "content  active-content" : "content"}

        >

          <h1>Yet to do</h1>

        </div>


        <div

          className={toggleState === 4 ? "content  active-content" : "content"}

        >

          <h1>Yet to do</h1>

        </div>

      </div>


      <div id="nextbtn">

        <button

          id="but"

          className={toggleState === 2 }

          onClick={() =>{if(toggleTab){
            alert('please choose one option')  
          }
          else{
            toggleTab(2) 
          }
        } }

        >

          Next

        </button>

      </div>
      </div>

    </div>

  );

}


export default Tabs;
