import React from "react";
import generateData from "../generateData";
import VMStatus from "./Status";
import CommandForm from "./CommandForm";
import {BlankForm, updateState,BcommmandExecution} from "./BlankForm";
import PlainBackgroundTable1 from "./PlainBackgroundTable1";
import Execution from "./CommandExecution";
import cs1 from "./Statusbk"


const data = generateData(5);

const VMResult = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <BlankForm />
     <BcommmandExecution />

       { /* <CommandForm />  */}
         {/*<VMStatus  />   this we can add by default it will show memory  */}
       {/* <Execution /> */ }
       {/* <PlainBackgroundTable1 /> */}
      </div>
    </div>
  </div>
);

export default VMResult;
