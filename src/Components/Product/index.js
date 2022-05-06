import "./style.css";
import Img from "../Img";
import H1 from "../H1";
import React from "react";
import Cost from "../Cost";
import Measurement from "../Measurement";
import IphonColor from "../iphonColor";
import IphonSize from "../IphonSize";
import Button from "../Button";
const Product = (props) => {
    return (
        <main className="iphonContainer flex">
            
            <section className="imagesIphon flex">
                <Img src={props.src[0]} />
                <div className="smallimgIphon">
                    <Img src={props.src[1]} />
                    <Img src={props.src[2]}/>
                    <Img src={props.src[3]}/>
                </div>
            </section>
            <section className="iphonDetails flex">
                <div className="iphonH1Cost flex">
                    <H1>Apple iPhone 11 Pro 256GB Memory</H1>
                    <Cost>$499.99</Cost>
                </div>
                <div className="iphonMeasurement">
                    <Measurement/>
                </div>
                <div className="iphonColorSizeButton flex">
                    <div className="iphonColorSize flex">
                        <IphonColor />    
                        <IphonSize />
                    </div>
                    <div className="iphonButton flex">
                        <Button>Add to cart</Button>
                    </div>
                </div>
                <p> similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.</p>
            </section>
        </main>
    );
};

export default Product;
