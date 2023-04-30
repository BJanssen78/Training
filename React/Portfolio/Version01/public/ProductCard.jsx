import { Tag, Image } from "@chakra-ui/react";
export const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((item) => (
        <>
          <Tag
            bg={"lightblue"}
            minW={300}
            minH={500}
            // textAlign={"center"}
            m={"25px"}
            gap={"25px"}
            key={item.id}
          >
            <Tag
              width={80}
              height={80}
              m={"0 auto"}
              flexDir={"column"}
              textAlign={"left"}
            >
              <Image alt={item.imgalt} src={item.imgsrc}>
                {/* <img key={item.id} alt={item.imgalt} src={item.imgsrc} /> */}
              </Image>

              <h2>{item.name}</h2>
              <p>Discription : {item.short_discription}</p>
              <p>Made by : {item.brand}</p>
            </Tag>
          </Tag>
        </>
      ))}
    </>
    // <Tag
    //   bg={"lightblue"}
    //   minW={300}
    //   minH={500}
    //   // textAlign={"center"}
    //   m={"25px"}
    //   gap={"25px"}
    // >
    //   <Tag
    //     width={80}
    //     height={80}
    //     m={"0 auto"}
    //     flexDir={"column"}
    //     textAlign={"left"}
    //   >
    //     <>
    //       {products.map((item) => (
    //         <>
    //           <Image alt={item.imgalt} src={item.imgsrc}>
    //             {/* <img key={item.id} alt={item.imgalt} src={item.imgsrc} /> */}
    //           </Image>

    //           <h2>{item.name}</h2>
    //           <p>Discription : {item.short_discription}</p>
    //           <p>Made by : {item.brand}</p>
    //         </>
    //       ))}
    //     </>
    //   </Tag>
    // </Tag>
  );
};
