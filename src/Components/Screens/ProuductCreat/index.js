import "./style.css";
import React from "react";
import Input from "../../Input";
import { BsPlusLg, BsFillCloudArrowUpFill } from "react-icons/bs";
import H1 from "../../H1";
import Button from "../../Button";
import Header from "../../Header";
const Productcreat = () => {
  return (
    <div className="prouductCreat flex">
        <Header/>
        <H1>Create New Product</H1>
      <div className="containercreat flex">
        <div className="ProductcreatLeft flex">
          <Input type={"file"}>
            <BsFillCloudArrowUpFill />
          </Input>
          <div className="smallInputs flex">
            <Input type={"file"}>
              <BsPlusLg />
            </Input>
            <Input type={"file"}>
              <BsPlusLg />
            </Input>
            <Input type={"file"}>
              <BsPlusLg />
            </Input>
          </div>
        </div>
        <div className="Productcreatright flex">
          <H1>Product Details</H1>
          <div className="creatInput flex">
            <Input type={"text"}>Product name</Input>
            <Input type={"text"}>Product Brand</Input>
          </div>
          <div className=" creatInput flex">
            <Input type={"text"}>Product ID</Input>
            <Input type={"text"}>Product Category</Input>
          </div>
          <Input type={"text"}>Product Description</Input>
          <div className=" creatInput flex">
            <Input type={"text"}>Count in Stock</Input>
            <Input type={"text"}>Price</Input>
          </div>
        </div>
      </div>
      <Button>Create New Product</Button>
    </div>
  );
};

export default Productcreat;
