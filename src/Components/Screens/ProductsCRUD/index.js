import "./style.css";
import React from "react";
import Header from "../../Header";
import H1 from "../../H1";
import Button from "../../Button";
import { BsFillPencilFill,BsFillTrashFill } from "react-icons/bs";
const ProductscRUD = () => {
  return (
    <div className="productTabel">
        <Header/>
        <H1>Products</H1>
         <div className="tabelButton">
        <Button>Create Product</Button>
        </div>
      <table className="flex tabelPRo">
        <tr className="flex">
          <th>PRODUCT ID</th>
          <th>PRODUCT NAME</th>
          <th>PRODUCT PRICE</th>
          <th>CATEGORY</th>
          <th>ACTION</th>
        </tr>
        <tr className="flex">
          <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr >
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex"    >
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
        <tr className="flex">
        <td>#564531</td>
          <td>Airpods</td>
          <td>$89.99</td>
          <td>Accessories</td>
          <td><BsFillPencilFill/><BsFillTrashFill/></td>
        </tr>
      </table>
    </div>
  );
};

export default ProductscRUD;
