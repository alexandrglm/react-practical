import React, { Component } from "react";
import About from "./function_component/About";
import Disclaimer from "./function_component/Disclaimer";
import AboutDes from "./destructuring_props/About";
import Customer from "./destructuring_props/Customer";
import Customers from "./spreading_props/Customers";
import Dialog from "./merge_destructured_props/Dialog";
import { Footer1, Footer2, Footer3 } from "./conditional_rendering";
import RenderChildren from "./children_types/RenderChildren";
import RenderArrays from "./array_children/RenderArrays";
import InputField from "./function_children_render_prop/InputField";
import { Header, HeaderPassThrough } from "./children_passthrough";
import Button from "./proxy_component/Button";
import Password from "./proxy_component/Password";
import CommonDialog from "./style_component/CommonDialog";
import Input from "./event_switch/Input";
import Form from "./layout_component/Form";
import CustomersContainer from "./container_component/CustomersContainer";
import Composed from "./high_order_component/Composed";
import LoginForm from "./state_hoisting/LoginForm";
import ControlledInput from "./controlled_input/ControlledInput";
import Emitter from "./event_bus/Emitter";
import Receiver from "./event_bus/Receiver";

class App extends Component {
  render() {
    const customers = [
      { id: 2, name: "Guy", email: "incognito@none.org" },
      { id: 666, name: "Evil", email: "evl@hell.hl" }
    ];

    const ErrorDialog = ({content, props}) => <CommonDialog dialogClass="error" content={content} {...props} />;
    const CustomersHOC = Composed(Customers);

    return (
      <div className="App">
          <About author="Pello" />
          <Disclaimer />
        <hr />
          <AboutDes author="Pello" />
          <Customer name="John Doe" id="666" email="jdoe@nobody.org" />
          <Customer {...customers[0]} />
          <Footer1 data={customers} />
          <Footer1 data={[]} />
          <Footer1 data={null} />
        <hr />
          <Customers data={customers} />
          <Footer2 data={customers} />
          <Footer2 data={[]} />
          <Footer2 data={null} />
        <hr />
          <Footer3 data={customers} />
          <Footer3 data={[]} />
          <Footer3 data={null} />
        <hr />
          <Dialog title="Default" content="This dialog has default content" />
          <Dialog className="warning" title="Warning!!!" content="Be careful" />
        <hr />
          <RenderChildren words={["This"," is ", <b>Cool</b>]} />
        <hr />
          <RenderArrays customers={customers} />
        <hr />
          <InputField name="email" value="any@mail.com" />
        <hr />
          <Header>
            <About author="Pello" />
            <Disclaimer />
          </Header>
        <hr />
          <HeaderPassThrough>
            <div>
              <About author="Pello" />
              <Disclaimer />
            </div>
          </HeaderPassThrough>
          <hr />
          <HeaderPassThrough>
              <Disclaimer />
          </HeaderPassThrough>
        <hr />
          <Password id="passwd" onChange={(e) => alert(e.target.value)} />
          <Button action={() => alert("Clicked")} text="Click me!" />
        <hr />
          <CommonDialog dialogClass="info" content="Info dialog txt" />
          <CommonDialog dialogClass="warning" content="Warning dialog txt" />
          <ErrorDialog content="Error dialog txt" />
        <hr />
          <Input name="email" />
        <hr />
          <Form 
            input={<Password id="passwd" onChange={(e) => alert("Works!")} />} 
            button={<Button action={() => alert("Clicked")} text="Click me!" />} 
          />
        <hr />
          <CustomersContainer /> 
        <hr />
          <h3>Customers HOC</h3>
          <CustomersHOC /> 
        <hr />
          <h3>Controlled Input</h3>
          <ControlledInput name="email" /> 
        <hr />
          <h3>Login Form</h3>
          <LoginForm /> 
        <hr />
          <Emitter />
          <Receiver />
      </div>
    );
  }
}

export default App;
